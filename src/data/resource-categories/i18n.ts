import type { Resource } from '../resource-types'

const resources = [
  {
    id: '210',
    url: {
      en: 'https://www.i18next.com/',
    },
    title: 'i18next',
    tags: ['国际化'],
    content: '跨框架 JavaScript 国际化方案，支持翻译、复数、格式化和插件扩展',
    iconUrl: '/images/resource-icons/i18next-de5bae.png',
  },
  {
    id: '211',
    url: {
      en: 'https://react.i18next.com/',
    },
    title: 'react-i18next',
    tags: ['国际化'],
    content: 'i18next 的 React 集成，提供 Hooks、组件和异步翻译资源加载',
    iconUrl: '/images/resource-icons/react-i18next-b75720.png',
  },
  {
    id: '212',
    url: {
      en: 'https://vue-i18n.intlify.dev/',
    },
    title: 'Vue I18n',
    tags: ['国际化'],
    content: 'Vue 国际化插件，支持组件消息、复数及日期和数字本地化',
    iconUrl: '/images/resource-icons/vue-i18n-a7f16b.png',
  },
  {
    id: '213',
    url: {
      en: 'https://next-intl.dev/',
    },
    title: 'next-intl',
    tags: ['国际化'],
    content: '面向 Next.js 的国际化方案，支持消息翻译、格式化和本地化路由',
    iconUrl: '/images/resource-icons/next-intl-fbcb25.png',
  },
  {
    id: '214',
    url: {
      en: 'https://github.com/i18next/next-i18next',
    },
    title: 'next-i18next',
    tags: ['国际化'],
    content: '为 Next.js 集成 i18next 翻译资源、服务端渲染与路由本地化',
    iconUrl: '/images/resource-icons/next-i18next-9437bb.png',
  },
  {
    id: '215',
    url: {
      en: 'https://i18n.nuxtjs.org/',
    },
    title: 'Nuxt I18n',
    tags: ['国际化'],
    content: '基于 Vue I18n 的 Nuxt 国际化模块，支持本地化路由和 SEO',
    iconUrl: '/images/resource-icons/nuxt-i18n-8266ba.ico',
  },
  {
    id: '216',
    url: {
      en: 'https://formatjs.github.io/docs/react-intl/',
    },
    title: 'React Intl',
    tags: ['国际化'],
    content: 'FormatJS 的 React 国际化库，支持 ICU 消息、复数和日期数字格式化',
    iconUrl: '/images/resource-icons/react-intl-592431.svg',
  },
  {
    id: '217',
    url: {
      en: 'https://lingui.dev/',
    },
    title: 'Lingui',
    tags: ['国际化'],
    content: '支持消息提取与编译期宏的 JavaScript 和 TypeScript 国际化库',
    iconUrl: '/images/resource-icons/lingui-a2f177.ico',
  },
  {
    id: '218',
    url: {
      en: 'https://paraglidejs.com/',
    },
    title: 'Paraglide JS',
    tags: ['国际化'],
    content: '通过编译生成类型安全翻译函数的国际化库，支持多框架与服务端渲染',
    iconUrl: '/images/resource-icons/paraglide-js-2fb9fa.png',
  },
  {
    id: '219',
    url: {
      en: 'https://ngx-translate.org/',
    },
    title: 'ngx-translate',
    tags: ['国际化'],
    content: 'Angular 的运行时翻译库，支持动态切换语言与自定义翻译加载器',
    iconUrl: '/images/resource-icons/ngx-translate-1afda0.ico',
  },
  {
    id: '220',
    url: {
      en: 'https://jsverse.gitbook.io/transloco',
    },
    title: 'Transloco',
    tags: ['国际化'],
    content: 'Angular 国际化库，支持运行时语言切换、懒加载和翻译管理',
    iconUrl: '/images/resource-icons/transloco-cc0306.ico',
  },
] as const satisfies readonly Resource[]

export default resources
