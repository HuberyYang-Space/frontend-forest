import type { Resource } from '../resource-types'

const resources = [
  {
    id: '002',
    url: {
      zh: 'https://vuex.vuejs.org/zh/',
      en: 'https://vuex.vuejs.org/',
    },
    title: 'Vuex',
    tags: ['vue', '库'],
    content: 'Vue 的传统集中式状态管理库，处于维护模式；新项目优先考虑 Pinia',
    iconUrl: '/images/resource-icons/original-002.png',
  },
  {
    id: '004',
    url: {
      zh: 'https://pinia.vuejs.org/zh/',
      en: 'https://pinia.vuejs.org/',
    },
    title: 'Pinia',
    tags: ['vue', '库'],
    content: 'Vue 官方推荐的状态管理库，提供类型推导、开发工具与模块化 store',
    iconUrl: '/images/resource-icons/original-004.svg',
  },
  {
    id: '007',
    url: {
      zh: 'https://cn.redux.js.org/',
      en: 'https://redux.js.org/',
    },
    title: 'Redux',
    tags: ['redux', '库'],
    content: '可预测的 JavaScript 状态容器；官方推荐通过 Redux Toolkit 编写 Redux 逻辑',
    iconUrl: '/images/resource-icons/original-007.ico',
  },
  {
    id: '063',
    url: {
      en: 'https://redux.js.org/toolkit/',
    },
    title: 'Redux Toolkit',
    tags: ['react'],
    content: '官方推荐的 Redux 开发工具集，简化 store、状态更新和数据请求',
    iconUrl: '/images/resource-icons/redux-toolkit-84a292.png',
  },
  {
    id: '064',
    url: {
      en: 'https://zustand.docs.pmnd.rs/',
    },
    title: 'Zustand',
    tags: ['react'],
    content: '基于 hooks 的轻量级状态管理库，支持独立 store 与中间件',
    iconUrl: '/images/resource-icons/zustand-630d1a.png',
  },
  {
    id: '065',
    url: {
      en: 'https://jotai.org/docs',
    },
    title: 'Jotai',
    tags: ['react'],
    content: '采用原子模型组合 React 应用状态的状态管理库',
    iconUrl: '/images/resource-icons/jotai-9d269e.png',
  },
  {
    id: '066',
    url: {
      en: 'https://recoiljs.org/',
      zh: 'https://recoiljs.org/zh-hans/',
    },
    title: 'Recoil',
    tags: ['react'],
    content: '已归档的 React 状态管理库，采用原子和选择器，供存量项目维护参考',
    iconUrl: '/images/resource-icons/recoil-5eb69c.png',
  },
  {
    id: '067',
    url: {
      en: 'https://mobx.js.org/',
    },
    title: 'MobX',
    tags: ['javascript'],
    content: '使用可观察状态和自动依赖追踪管理应用状态',
    iconUrl: '/images/resource-icons/mobx-15db19.png',
  },
  {
    id: '068',
    url: {
      en: 'https://stately.ai/docs/xstate',
    },
    title: 'XState',
    tags: ['javascript'],
    content: '使用状态机、状态图与 actor 模型编排应用逻辑',
    iconUrl: '/images/resource-icons/xstate-b4397c.png',
  },
  {
    id: '069',
    url: {
      en: 'https://valtio.dev/',
    },
    title: 'Valtio',
    tags: ['react'],
    content: '通过 JavaScript Proxy 管理 React 与独立应用状态',
    iconUrl: '/images/resource-icons/valtio-7d2bdf.ico',
  },
  {
    id: '070',
    url: {
      en: 'https://effector.dev/',
    },
    title: 'Effector',
    tags: ['javascript'],
    content: '使用事件、store 和 effect 组织应用业务状态',
    iconUrl: '/images/resource-icons/effector-57af89.svg',
  },
  {
    id: '071',
    url: {
      en: 'https://rxjs.dev/',
    },
    title: 'RxJS',
    tags: ['javascript'],
    content: '通过 Observable 组合异步事件与数据流的响应式编程库',
    iconUrl: '/images/resource-icons/rxjs-a4f2f8.ico',
  },
  {
    id: '072',
    url: {
      en: 'https://ngrx.io/',
    },
    title: 'NgRx',
    tags: ['angular'],
    content: '面向 Angular 的响应式状态管理与副作用处理工具集',
    iconUrl: '/images/resource-icons/ngrx-c231d0.png',
  },
  {
    id: '073',
    url: {
      en: 'https://tanstack.com/query/latest',
    },
    title: 'TanStack Query',
    tags: ['数据请求'],
    content: '提供异步数据缓存、请求状态和同步能力，支持多种前端框架',
    iconUrl: '/images/resource-icons/tanstack-query-a5bb89.png',
  },
  {
    id: '075',
    url: {
      en: 'https://vercel.com/oss/swr',
    },
    title: 'SWR',
    tags: ['react'],
    content: '基于缓存和重新验证策略的 React 数据请求 hooks',
    iconUrl: '/images/resource-icons/swr-953c17.ico',
  },
  {
    id: '076',
    url: {
      en: 'https://www.apollographql.com/docs/react/',
    },
    title: 'Apollo Client',
    tags: ['graphql'],
    content: '提供 GraphQL 查询、缓存和界面集成的数据客户端',
    iconUrl: '/images/resource-icons/apollo-client-39042a.svg',
  },
  {
    id: '077',
    url: {
      en: 'https://relay.dev/',
    },
    title: 'Relay',
    tags: ['react'],
    content: '结合编译器与声明式片段管理 React GraphQL 数据',
    iconUrl: '/images/resource-icons/relay-c226b0.png',
  },
  {
    id: '078',
    url: {
      en: 'https://urql.dev/',
    },
    title: 'urql',
    tags: ['graphql'],
    content: '采用 exchange 体系的轻量级 GraphQL 客户端',
    iconUrl: '/images/resource-icons/urql-0bd7f7.png',
  },
  {
    id: '079',
    url: {
      en: 'https://axios.rest/',
      zh: 'https://axios.rest/zh/pages/getting-started/first-steps',
    },
    title: 'Axios',
    tags: ['javascript'],
    content: '适用于浏览器和 Node.js 的 Promise HTTP 客户端',
    iconUrl: '/images/resource-icons/axios-aaa08b.ico',
  },
  {
    id: '080',
    url: {
      en: 'https://github.com/sindresorhus/ky',
    },
    title: 'Ky',
    tags: ['javascript'],
    content: '基于 Fetch API 的 HTTP 客户端，提供请求配置、重试与响应处理',
    iconUrl: '/images/resource-icons/ky-360c6d.png',
  },
  {
    id: '081',
    url: {
      en: 'https://github.com/unjs/ofetch',
    },
    title: 'ofetch',
    tags: ['javascript'],
    content: '支持浏览器、Node.js 与其他运行时的 Fetch 封装',
    iconUrl: '/images/resource-icons/ofetch-50557f.ico',
  },
  {
    id: '083',
    url: {
      en: 'https://github.com/nanostores/nanostores',
    },
    title: 'Nano Stores',
    tags: ['状态管理'],
    content: '支持多种前端框架的小型原子状态管理库',
    iconUrl: '/images/resource-icons/nano-stores-ba14bb.svg',
  },
  {
    id: '084',
    url: {
      en: 'https://opensource.salesforce.com/akita/',
    },
    title: 'Akita',
    tags: ['状态管理'],
    content: '已归档的响应式状态管理库，供存量项目维护参考',
    iconUrl: '/images/resource-icons/akita-35056f.ico',
  },
] as const satisfies readonly Resource[]

export default resources
