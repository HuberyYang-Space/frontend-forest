import axios from 'axios'

interface AudioItem {
  name?: string
  artist?: string
  url?: string
  cover?: string
  lrc?: string
}
const baseURL = 'https://www.huberyyang.site/'

async function getPlayList(id: string) {
  return axios.get(`https://huberyyang.site:83/api/getFileList?prefix=${id}`)
}

function initListItem(curList: AnyKey[], album: string): AudioItem[] {
  const temp: AudioItem[] = []
  curList.forEach((item) => {
    const Key = item.key
    const musickey = Key.split('/')[2].replace('.flac', '').split('-')
    const keyName = encodeURI(item.key.split('/')[2].replace('.flac', ''))
    const curUrl = baseURL + encodeURI(Key)
    const musicItem: AudioItem = {
      artist: musickey[0],
      name: musickey[1],
      lrc: `${baseURL}lrcs/${keyName}.lrc`,
      cover: `${baseURL}covers/${encodeURI(album)}.jpg`,
      url: curUrl,
    }
    temp.push(musicItem)
  })
  return temp
}

export async function fetchPlayList() {
  const albumList = ['周杰伦/最伟大的作品', '林俊杰/重拾_快乐', '邓紫棋/启示录']
  const allPLayeListTemp: AudioItem[] = []
  try {
    const res = await Promise.all([
      getPlayList('audios/周杰伦/'),
      getPlayList('audios/林俊杰/'),
      getPlayList('audios/邓紫棋/'),
    ])
    if (res && res.length) {
      const listMap = {
        ...res.map((item) => {
          item.data.data.shift()
          return item.data.data
        }),
      }
      albumList.forEach((_, idx) => {
        const curList = initListItem(listMap[idx], albumList[idx])
        allPLayeListTemp.push(...curList)
      })
    }
  }
  catch (error) {
    console.error(`${error}`)
  }
  return allPLayeListTemp
}
