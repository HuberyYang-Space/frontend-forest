<script setup lang="ts">
import type { MenuList } from '~/config/nav'
import Nav from '~/components/Nav.vue'
import { getNavList } from '~/config/nav'
import { fetchPlayList } from '~/config/playList'
import { startParallaxRolling } from '~/utils/startParallaxRolling'

const CardList = defineAsyncComponent(() => import('~/components/CardList.vue'))
const BaseSearchEngine = defineAsyncComponent(() => import('~/components/BaseSearchEngine.vue'))

const menuList = ref<MenuList>()
const currentYear = new Date().getFullYear()
const fetchLoading = ref(true)

function handlerScroll() {
  const main = document.querySelector('.main_container') as HTMLElement
  const value = main.getBoundingClientRect().top - 60
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  })
}
onMounted(async () => {
  startParallaxRolling()
  const instance = getCurrentInstance() as any
  const APlayer = instance.appContext.config.globalProperties.$aplayer
  menuList.value = await getNavList() || []
  fetchLoading.value = false
  ;(window as any).ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    lrcType: 3,
    audio: await fetchPlayList(),
  })
})
</script>

<template>
  <div class="body">
    <div id="player" />
    <el-backtop :right="30" :bottom="80" :visibility-height="100" />
    <Nav />
    <section class="section">
      <h2 id="text">
        <span>前端资源一站式导航</span><br><span>前端森林</span>
      </h2>
      <img id="bird1" src="/images/bird1.png">
      <img id="bird2" src="/images/bird2.png">
      <img id="forest" src="/images/forest.png">
      <span id="btn" @click="handlerScroll"><el-icon v-if="fetchLoading" class="rotate"><Loading /></el-icon>前往</span>
      <img id="rocks" src="/images/rocks.png">
      <img id="water" src="/images/water.png">
    </section>

    <main v-if="!fetchLoading" class="main_container">
      <BaseSearchEngine />
      <CardList v-for="({ title = '', data = [] }, idx) in menuList" :key="idx" :title="title" :tab-list="data" />
    </main>

    <footer v-if="!fetchLoading" class="footer_container">
      <span>&#169; HuberyYang 2022 - {{ currentYear }} </span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/homepage.scss';
</style>
