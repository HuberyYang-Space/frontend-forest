import type { Ref } from 'vue'

export function useParallax(section: Readonly<Ref<HTMLElement | null>>) {
  let stop: (() => void) | undefined

  onMounted(() => {
    const hero = section.value
    if (!hero)
      return

    const text = hero.querySelector<HTMLElement>('#text')
    const bird1 = hero.querySelector<HTMLImageElement>('#bird1')
    const bird2 = hero.querySelector<HTMLImageElement>('#bird2')
    const button = hero.querySelector<HTMLButtonElement>('#btn')
    const rocks = hero.querySelector<HTMLImageElement>('#rocks')
    const forest = hero.querySelector<HTMLImageElement>('#forest')
    const water = hero.querySelector<HTMLImageElement>('#water')
    if (!text || !bird1 || !bird2 || !button || !rocks || !forest || !water)
      return

    const update = () => {
      const { scrollY } = window
      text.style.top = `${35 - scrollY / 100}%`
      bird1.style.top = `${scrollY * -0.03}px`
      bird1.style.left = `${scrollY * 0.04}px`
      bird2.style.top = `${scrollY * -0.03}px`
      bird2.style.left = `${scrollY * -0.1}px`
      button.style.marginTop = `${scrollY * 1.5}px`
      rocks.style.top = `${scrollY * -0.12}px`
      forest.style.top = `${scrollY * 0.55}px`
      water.style.top = `${scrollY * 0.01}px`
    }

    window.addEventListener('scroll', update, { passive: true })
    stop = () => window.removeEventListener('scroll', update)
  })

  onUnmounted(() => stop?.())
}
