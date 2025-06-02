import { nanoid } from 'nanoid'

interface NavItem {
  id: string
  navName: string
  active: boolean
  href: string
}

const navList: NavItem[] = [
  // { id: nanoid(), navName: '首页', active: true },
  { id: nanoid(), navName: '博客', active: false, href: 'https://huberyyang.site:82/' },
  // { id: nanoid(), navName: '个人健身管理系统', active: false, href: '' },
  // { id: nanoid(), navName: '个人摄影作品集', active: false, href: '' },
  { id: nanoid(), navName: 'GitHub', active: false, href: 'https://github.com/Hub-yang' },
  { id: nanoid(), navName: '主页', active: false, href: 'https://huberyyang.site/' },
  { id: nanoid(), navName: '音乐', active: false, href: 'https://huberyyang.site:83/' },
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
