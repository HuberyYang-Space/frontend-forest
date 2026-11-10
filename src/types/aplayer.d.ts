declare module 'aplayer' {
  export interface APlayerAudio {
    artist: string
    name: string
    url: string
    cover: string
    lrc: string
  }

  interface APlayerOptions {
    container: HTMLElement
    fixed: boolean
    lrcType: 3
    audio: APlayerAudio[]
  }

  export default class APlayer {
    constructor(options: APlayerOptions)
    destroy(): void
  }
}
