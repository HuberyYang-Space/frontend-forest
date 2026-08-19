import * as ELIcon from '@element-plus/icons-vue'
import APlayer from 'aplayer/dist/APlayer.min.js'
import NProgress from 'nprogress'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'
import App from './App.vue'
import '~/styles/index.scss'
import 'aplayer/dist/APlayer.min.css'

function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object
}

const app = createApp(App)
app.config.globalProperties.$aplayer = APlayer
// 全局注册elementplus图标组件
for (const iconName in ELIcon) {
  if (isValidKey(iconName, ELIcon)) {
    app.component(iconName, ELIcon[iconName])
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach((_to, _from) => {
  NProgress.done()
})

app.use(router).mount('#app')
