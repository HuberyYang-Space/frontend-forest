<script setup lang="ts">
import axios from 'axios'
import config from '~/config/nav'
import { fetchPlayList } from '~/config/playList'
import useNavFixed from '~/hooks/useNavFixed'
import useParallaxRolling from '~/hooks/useParallaxRolling'

const CardList = defineAsyncComponent(() => import('~/components/CardList.vue'))
const BaseSearchEngine = defineAsyncComponent(() => import('~/components/BaseSearchEngine.vue'))
const { nav: navEl, navActive, navList, handleClickNav } = useNavFixed() as anyKey
const { onMounted } = useParallaxRolling()

const baseURL = import.meta.env.DEV ? import.meta.env.VITE_APP_BASE_API : import.meta.env.VITE_APP_REQUEST_API + import.meta.env.VITE_APP_TRUE_API
const list = config().menuList
onMounted(async () => updateItemIcon())

async function getItemIcon(id: string, query: string) {
  const res = await axios.get(`${baseURL}/getWebIcons?id=${id}&url=${query}`)
  return res?.data?.data || ''
}

function updateItemIcon() {
  for (const key in list) {
    const listData = list[key]
    listData.data.forEach(async (item: anyKey) => {
      const url = item.url.en || item.url.zh
      const res = await getItemIcon(item.id, url)
      item.iconUrl = res
    })
  }
}

function handlerScroll() {
  const main = document.querySelector('.main_container') as HTMLElement
  const value = main.getBoundingClientRect().top - 60
  window.scrollTo({
    top: value,
    behavior: 'smooth',
  })
}

// 播放器
onMounted(async () => {
  const instance = getCurrentInstance() as any
  const APlayer = instance.appContext.config.globalProperties.$aplayer
  ;(window as any).ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    lrcType: 3,
    audio: await fetchPlayList(),
  })
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="body">
    <!-- 播放器 -->
    <div id="player" />
    <!-- 返回顶部 -->
    <el-backtop :right="30" :bottom="80" :visibility-height="100" />
    <!-- 导航栏 -->
    <nav ref="navEl" class="nav" :class="[navActive ? 'active' : '']">
      <div class="container">
        <h1 class="logo">
          <a href="#">前端森林</a>
        </h1>
        <ul>
          <li v-for="{ id, href, active, navName } in navList" :key="id" @click="handleClickNav(id)">
            <a :href :class="[active ? 'current' : '']" target="_blank">{{ navName }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <section class="section">
      <h2 id="text">
        <span>前端资源一站式导航</span><br><span>前端森林</span>
      </h2>
      <img id="bird1" src="/images/bird1.png">
      <img id="bird2" src="/images/bird2.png">
      <img id="forest" src="/images/forest.png">
      <span id="btn" @click="handlerScroll">前往</span>
      <img id="rocks" src="/images/rocks.png">
      <img id="water" src="/images/water.png">
    </section>

    <main class="main_container">
      <BaseSearchEngine />
      <!-- tabs -->
      <CardList v-for="({ title = '', data = [] }, idx) in list" :key="idx" :title="title" :tab-list="data" />
    </main>

    <!-- 页脚 -->
    <footer class="footer_container">
      <span>&#169; HuberyYang 2022 - {{ currentYear }} </span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/homepage.scss';
</style>
