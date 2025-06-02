import config from '~/config/nav'

export default function () {
  const nav = ref()
  const navActive = ref(false)
  const navList = ref(config().navList)

  const fixNav = () => {
    if (window.scrollY > nav.value?.offsetHeight)
      navActive.value = true
    else
      navActive.value = false
  }

  onMounted(() => window.addEventListener('scroll', fixNav))

  const handleClickNav = (id: string | number) => {
    navList.value.forEach((nav) => {
      nav.active = false
      id === nav.id && (nav.active = true)
    })
  }

  return { nav, navActive, navList, handleClickNav }
}
