import type { Resource } from '../resource-types'

const resources = [
  {
    id: '001',
    url: {
      en: 'https://vuejs.org/',
      zh: 'https://cn.vuejs.org/',
    },
    title: 'Vue.js',
    tags: ['vue', 'js'],
    content: '用于构建 Web 用户界面的渐进式 JavaScript 框架，支持组件化与组合式 API',
    iconUrl: '/images/resource-icons/original-001.svg',
  },
  {
    id: '003',
    url: {
      zh: 'https://router.vuejs.org/zh/',
      en: 'https://router.vuejs.org/',
    },
    title: 'Vue Router',
    tags: ['vue', '库'],
    content: 'Vue.js 的官方路由',
    iconUrl: '/images/resource-icons/original-003.svg',
  },
  {
    id: '005',
    url: {
      zh: 'https://zh-hans.react.dev/',
      en: 'https://react.dev/',
    },
    title: 'React',
    tags: ['react', 'js'],
    content: '用于构建用户界面的 JavaScript 库',
    iconUrl: '/images/resource-icons/original-005.png',
  },
  {
    id: '006',
    url: {
      en: 'https://reactrouter.com/',
    },
    title: 'React Router',
    tags: ['react', '库'],
    content: '支持声明式、数据和框架模式的 React 路由与应用开发方案',
    iconUrl: '/images/resource-icons/original-006.png',
  },
  {
    id: '009',
    url: {
      en: 'https://nuxt.com/',
      zh: 'https://nuxtjs.org.cn/docs/4.x/getting-started/introduction',
    },
    title: 'Nuxt',
    tags: ['nuxt', 'vue'],
    content: '基于 Vue 的全栈应用框架，提供文件路由、服务端渲染和静态生成',
    iconUrl: '/images/resource-icons/original-009.png',
  },
  {
    id: '010',
    url: {
      en: 'https://nextjs.org/',
    },
    title: 'Next.js',
    tags: ['nextjs'],
    content: '基于 React 的全栈应用框架，支持 App Router、服务端组件与混合渲染',
    iconUrl: '/images/resource-icons/original-010.ico',
  },
  {
    id: '011',
    url: {
      en: 'https://docs.solidjs.com/',
      zh: 'https://solid.yayujs.com/',
    },
    title: 'SolidJS',
    tags: ['solidjs', 'js'],
    content: '采用细粒度响应式和编译优化的 JavaScript 用户界面库',
    iconUrl: '/images/resource-icons/original-011.png',
  },
  {
    id: '012',
    url: {
      en: 'https://svelte.dev/',
      zh: 'https://svelte.nodejs.cn/docs/svelte/overview',
    },
    title: 'Svelte',
    tags: ['svelte', 'js'],
    content: '通过编译生成界面更新代码的组件框架，使用符文表达响应式状态',
    iconUrl: '/images/resource-icons/original-012.png',
  },
  {
    id: '014',
    url: {
      en: 'https://angular.dev/',
    },
    title: 'Angular',
    tags: ['angular', 'ts'],
    content: '提供组件、依赖注入、响应式状态与完整工具链的 Web 应用框架',
    iconUrl: '/images/resource-icons/original-014.png',
  },
  {
    id: '015',
    url: {
      en: 'https://preactjs.com/guide/v11/getting-started/',
    },
    title: 'Preact',
    tags: ['preact', 'js'],
    content: '轻量级组件 UI 库，提供虚拟 DOM，并支持通过兼容层使用 React 生态',
    iconUrl: '/images/resource-icons/original-015.ico',
  },
  {
    id: '019',
    url: {
      en: 'https://qwik.dev/',
    },
    title: 'Qwik',
    tags: ['qwik', 'js'],
    content: '采用可恢复执行与按需加载的 Web 框架，减少页面启动时执行的 JavaScript',
    iconUrl: '/images/resource-icons/original-019.svg',
  },
  {
    id: '028',
    url: {
      en: 'https://astro.build/',
      zh: 'https://docs.astro.build/zh-cn/getting-started/',
    },
    title: 'Astro',
    tags: ['框架'],
    content: '面向内容网站的 Web 框架，支持组件岛、服务端渲染和多种 UI 框架',
    iconUrl: '/images/resource-icons/astro-c490cc.svg',
  },
  {
    id: '029',
    url: {
      en: 'https://svelte.dev/docs/kit/introduction',
    },
    title: 'SvelteKit',
    tags: ['svelte'],
    content: 'Svelte 的应用框架，提供文件路由、服务端渲染与部署适配器',
    iconUrl: '/images/resource-icons/sveltekit-b62200.png',
  },
  {
    id: '030',
    url: {
      en: 'https://docs.solidjs.com/solid-start/v2',
    },
    title: 'SolidStart',
    tags: ['solidjs'],
    content: 'Solid 的全栈应用框架，提供服务端函数与渲染能力，支持多种路由方案',
    iconUrl: '/images/resource-icons/solidstart-f79076.png',
  },
  {
    id: '031',
    url: {
      en: 'https://tanstack.com/start/latest',
    },
    title: 'TanStack Start',
    tags: ['react'],
    content: '面向 React 和 Solid 的类型安全应用框架，提供服务端渲染、流式传输与服务器函数',
    iconUrl: '/images/resource-icons/tanstack-start-8d26fe.png',
  },
  {
    id: '032',
    url: {
      en: 'https://remix.run/',
    },
    title: 'Remix',
    tags: ['应用框架'],
    content: '基于 Web 标准的全栈 JavaScript 框架，提供路由、服务端处理与界面运行时',
    iconUrl: '/images/resource-icons/remix-f84ed4.ico',
  },
  {
    id: '033',
    url: {
      en: 'https://www.gatsbyjs.com/',
    },
    title: 'Gatsby',
    tags: ['react'],
    content: '基于 React 和 GraphQL 构建内容网站的应用框架',
    iconUrl: '/images/resource-icons/gatsby-a5e178.png',
  },
  {
    id: '034',
    url: {
      en: 'https://docusaurus.io/',
      zh: 'https://docusaurus.io/zh-CN/',
    },
    title: 'Docusaurus',
    tags: ['react'],
    content: '基于 React 的文档网站框架，支持版本化文档、博客与国际化',
    iconUrl: '/images/resource-icons/docusaurus-cea9bf.ico',
  },
  {
    id: '035',
    url: {
      en: 'https://vitepress.dev/',
      zh: 'https://vitepress.dev/zh/',
    },
    title: 'VitePress',
    tags: ['vue'],
    content: '由 Vite 和 Vue 驱动的静态站点生成器；当前默认文档为 2.x Alpha，另有 1.x 稳定版',
    iconUrl: '/images/resource-icons/vitepress-ceb393.svg',
  },
  {
    id: '036',
    url: {
      en: 'https://umijs.org/en-US',
      zh: 'https://umijs.org/',
    },
    title: 'Umi',
    tags: ['react'],
    content: '面向企业应用的 React 框架，提供路由、构建与插件体系',
    iconUrl: '/images/resource-icons/umi-bbbe57.svg',
  },
  {
    id: '038',
    url: {
      en: 'https://usefresh.dev/',
    },
    title: 'Fresh',
    tags: ['preact'],
    content: '基于 Preact 的 Web 框架，使用服务端渲染和组件岛架构',
    iconUrl: '/images/resource-icons/fresh-f810b6.ico',
  },
  {
    id: '039',
    url: {
      en: 'https://emberjs.com/',
    },
    title: 'Ember.js',
    tags: ['javascript'],
    content: '提供路由、组件和约定式开发体验的 JavaScript 应用框架',
    iconUrl: '/images/resource-icons/ember-js-86fad2.png',
  },
  {
    id: '040',
    url: {
      en: 'https://alpinejs.dev/',
    },
    title: 'Alpine.js',
    tags: ['javascript'],
    content: '通过 HTML 属性添加交互与响应式状态的轻量级 JavaScript 框架',
    iconUrl: '/images/resource-icons/alpine-js-802289.png',
  },
  {
    id: '041',
    url: {
      en: 'https://htmx.org/',
    },
    title: 'htmx',
    tags: ['html', '交互'],
    content: '通过 HTML 属性使用请求、替换页面片段和其他浏览器交互',
    iconUrl: '/images/resource-icons/htmx-dc4762.svg',
  },
  {
    id: '042',
    url: {
      en: 'https://mithril.js.org/',
    },
    title: 'Mithril',
    tags: ['javascript'],
    content: '包含虚拟 DOM、路由和请求能力的轻量级 JavaScript 框架',
    iconUrl: '/images/resource-icons/mithril-1cad1b.png',
  },
  {
    id: '043',
    url: {
      en: 'https://backbonejs.org/',
    },
    title: 'Backbone.js',
    tags: ['javascript'],
    content: '提供模型、集合、视图和事件的传统 JavaScript 应用库',
    iconUrl: '/images/resource-icons/backbone-js-7d8684.ico',
  },
  {
    id: '044',
    url: {
      en: 'https://docs.angularjs.org/',
    },
    title: 'AngularJS',
    tags: ['javascript'],
    content: '官方支持已结束的 Angular 1.x 应用框架，供存量项目查阅维护文档',
    iconUrl: '/images/resource-icons/angularjs-bde904.ico',
  },
  {
    id: '045',
    url: {
      en: 'https://markojs.com/',
    },
    title: 'Marko',
    tags: ['javascript'],
    content: '支持服务端流式渲染与细粒度响应式的 UI 语言和框架',
    iconUrl: '/images/resource-icons/marko-48cf6c.png',
  },
  {
    id: '046',
    url: {
      en: 'https://aurelia.io/',
    },
    title: 'Aurelia',
    tags: ['typescript'],
    content: '采用约定、依赖注入与数据绑定构建应用的框架，当前 Aurelia 2 为 RC 阶段',
    iconUrl: '/images/resource-icons/aurelia-031f7c.png',
  },
  {
    id: '047',
    url: {
      en: 'https://analogjs.org/',
    },
    title: 'Analog',
    tags: ['angular'],
    content: '基于 Angular 和 Vite 的全栈应用框架，提供文件路由与服务端渲染',
    iconUrl: '/images/resource-icons/analog-8f6fe0.ico',
  },
  {
    id: '049',
    url: {
      en: 'https://knockoutjs.com/',
    },
    title: 'Knockout',
    tags: ['javascript'],
    content: '采用声明式绑定和可观察对象的 MVVM 界面库',
    iconUrl: '/images/resource-icons/knockout-e2ec5f.ico',
  },
  {
    id: '050',
    url: {
      en: 'https://riot.js.org/',
    },
    title: 'Riot.js',
    tags: ['javascript'],
    content: '提供自定义标签和紧凑组件模型的轻量级 UI 库',
    iconUrl: '/images/resource-icons/riot-js-6510a5.png',
  },
  {
    id: '051',
    url: {
      en: 'https://lit.dev/',
    },
    title: 'Lit',
    tags: ['Web组件'],
    content: '使用模板与响应式属性构建标准 Web Components 的轻量级库',
    iconUrl: '/images/resource-icons/lit-d587e2.svg',
  },
  {
    id: '052',
    url: {
      en: 'https://stenciljs.com/',
    },
    title: 'Stencil',
    tags: ['Web组件'],
    content: '用于生成跨框架 Web Components 的组件编译工具链',
    iconUrl: '/images/resource-icons/stencil-0d2302.png',
  },
  {
    id: '053',
    url: {
      en: 'https://fast.design/',
    },
    title: 'FAST',
    tags: ['Web组件'],
    content: '微软的 Web Components 库与设计系统构建工具',
    iconUrl: '/images/resource-icons/fast-8d5ebd.ico',
  },
  {
    id: '057',
    url: {
      en: 'https://qiankun.umijs.org/',
      zh: 'https://qiankun.umijs.org/zh/',
    },
    title: 'qiankun',
    tags: ['微前端'],
    content: '基于 single-spa 的微前端框架，提供应用加载、沙箱与样式隔离',
    iconUrl: '/images/resource-icons/qiankun-43ff03.png',
  },
  {
    id: '058',
    url: {
      en: 'https://single-spa.js.org/',
    },
    title: 'single-spa',
    tags: ['微前端'],
    content: '在同一页面组合多个前端应用与框架的微前端运行时',
    iconUrl: '/images/resource-icons/single-spa-a55d72.svg',
  },
  {
    id: '059',
    url: {
      en: 'https://github.com/jd-opensource/micro-app',
    },
    title: 'micro-app',
    tags: ['微前端'],
    content: '采用类 Web Components 接入应用的微前端框架，当前 1.0 为 RC 阶段',
    iconUrl: '/images/resource-icons/micro-app-64a6fd.png',
  },
  {
    id: '060',
    url: {
      zh: 'https://wujie-micro.github.io/doc/',
    },
    title: 'Wujie',
    tags: ['微前端'],
    content: '基于 Web Components 与 iframe 沙箱的微前端框架',
    iconUrl: '/images/resource-icons/wujie-32ab05.png',
  },
  {
    id: '061',
    url: {
      zh: 'https://www.garfishjs.org/',
    },
    title: 'Garfish',
    tags: ['微前端'],
    content: '提供应用加载、隔离与生命周期管理的微前端框架',
    iconUrl: '/images/resource-icons/garfish-646338.png',
  },
  {
    id: '062',
    url: {
      en: 'https://module-federation.io/',
      zh: 'https://module-federation.io/zh/',
    },
    title: 'Module Federation',
    tags: ['微前端'],
    content: '在独立构建之间共享模块的方案及其运行时与构建集成',
    iconUrl: '/images/resource-icons/module-federation-18e5c2.svg',
  },
  {
    id: '074',
    url: {
      en: 'https://tanstack.com/router/latest',
    },
    title: 'TanStack Router',
    tags: ['react', '路由'],
    content: '提供类型安全路由、搜索参数与数据加载的路由库',
    iconUrl: '/images/resource-icons/tanstack-router-039fcd.png',
  },
  {
    id: '148',
    url: {
      en: 'https://modernjs.dev/',
      zh: 'https://modernjs.dev/zh/',
    },
    title: 'Modern.js',
    tags: ['react'],
    content: '面向 React 的渐进式应用框架，提供路由、渲染、构建和部署能力',
    iconUrl: '/images/resource-icons/modern-js-d22bb1.png',
  },
  {
    id: '149',
    url: {
      en: 'https://waku.gg/',
    },
    title: 'Waku',
    tags: ['react'],
    content: '基于 React Server Components 的轻量级应用框架，当前 1.0 为 RC 阶段',
    iconUrl: '/images/resource-icons/waku-2a7368.ico',
  },
  {
    id: '150',
    url: {
      en: 'https://docs.rwsdk.com/',
    },
    title: 'RedwoodSDK',
    tags: ['react'],
    content: '面向 Cloudflare 的 React 应用框架，支持服务端组件、流式渲染和服务器函数',
    iconUrl: '/images/resource-icons/redwoodsdk-c300b4.png',
  },
  {
    id: '151',
    url: {
      en: 'https://elm-lang.org/',
    },
    title: 'Elm',
    tags: ['框架'],
    content: '用于构建可靠 Web 界面的函数式语言、编译器与应用架构',
    iconUrl: '/images/resource-icons/elm-bff0aa.ico',
  },
] as const satisfies readonly Resource[]

export default resources
