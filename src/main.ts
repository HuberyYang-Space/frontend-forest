import NProgress from 'nprogress'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import App from './App.vue'
import '~/styles/index.scss'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach((_to, _from) => {
  NProgress.done()
})

createApp(App).use(router).mount('#app')
