import { nanoid } from 'nanoid'

interface NavItem {
  id: string
  navName: string
  active: boolean
  href: string
}

const navList: NavItem[] = [
  { id: nanoid(), navName: '博客', active: false, href: 'https://blog.huberyyang.site' },
  { id: nanoid(), navName: 'GitHub', active: false, href: 'https://github.com/Hub-yang' },
  { id: nanoid(), navName: '主页', active: false, href: 'https://react.huberyyang.site' },
  { id: nanoid(), navName: '音乐', active: false, href: 'https://music.huberyyang.site' },
]

export default function () {
  const nav = ref()
  const navActive = ref(false)
  const list = ref(navList)

  const fixNav = () => {
    if (window.scrollY > nav.value?.offsetHeight)
      navActive.value = true
    else
      navActive.value = false
  }

  onMounted(() => window.addEventListener('scroll', fixNav))

  const handleClickNav = (id: string | number) => {
    list.value.forEach((nav) => {
      nav.active = false
      id === nav.id && (nav.active = true)
    })
  }

  return { nav, navActive, navList, handleClickNav }
}
