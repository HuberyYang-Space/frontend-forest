import type { Router, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'home',
      icon: '',
    },
    component: () => import('~/layout/HomePage.vue'),
  },
  {
    path: '/401',
    name: '401',
    meta: {
      title: '需要登录',
    },
    component: () => import('~/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    component: () => import('~/views/exception/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    meta: {},
    redirect: '/404',
  },
]

const router: Router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes,
})

router.beforeEach((_to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach((_to, _from) => {
  NProgress.done()
})

export default router
