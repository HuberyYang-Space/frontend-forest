import type { APlayerAudio } from 'aplayer'
import axios from 'axios'

const albums = [
  { prefix: 'audios/周杰伦/', cover: '周杰伦/最伟大的作品' },
  { prefix: 'audios/林俊杰/', cover: '林俊杰/重拾_快乐' },
  { prefix: 'audios/邓紫棋/', cover: '邓紫棋/启示录' },
]

const mediaOrigin = 'https://www.huberyyang.site'
const playlistEndpoint = '/api/getFileList'
const requestTimeout = 8000

function encodeObjectKey(key: string) {
  return key.split('/').map(segment => encodeURIComponent(segment)).join('/')
}

async function fetchAlbum({ prefix, cover }: typeof albums[number], signal: AbortSignal): Promise<APlayerAudio[]> {
  const { data } = await axios.get<unknown>(playlistEndpoint, {
    params: { prefix },
    signal,
    timeout: requestTimeout,
  })

  if (typeof data !== 'object' || data === null || !('data' in data) || !Array.isArray(data.data))
    return []

  const entries: unknown[] = data.data
  const tracks: APlayerAudio[] = []
  const coverUrl = `${mediaOrigin}/covers/${encodeObjectKey(cover)}.jpg`

  for (const entry of entries) {
    if (typeof entry !== 'object' || entry === null || !('key' in entry) || typeof entry.key !== 'string')
      continue

    const { key } = entry
    if (!key.startsWith(prefix))
      continue

    const filename = key.slice(prefix.length)
    if (filename.includes('/') || !/\.flac$/i.test(filename))
      continue

    const stem = filename.slice(0, -'.flac'.length)
    // APlayer 用 innerHTML 显示曲名，URI 编码也不接受孤立的代理码元。
    if (/[<\uD800-\uDFFF]/u.test(stem))
      continue

    const separator = stem.indexOf('-')
    if (separator < 1)
      continue

    const artist = stem.slice(0, separator).trim()
    const name = stem.slice(separator + 1).trim()
    if (!artist || !name)
      continue

    tracks.push({
      artist,
      name,
      url: `${mediaOrigin}/${encodeObjectKey(key)}`,
      lrc: `${mediaOrigin}/lrcs/${encodeURIComponent(stem)}.lrc`,
      cover: coverUrl,
    })
  }

  return tracks
}

export async function fetchPlaylist(signal: AbortSignal): Promise<APlayerAudio[]> {
  const results = await Promise.allSettled(albums.map(album => fetchAlbum(album, signal)))
  return results.flatMap(result => result.status === 'fulfilled'
    ? result.value
    : [])
}
