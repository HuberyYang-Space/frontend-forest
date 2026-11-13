import type { Resource } from '../resource-types'

const resources = [
  {
    id: '048',
    url: {
      en: 'https://jquery.com/',
    },
    title: 'jQuery',
    tags: ['javascript'],
    content: '提供 DOM 操作、事件、动画和 Ajax 的 JavaScript 工具库',
    iconUrl: '/images/resource-icons/jquery-036563.ico',
  },
  {
    id: '082',
    url: {
      en: 'https://vueuse.org/',
      zh: 'https://vueuse.nodejs.cn/',
    },
    title: 'VueUse',
    tags: ['vue'],
    content: '面向 Vue 的组合式工具函数集合，封装浏览器 API 与响应式能力',
    iconUrl: '/images/resource-icons/vueuse-db1f88.ico',
  },
] as const satisfies readonly Resource[]

export default resources
