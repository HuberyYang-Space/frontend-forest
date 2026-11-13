export interface Resource {
  readonly id: string
  readonly url: Readonly<{ en?: string, zh?: string }>
  readonly title: string
  readonly tags: readonly string[]
  readonly content: string
  readonly iconUrl: string
}
