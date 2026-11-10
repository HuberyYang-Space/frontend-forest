export function usePageTitle(enterTitle: string, leaveTitle: string) {
  let timer: number | undefined
  let defaultTitle: string

  function updateTitle() {
    window.clearTimeout(timer)

    if (document.hidden) {
      document.title = leaveTitle
      return
    }

    document.title = enterTitle
    timer = window.setTimeout(() => {
      document.title = defaultTitle
    }, 1500)
  }

  onMounted(() => {
    defaultTitle = document.title
    document.addEventListener('visibilitychange', updateTitle)
  })

  onUnmounted(() => {
    document.removeEventListener('visibilitychange', updateTitle)
    window.clearTimeout(timer)
  })
}
