import argparse
import ctypes
import fcntl
import gzip
import json
import os
import re
import shutil
import sys
import tarfile
import zlib
from contextlib import contextmanager
from html.parser import HTMLParser
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit

SITE_FILES = {"index.html", "loading.gif", "error.gif", "icon.svg", "favicon.ico"}
SITE_DIRS = {"assets", "images"}
AT_FDCWD = -100
RENAME_EXCHANGE = 2


class EntryAssets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.scripts = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "script" and attrs.get("type") == "module" and attrs.get("src"):
            self.scripts.append(attrs["src"])
        if tag == "link" and attrs.get("rel") in {"stylesheet", "modulepreload"} and attrs.get("href"):
            self.links.append(attrs["href"])


def check_site(site, *, complete=True):
    if site.is_symlink() or not site.is_dir():
        raise ValueError(f"站点必须是实际目录：{site}")
    extra = {path.name for path in site.iterdir()} - SITE_FILES - SITE_DIRS
    if extra:
        raise ValueError(f"站点存在未纳入发布的文件：{', '.join(sorted(extra))}")
    if not complete:
        return

    for name in SITE_FILES | SITE_DIRS:
        path = site / name
        exists = path.is_dir() if name in SITE_DIRS else path.is_file()
        if path.is_symlink() or not exists:
            raise ValueError(f"站点缺少有效的 {name}：{site}")

    parser = EntryAssets()
    parser.feed((site / "index.html").read_text(encoding="utf-8"))
    if not parser.scripts:
        raise ValueError(f"首页缺少模块入口：{site}")
    for asset in parser.scripts + parser.links:
        url = urlsplit(asset)
        path = PurePosixPath(url.path.lstrip("/"))
        if url.scheme or url.netloc or path.parts[:1] != ("assets",) or ".." in path.parts:
            raise ValueError(f"首页引用了发布目录外的资源：{asset}")
        if not (site / path).is_file():
            raise ValueError(f"首页引用的资源不存在：{asset}")


def unpack(archive, target):
    seen = set()
    end = 0
    block_size = tarfile.BLOCKSIZE
    with gzip.open(archive, "rb") as compressed:
        with tarfile.open(fileobj=compressed, mode="r:") as package:
            for entry in package:
                relative = PurePosixPath(entry.name)
                if relative.is_absolute() or ".." in relative.parts or relative in seen:
                    raise ValueError(f"发布包包含不安全或重复的路径：{entry.name}")
                seen.add(relative)
                destination = target / relative
                if entry.isdir():
                    destination.mkdir(parents=True, exist_ok=True)
                elif entry.type in (tarfile.REGTYPE, tarfile.AREGTYPE) and relative.parts:
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    with package.extractfile(entry) as source, destination.open("xb") as output:
                        shutil.copyfileobj(source, output)
                else:
                    raise ValueError(f"发布包包含不支持的条目：{entry.name}")
                end = entry.offset_data + (entry.size + block_size - 1) // block_size * block_size
        # tarfile 可接受成员边界处截断的归档，需显式检查结束块与 gzip 尾部。
        compressed.seek(end)
        if compressed.read(2 * block_size) != bytes(2 * block_size):
            raise tarfile.ReadError("发布包缺少 TAR 结束块")
        while block := compressed.read(1024 * 1024):
            if block.strip(b"\0"):
                raise tarfile.ReadError("发布包结束块后包含非零数据")


def exchange(site, candidate):
    libc = ctypes.CDLL(None, use_errno=True)
    rename = getattr(libc, "renameat2", None)
    if rename is None:
        raise OSError("系统缺少 renameat2，无法原子切换")
    rename.argtypes = [ctypes.c_int, ctypes.c_char_p, ctypes.c_int, ctypes.c_char_p, ctypes.c_uint]
    rename.restype = ctypes.c_int
    if rename(AT_FDCWD, os.fsencode(site), AT_FDCWD, os.fsencode(candidate), RENAME_EXCHANGE):
        error = ctypes.get_errno()
        raise OSError(error, os.strerror(error), site, None, candidate)


def directory_id(path):
    status = path.stat()
    return [status.st_dev, status.st_ino]


@contextmanager
def locked_releases(site, release_id):
    if not re.fullmatch(r"[0-9]+-[0-9]+", release_id):
        raise ValueError("发布编号必须是 GitHub Actions 运行号和尝试号")
    if site.is_symlink() or not site.is_dir():
        raise ValueError(f"站点必须是实际目录：{site}")
    deploy = site.parent.parent / f".{site.name}-deploy"
    releases = deploy / "releases"
    for directory in (deploy, releases):
        directory.mkdir(mode=0o700, exist_ok=True)
        if directory.is_symlink():
            raise ValueError(f"发布目录不能是符号链接：{directory}")
    deploy.chmod(0o700)
    if releases.stat().st_dev != site.stat().st_dev:
        raise ValueError("发布目录与站点必须位于同一文件系统")
    with (deploy / "publish.lock").open("a") as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        yield releases / release_id


def publish(site, archive, release_id):
    with locked_releases(site, release_id) as candidate:
        check_site(site)
        record = candidate.with_suffix(".json")
        if record.exists():
            raise FileExistsError(f"发布编号已使用：{release_id}")
        candidate.mkdir(mode=0o755)
        try:
            unpack(archive, candidate)
            check_site(candidate)
            with record.open("x", encoding="utf-8") as state:
                json.dump({"previous": directory_id(site), "candidate": directory_id(candidate)}, state)
                state.flush()
                os.fsync(state.fileno())
        except Exception:
            record.unlink(missing_ok=True)
            shutil.rmtree(candidate)
            raise

        print(f"切换成功后可用的回滚目录：{candidate}", flush=True)
        try:
            exchange(site, candidate)
        except OSError:
            # 内核明确拒绝交换时，候选目录仍是新构建。
            record.unlink()
            shutil.rmtree(candidate)
            raise


def rollback(site, release_id):
    with locked_releases(site, release_id) as previous:
        check_site(site, complete=False)
        check_site(previous)
        state = json.loads(previous.with_suffix(".json").read_text(encoding="utf-8"))
        if (
            not isinstance(state, dict)
            or state.get("candidate") != directory_id(site)
            or state.get("previous") != directory_id(previous)
        ):
            raise ValueError("当前目录与该发布的交换记录不符，无法回滚")
        exchange(site, previous)


def main():
    parser = argparse.ArgumentParser()
    commands = parser.add_subparsers(dest="command", required=True)
    publish_command = commands.add_parser("publish")
    rollback_command = commands.add_parser("rollback")
    for command in (publish_command, rollback_command):
        command.add_argument("site", type=Path)
        command.add_argument("release_id")
    publish_command.add_argument("archive", type=Path)
    args = parser.parse_args()
    os.umask(0o022)
    try:
        if args.command == "publish":
            publish(args.site.absolute(), args.archive, args.release_id)
        else:
            rollback(args.site.absolute(), args.release_id)
    except (ValueError, OSError, EOFError, tarfile.TarError, zlib.error) as error:
        print(f"发布操作失败：{error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
