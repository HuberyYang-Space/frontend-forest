import type { Ref } from 'vue'
import { nanoid } from 'nanoid'

const navLinks = [
  {
    id: nanoid(),
    label: '博客',
    href: 'https://blog.huberyyang.site',
  },
  {
    id: nanoid(),
    label: 'GitHub',
    href: 'https://github.com/Hub-yang',
  },
  {
    id: nanoid(),
    label: '主页',
    href: 'https://react.huberyyang.site',
  },
  {
    id: nanoid(),
    label: '音乐',
    href: 'https://music.huberyyang.site',
  },
] as const

export function useNavFixed(nav: Readonly<Ref<HTMLElement | null>>) {
  const isFixed = ref(false)
  const selectedId = ref<string>()

  function updateFixed() {
    isFixed.value = nav.value !== null && window.scrollY > nav.value.offsetHeight
  }

  onMounted(() => {
    updateFixed()
    window.addEventListener('scroll', updateFixed, { passive: true })
  })
  onUnmounted(() => window.removeEventListener('scroll', updateFixed))

  return { isFixed, navLinks, selectedId }
}
