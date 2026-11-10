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
const playlistState = ref<'idle' | 'loading' | 'ready' | 'unavailable'>('idle')
let player: APlayer | undefined

useParallax(hero)

function scrollToCatalog() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  catalog.value?.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
  })
}

async function loadPlayer() {
  if (playlistState.value === 'loading' || playlistState.value === 'ready')
    return

  playlistState.value = 'loading'
  const audio = await fetchPlaylist(playlistController.signal)
  const container = playerContainer.value
  if (!container || playlistController.signal.aborted)
    return

  if (!audio.length) {
    playlistState.value = 'unavailable'
    return
  }

  player = new APlayer({
    container,
    fixed: true,
    lrcType: 3,
    audio,
  })
  playlistState.value = 'ready'
}

onMounted(loadPlayer)

onBeforeUnmount(() => {
  playlistController.abort()
  player?.destroy()
})
</script>

<template>
  <div class="body">
    <div id="player" ref="playerContainer" />
    <el-button
      v-if="playlistState !== 'ready'"
      class="playlist_status"
      :loading="playlistState !== 'unavailable'"
      @click="loadPlayer"
    >
      {{ playlistState === 'unavailable' ? '重试加载歌单' : '歌单加载中' }}
    </el-button>
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

.playlist_status {
  position: fixed;
  z-index: 100;
  bottom: 12px;
  left: 10px;
}
</style>
