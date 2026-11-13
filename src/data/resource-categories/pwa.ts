import type { Resource } from '../resource-types'

const resources = [
  {
    id: '221',
    url: {
      en: 'https://developer.chrome.com/docs/workbox',
    },
    title: 'Workbox',
    tags: ['PWA'],
    content: 'Chrome 团队的 Service Worker 工具集，提供预缓存、运行时缓存和构建集成',
    iconUrl: '/images/resource-icons/workbox-0683e9.png',
  },
  {
    id: '222',
    url: {
      en: 'https://vite-pwa-org.netlify.app/',
    },
    title: 'Vite PWA',
    tags: ['PWA', 'vite'],
    content: '为 Vite 项目生成 Web App Manifest 与 Service Worker 的 PWA 插件',
    iconUrl: '/images/resource-icons/vite-pwa-c5bd77.ico',
  },
  {
    id: '223',
    url: {
      en: 'https://vite-pwa-org.netlify.app/frameworks/nuxt.html',
    },
    title: 'Vite PWA Nuxt',
    tags: ['PWA', 'Nuxt'],
    content: '将 Vite PWA 集成到 Nuxt 的模块，支持离线缓存和应用安装能力',
    iconUrl: '/images/resource-icons/vite-pwa-nuxt-d9f2c6.ico',
  },
  {
    id: '224',
    url: {
      en: 'https://serwist.pages.dev/',
    },
    title: 'Serwist',
    tags: ['PWA'],
    content: 'Service Worker 开发工具集，提供缓存策略与 Next.js、Vite、Nuxt 等集成',
    iconUrl: '/images/resource-icons/serwist-e85827.png',
  },
  {
    id: '225',
    url: {
      en: 'https://github.com/shadowwalker/next-pwa',
    },
    title: 'next-pwa',
    tags: ['PWA'],
    content: '基于 Workbox 的 Next.js PWA 插件，适合核对既有项目的缓存与安装配置',
    iconUrl: '/images/resource-icons/next-pwa-7da273.png',
  },
  {
    id: '226',
    url: {
      en: 'https://angular.dev/ecosystem/service-workers',
    },
    title: 'Angular Service Worker',
    tags: ['PWA'],
    content: 'Angular 官方的基础离线缓存工具，现阶段仅接受安全修复',
    iconUrl: '/images/resource-icons/angular-service-worker-25b287.png',
  },
  {
    id: '227',
    url: {
      en: 'https://www.pwabuilder.com/',
    },
    title: 'PWABuilder',
    tags: ['PWA', '工具'],
    content: '微软的 PWA 检查与应用商店打包工具，辅助完善和分发渐进式 Web 应用',
    iconUrl: '/images/resource-icons/pwabuilder-d6ad73.png',
  },
  {
    id: '285',
    url: {
      en: 'https://github.com/DuCanhGH/next-pwa',
    },
    title: 'next-pwa（DuCanhGH 分支）',
    tags: ['PWA'],
    content: '基于 Workbox 的 Next.js PWA 集成分支，用于维护既有应用的离线能力',
    iconUrl: '/images/resource-icons/next-pwa-ducanhgh-a58f7d.ico',
  },
] as const satisfies readonly Resource[]

export default resources
