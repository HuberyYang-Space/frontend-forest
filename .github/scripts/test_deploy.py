import errno
import functools
import gzip
import tarfile
import tempfile
import threading
import unittest
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from unittest.mock import patch
from urllib.request import urlopen

from frontend_forest_deploy import exchange, publish, rollback


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, *_):
        pass


def write_site(path, revision):
    path.mkdir()
    (path / "assets").mkdir()
    (path / "images").mkdir()
    (path / "images" / "bird1.png").write_text(revision)
    for name in ("error.gif", "favicon.ico", "icon.svg", "loading.gif"):
        (path / name).write_text(revision)
    (path / "assets" / f"entry-{revision}.js").write_text(revision)
    (path / "index.html").write_text(
        f'<script type="module" src="/assets/entry-{revision}.js"></script>'
    )


class DeployTests(unittest.TestCase):
    release = "123-1"

    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.root = Path(temp.name)
        self.live = self.root / "wwwroot" / "frontend-forest"
        self.live.parent.mkdir()
        self.dist = self.root / "dist"
        self.archive = self.root / "dist.tar.gz"
        self.backup = self.root / ".frontend-forest-deploy" / "releases" / self.release
        write_site(self.live, "old")
        write_site(self.dist, "new")

        handler = functools.partial(QuietHandler, directory=self.live)
        server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
        self.addCleanup(server.server_close)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        self.addCleanup(thread.join)
        self.addCleanup(server.shutdown)
        self.url = f"http://127.0.0.1:{server.server_port}"

    def pack(self, extra=None):
        with tarfile.open(self.archive, "w:gz") as archive:
            archive.add(self.dist, arcname=".")
            if extra:
                archive.addfile(extra)

    def read(self, path):
        with urlopen(self.url + path, timeout=3) as response:
            self.assertEqual(response.status, 200)
            return response.read().decode()

    def assert_served(self, revision):
        self.assertIn(f"/assets/entry-{revision}.js", self.read("/"))
        self.assertEqual(self.read(f"/assets/entry-{revision}.js"), revision)
        self.assertEqual(self.read("/loading.gif"), revision)

    def test_success_exchange_and_rollback(self):
        self.assert_served("old")
        self.pack()
        publish(self.live, self.archive, self.release)
        self.assert_served("new")
        self.assertTrue((self.backup / "assets/entry-old.js").is_file())
        with self.assertRaises(FileExistsError):
            publish(self.live, self.archive, self.release)
        self.assert_served("new")
        rollback(self.live, self.release)
        self.assert_served("old")
        self.assertTrue((self.backup / "assets/entry-new.js").is_file())
        with self.assertRaises(ValueError):
            rollback(self.live, self.release)
        self.assert_served("old")

    def test_bad_and_truncated_archive_keep_site(self):
        self.archive.write_bytes(b"bad gzip")
        with self.assertRaises(OSError):
            publish(self.live, self.archive, self.release)
        self.assert_served("old")
        self.assertFalse(self.backup.exists())

        self.pack()
        self.archive.write_bytes(self.archive.read_bytes()[:-8])
        with self.assertRaises(EOFError):
            publish(self.live, self.archive, self.release)
        self.assert_served("old")
        self.assertFalse(self.backup.exists())

    def test_incomplete_archive_keeps_site(self):
        for file in ("index.html", "assets/entry-new.js"):
            with self.subTest(file=file):
                path = self.dist / file
                content = path.read_bytes()
                path.unlink()
                self.pack()
                with self.assertRaises(ValueError):
                    publish(self.live, self.archive, self.release)
                self.assert_served("old")
                self.assertFalse(self.backup.exists())
                path.write_bytes(content)

    def test_tar_without_end_blocks_keeps_site(self):
        self.pack()
        with tarfile.open(self.archive) as archive:
            end = max(
                member.offset_data + (member.size + 511) // 512 * 512
                for member in archive
            )
        content = gzip.decompress(self.archive.read_bytes())
        self.archive.write_bytes(gzip.compress(content[:end]))
        with self.assertRaises(tarfile.ReadError):
            publish(self.live, self.archive, self.release)
        self.assert_served("old")
        self.assertFalse(self.backup.exists())

    def test_unsafe_archive_members_keep_site(self):
        cases = (
            ("../escaped", tarfile.REGTYPE),
            ("/absolute", tarfile.REGTYPE),
            ("assets/alias.js", tarfile.SYMTYPE),
            ("assets/hard.js", tarfile.LNKTYPE),
            ("assets/pipe", tarfile.FIFOTYPE),
            ("index.html", tarfile.REGTYPE),
        )
        for name, kind in cases:
            with self.subTest(member=name):
                entry = tarfile.TarInfo(name)
                entry.type = kind
                entry.linkname = "../outside"
                self.pack(entry)
                with self.assertRaises(ValueError):
                    publish(self.live, self.archive, self.release)
                self.assert_served("old")
                self.assertFalse(self.backup.exists())
                self.assertFalse((self.root / "escaped").exists())

    def test_switch_error_keeps_site_and_same_id_can_retry(self):
        self.pack()
        error = PermissionError(errno.EACCES, "injected renameat2 failure")
        with patch("frontend_forest_deploy.exchange", side_effect=error) as swap:
            with self.assertRaises(PermissionError):
                publish(self.live, self.archive, self.release)
            swap.assert_called_once_with(self.live, self.backup)
        self.assert_served("old")
        self.assertFalse(self.backup.exists())

        publish(self.live, self.archive, self.release)
        self.assert_served("new")
        self.assertTrue((self.backup / "assets/entry-old.js").is_file())

    def test_cancel_before_switch_cannot_publish_via_rollback(self):
        self.pack()
        with patch("frontend_forest_deploy.exchange", side_effect=KeyboardInterrupt):
            with self.assertRaises(KeyboardInterrupt):
                publish(self.live, self.archive, self.release)
        self.assert_served("old")
        with self.assertRaises(ValueError):
            rollback(self.live, self.release)
        self.assert_served("old")

    def test_cancel_after_switch_keeps_verified_rollback_available(self):
        self.pack()

        def swap_then_interrupt(site, backup):
            exchange(site, backup)
            raise KeyboardInterrupt

        with patch("frontend_forest_deploy.exchange", side_effect=swap_then_interrupt):
            with self.assertRaises(KeyboardInterrupt):
                publish(self.live, self.archive, self.release)
        self.assert_served("new")
        rollback(self.live, self.release)
        self.assert_served("old")

    def test_unmanaged_live_files_block_switch(self):
        path = self.live / ".well-known"
        path.mkdir()
        (path / "challenge").write_text("keep")
        self.pack()
        with self.assertRaises(ValueError):
            publish(self.live, self.archive, self.release)
        self.assert_served("old")
        self.assertEqual(self.read("/.well-known/challenge"), "keep")
        self.assertFalse(self.backup.exists())
