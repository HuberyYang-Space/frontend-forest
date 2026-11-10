<script setup lang="ts">
import APlayer from 'aplayer'
import Nav from '~/components/Nav.vue'
import { useParallax } from '~/composables/useParallax'
import { resourceGroups } from '~/data/resources'
import { fetchPlaylist } from '~/services/playlist'
import 'aplayer/dist/APlayer.min.css'

const CardList = defineAsyncComponent(() => import('~/components/CardList.vue'))
const BaseSearchEngine = defineAsyncComponent(() => import('~/components/BaseSearchEngine.vue'))

const currentYear = new Date().getFullYear()
const hero = useTemplateRef<HTMLElement>('hero')
const catalog = useTemplateRef<HTMLElement>('catalog')
const playerContainer = useTemplateRef<HTMLDivElement>('playerContainer')
const playlistController = new AbortController()
let player: APlayer | undefined

useParallax(hero)

function scrollToCatalog() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  catalog.value?.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
  })
}

onMounted(async () => {
  const audio = await fetchPlaylist(playlistController.signal)
  const container = playerContainer.value
  if (!container || !audio.length || playlistController.signal.aborted)
    return

  player = new APlayer({
    container,
    fixed: true,
    lrcType: 3,
    audio,
  })
})

onBeforeUnmount(() => {
  playlistController.abort()
  player?.destroy()
})
</script>

<template>
  <div class="body">
    <div id="player" ref="playerContainer" />
    <el-backtop :right="30" :bottom="80" :visibility-height="100" />
    <Nav />
    <section ref="hero" class="section">
      <h2 id="text">
        <span>前端资源一站式导航</span><br><span>前端森林</span>
      </h2>
      <img id="bird1" src="/images/bird1.png" alt="">
      <img id="bird2" src="/images/bird2.png" alt="">
      <img id="forest" src="/images/forest.png" alt="">
      <button id="btn" type="button" @click="scrollToCatalog">
        前往
      </button>
      <img id="rocks" src="/images/rocks.png" alt="">
      <img id="water" src="/images/water.png" alt="">
    </section>

    <main ref="catalog" class="main_container">
      <BaseSearchEngine />
      <CardList v-for="{ title, resources } in resourceGroups" :key="title" :title :resources />
    </main>

    <footer class="footer_container">
      <span>&#169; HuberyYang 2022 - {{ currentYear }} </span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@use '~/styles/homepage.scss';
</style>
