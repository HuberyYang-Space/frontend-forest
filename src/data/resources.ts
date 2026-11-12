export interface Resource {
  readonly id: string
  readonly url: Readonly<{ en?: string, zh?: string }>
  readonly title: string
  readonly tags: readonly string[]
  readonly content: string
  readonly iconUrl: string
}

export const resourceGroups = [
  {
    title: '框架与生态',
    resources: [
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
        id: '008',
        url: {
          zh: 'https://reactnative.cn/',
          en: 'https://reactnative.dev/',
        },
        title: 'React Native',
        tags: ['react native'],
        content: '使用 React 和平台原生组件开发 Android、iOS 等平台应用',
        iconUrl: '/images/resource-icons/original-005.png',
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
        id: '013',
        url: {
          zh: 'https://flutter.cn/',
          en: 'https://flutter.dev/',
        },
        title: 'Flutter',
        tags: ['flutter', '框架'],
        content: 'Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用',
        iconUrl: '/images/resource-icons/original-013.png',
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
        id: '016',
        url: {
          zh: 'https://uniapp.dcloud.net.cn/',
          en: 'https://en.uniapp.dcloud.io/',
        },
        title: 'uni-app',
        tags: ['uni-app'],
        content: '使用 Vue 开发 Web、移动端和多种小程序的一套代码多端应用框架',
        iconUrl: '/images/resource-icons/original-016.png',
      },
      {
        id: '017',
        url: {
          zh: 'https://ionic.nodejs.cn/',
          en: 'https://ionicframework.com/',
        },
        title: 'Ionic',
        tags: ['ionic', '框架'],
        content: '基于 Web 组件的跨平台移动 UI 工具包，可搭配 Angular、React 或 Vue',
        iconUrl: '/images/resource-icons/original-017.png',
      },
      {
        id: '018',
        url: {
          zh: 'https://nodejs.org/zh-cn',
          en: 'https://nodejs.org/en',
        },
        title: 'Node.js',
        tags: ['nodejs', 'js'],
        content: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
        iconUrl: '/images/resource-icons/original-018.png',
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
        id: '054',
        url: {
          en: 'https://webawesome.com/',
        },
        title: 'Web Awesome',
        tags: ['Web组件'],
        content: '基于 Web Components 的跨框架 UI 组件库，承接 Shoelace 后续开发',
        iconUrl: '/images/resource-icons/web-awesome-3caa71.ico',
      },
      {
        id: '055',
        url: {
          en: 'https://shoelace.style/',
        },
        title: 'Shoelace',
        tags: ['Web组件'],
        content: '已停止主动开发的 Web Components 组件库，后继为 Web Awesome',
        iconUrl: '/images/resource-icons/shoelace-d3f950.svg',
      },
      {
        id: '056',
        url: {
          en: 'https://opensource.adobe.com/spectrum-web-components/',
        },
        title: 'Spectrum Web Components',
        tags: ['Web组件'],
        content: 'Adobe Spectrum 设计系统的 Web Components 实现',
        iconUrl: '/images/resource-icons/spectrum-web-components-c27a0a.svg',
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
      {
        id: '085',
        url: {
          en: 'https://element-plus.org/',
          zh: 'https://element-plus.org/zh-CN/',
        },
        title: 'Element Plus',
        tags: ['vue', '组件库'],
        content: '基于 Vue 3 的桌面端 UI 组件库',
        iconUrl: '/images/resource-icons/element-plus-384e9f.svg',
      },
      {
        id: '086',
        url: {
          en: 'https://element.eleme.io/',
        },
        title: 'Element UI',
        tags: ['vue', '组件库'],
        content: '基于 Vue 2 的桌面端 UI 组件库，供存量项目维护参考',
        iconUrl: '/images/resource-icons/element-ui-d6bca5.svg',
      },
      {
        id: '087',
        url: {
          en: 'https://ant.design/',
          zh: 'https://ant.design/index-cn/',
        },
        title: 'Ant Design',
        tags: ['react'],
        content: '面向企业应用的 React 组件库与设计体系',
        iconUrl: '/images/resource-icons/ant-design-a74536.png',
      },
      {
        id: '088',
        url: {
          en: 'https://antdv.com/',
        },
        title: 'Ant Design Vue',
        tags: ['vue', '组件库'],
        content: '面向 Vue 的 Ant Design 组件库',
        iconUrl: '/images/resource-icons/ant-design-vue-1fdab9.ico',
      },
      {
        id: '089',
        url: {
          en: 'https://www.naiveui.com/',
        },
        title: 'Naive UI',
        tags: ['vue', '组件库'],
        content: '提供 TypeScript 支持与主题能力的 Vue 3 组件库',
        iconUrl: '/images/resource-icons/naive-ui-9af644.svg',
      },
      {
        id: '090',
        url: {
          zh: 'https://arco.design/react/docs/start',
        },
        title: 'Arco Design React',
        tags: ['react'],
        content: '字节跳动的 React 企业级 UI 组件库',
        iconUrl: '/images/resource-icons/arco-design-react-2316c8.ico',
      },
      {
        id: '091',
        url: {
          zh: 'https://arco.design/vue/docs/start',
        },
        title: 'Arco Design Vue',
        tags: ['vue', '组件库'],
        content: '字节跳动的 Vue 3 企业级 UI 组件库',
        iconUrl: '/images/resource-icons/arco-design-vue-3c9ebb.ico',
      },
      {
        id: '092',
        url: {
          zh: 'https://tdesign.tencent.com/react/overview',
        },
        title: 'TDesign React',
        tags: ['react'],
        content: '腾讯 TDesign 的 React 企业级组件库',
        iconUrl: '/images/resource-icons/tdesign-react-5a7dcb.ico',
      },
      {
        id: '093',
        url: {
          zh: 'https://tdesign.tencent.com/vue-next/overview',
        },
        title: 'TDesign Vue Next',
        tags: ['vue', '组件库'],
        content: '腾讯 TDesign 的 Vue 3 企业级组件库',
        iconUrl: '/images/resource-icons/tdesign-vue-next-c7b6c6.ico',
      },
      {
        id: '094',
        url: {
          en: 'https://vant-ui.github.io/vant/',
          zh: 'https://vant-ui.github.io/vant/#/zh-CN',
        },
        title: 'Vant',
        tags: ['vue', '移动端'],
        content: '面向 Vue 的移动端 UI 组件库',
        iconUrl: '/images/resource-icons/vant-55f840.png',
      },
      {
        id: '095',
        url: {
          en: 'https://nutui.jd.com/',
          zh: 'https://nutui.jd.com/h5/vue/4x/#/zh-CN/guide/intro',
        },
        title: 'NutUI',
        tags: ['vue', '移动端'],
        content: '京东的移动端 Vue 组件库，支持多端开发；当前 latest 为 4.x Beta 版本',
        iconUrl: '/images/resource-icons/nutui-a25c64.png',
      },
      {
        id: '096',
        url: {
          en: 'https://vuetifyjs.com/',
        },
        title: 'Vuetify',
        tags: ['vue', '组件库'],
        content: '采用 Material Design 的 Vue 组件与应用界面框架',
        iconUrl: '/images/resource-icons/vuetify-0c5916.ico',
      },
      {
        id: '097',
        url: {
          en: 'https://quasar.dev/',
        },
        title: 'Quasar',
        tags: ['vue', '组件库'],
        content: '基于 Vue 的组件库与跨平台应用开发框架',
        iconUrl: '/images/resource-icons/quasar-d9bb68.png',
      },
      {
        id: '098',
        url: {
          en: 'https://primevue.dev/',
        },
        title: 'PrimeVue',
        tags: ['vue', '组件库'],
        content: '面向 Vue 的 UI 组件库，支持预设与无样式主题方案',
        iconUrl: '/images/resource-icons/primevue-07c13f.png',
      },
      {
        id: '099',
        url: {
          en: 'https://primereact.dev/',
        },
        title: 'PrimeReact',
        tags: ['react'],
        content: '面向 React 的 UI 组件库，提供主题与应用界面组件',
        iconUrl: '/images/resource-icons/primereact-ec3532.png',
      },
      {
        id: '100',
        url: {
          en: 'https://primeng.dev/',
        },
        title: 'PrimeNG',
        tags: ['angular'],
        content: '面向 Angular 的 UI 组件库',
        iconUrl: '/images/resource-icons/primeng-21d62c.png',
      },
      {
        id: '101',
        url: {
          en: 'https://mui.com/material-ui/',
        },
        title: 'Material UI',
        tags: ['react'],
        content: '实现 Material Design 的 React 组件库',
        iconUrl: '/images/resource-icons/material-ui-98a9ae.png',
      },
      {
        id: '102',
        url: {
          en: 'https://chakra-ui.com/',
        },
        title: 'Chakra UI',
        tags: ['react'],
        content: '可组合、注重无障碍和主题能力的 React 组件库',
        iconUrl: '/images/resource-icons/chakra-ui-f75309.ico',
      },
      {
        id: '103',
        url: {
          en: 'https://mantine.dev/',
        },
        title: 'Mantine',
        tags: ['react'],
        content: '提供组件、hooks 和主题能力的 React UI 工具集',
        iconUrl: '/images/resource-icons/mantine-3e0014.svg',
      },
      {
        id: '104',
        url: {
          en: 'https://www.radix-ui.com/',
        },
        title: 'Radix UI',
        tags: ['react'],
        content: '面向 React 的无样式可访问组件原语与主题组件',
        iconUrl: '/images/resource-icons/radix-ui-e5dfbb.png',
      },
      {
        id: '105',
        url: {
          en: 'https://ui.shadcn.com/',
        },
        title: 'shadcn/ui',
        tags: ['react'],
        content: '通过 CLI 获取并持有源码的 React 可组合组件集合',
        iconUrl: '/images/resource-icons/shadcn-ui-542509.png',
      },
      {
        id: '106',
        url: {
          en: 'https://headlessui.com/',
        },
        title: 'Headless UI',
        tags: ['react', 'vue'],
        content: '面向 React 与 Vue 的无样式可访问组件',
        iconUrl: '/images/resource-icons/headless-ui-a67544.ico',
      },
      {
        id: '107',
        url: {
          en: 'https://react-aria.adobe.com/',
        },
        title: 'React Aria',
        tags: ['react'],
        content: 'Adobe 提供的可访问、可组合 React 组件与交互能力',
        iconUrl: '/images/resource-icons/react-aria-c06120.png',
      },
      {
        id: '108',
        url: {
          en: 'https://heroui.com/en/docs/react/getting-started/quick-start',
        },
        title: 'HeroUI',
        tags: ['react'],
        content: '基于 React Aria 和 Tailwind CSS 的 React 组件库',
        iconUrl: '/images/resource-icons/heroui-5a956a.svg',
      },
      {
        id: '109',
        url: {
          en: 'https://storybooks.fluentui.dev/react/',
        },
        title: 'Fluent UI React',
        tags: ['react'],
        content: '微软 Fluent 设计系统的 React 组件库',
        iconUrl: '/images/resource-icons/fluent-ui-react-08fa0c.png',
      },
      {
        id: '110',
        url: {
          en: 'https://material.angular.dev/',
        },
        title: 'Angular Material',
        tags: ['angular'],
        content: 'Angular 官方 Material Design 组件库与 CDK',
        iconUrl: '/images/resource-icons/angular-material-c6c937.png',
      },
      {
        id: '111',
        url: {
          en: 'https://ng.ant.design/',
          zh: 'https://ng.ant.design/docs/introduce/zh',
        },
        title: 'NG-ZORRO',
        tags: ['angular'],
        content: 'Ant Design 的 Angular 组件实现',
        iconUrl: '/images/resource-icons/ng-zorro-12c096.png',
      },
      {
        id: '112',
        url: {
          en: 'https://mobile.ant.design/',
        },
        title: 'Ant Design Mobile',
        tags: ['react'],
        content: '面向 React 的移动端 UI 组件库',
        iconUrl: '/images/resource-icons/ant-design-mobile-e2d68e.svg',
      },
      {
        id: '113',
        url: {
          en: 'https://tamagui.dev/',
        },
        title: 'Tamagui',
        tags: ['react'],
        content: '面向 React Web 与 React Native 的跨平台样式和组件系统',
        iconUrl: '/images/resource-icons/tamagui-cad464.png',
      },
      {
        id: '114',
        url: {
          en: 'https://www.skeleton.dev/',
        },
        title: 'Skeleton',
        tags: ['react'],
        content: '以 Tailwind CSS 为基础的应用界面工具集，提供 React 与 Svelte 组件',
        iconUrl: '/images/resource-icons/skeleton-ea5f6b.ico',
      },
      {
        id: '115',
        url: {
          en: 'https://bits-ui.com/',
        },
        title: 'Bits UI',
        tags: ['svelte'],
        content: '面向 Svelte 的无样式可访问组件原语',
        iconUrl: '/images/resource-icons/bits-ui-e101fe.svg',
      },
      {
        id: '116',
        url: {
          en: 'https://sveltematerialui.com/',
        },
        title: 'Svelte Material UI',
        tags: ['svelte'],
        content: '面向 Svelte 的 Material Design 组件库',
        iconUrl: '/images/resource-icons/svelte-material-ui-cc4ba2.png',
      },
      {
        id: '117',
        url: {
          en: 'https://react-bootstrap.netlify.app/',
        },
        title: 'React Bootstrap',
        tags: ['react'],
        content: '使用 React 组件重新实现 Bootstrap；默认文档为 3.x Beta，另有 2.x 稳定版',
        iconUrl: '/images/resource-icons/react-bootstrap-c77a4c.png',
      },
      {
        id: '119',
        url: {
          en: 'https://semantic-ui.com/',
        },
        title: 'Semantic UI',
        tags: ['css', '组件库'],
        content: '采用语义化类名的传统 Web UI 组件与样式库',
        iconUrl: '/images/resource-icons/semantic-ui-8f60b1.ico',
      },
      {
        id: '121',
        url: {
          en: 'https://react.semantic-ui.com/',
        },
        title: 'Semantic UI React',
        tags: ['react'],
        content: 'Semantic UI 的 React 实现；默认文档为 3.x Beta，另有 2.x 稳定版供存量项目使用',
        iconUrl: '/images/resource-icons/semantic-ui-react-100b69.png',
      },
      {
        id: '122',
        url: {
          en: 'https://blueprintjs.com/',
        },
        title: 'Blueprint',
        tags: ['react'],
        content: '面向复杂数据密集型应用的 React UI 组件库',
        iconUrl: '/images/resource-icons/blueprint-696f52.png',
      },
      {
        id: '123',
        url: {
          en: 'https://carbondesignsystem.com/',
        },
        title: 'Carbon Design System',
        tags: ['react'],
        content: 'IBM Carbon 设计系统的组件与开发资源',
        iconUrl: '/images/resource-icons/carbon-design-system-3059aa.svg',
      },
      {
        id: '124',
        url: {
          zh: 'https://semi.design/',
        },
        title: 'Semi Design',
        tags: ['react'],
        content: '抖音前端团队的企业级 React 组件库与设计系统',
        iconUrl: '/images/resource-icons/semi-design-6d1f7f.ico',
      },
      {
        id: '126',
        url: {
          en: 'https://base-ui.com/',
        },
        title: 'Base UI',
        tags: ['react'],
        content: '面向 React 的无样式可访问组件原语',
        iconUrl: '/images/resource-icons/base-ui-0e6244.ico',
      },
      {
        id: '127',
        url: {
          en: 'https://ark-ui.com/',
        },
        title: 'Ark UI',
        tags: ['react', 'vue'],
        content: '面向多种框架的无样式可访问组件库',
        iconUrl: '/images/resource-icons/ark-ui-5264b6.ico',
      },
      {
        id: '128',
        url: {
          en: 'https://reka-ui.com/',
        },
        title: 'Reka UI',
        tags: ['vue', '无障碍'],
        content: '面向 Vue 的无样式可访问组件原语',
        iconUrl: '/images/resource-icons/reka-ui-ea1a1d.png',
      },
      {
        id: '129',
        url: {
          en: 'https://www.shadcn-vue.com/',
        },
        title: 'shadcn-vue',
        tags: ['vue', '组件库'],
        content: '面向 Vue 的可持有源码组件集合与 CLI',
        iconUrl: '/images/resource-icons/shadcn-vue-8c5cd5.ico',
      },
      {
        id: '130',
        url: {
          en: 'https://ui.nuxt.com/',
        },
        title: 'Nuxt UI',
        tags: ['vue', 'nuxt'],
        content: 'Nuxt 团队提供的 Vue 组件库，支持 Nuxt 与 Vue 应用',
        iconUrl: '/images/resource-icons/nuxt-ui-d7afdc.ico',
      },
      {
        id: '131',
        url: {
          en: 'https://expo.dev/',
        },
        title: 'Expo',
        tags: ['react-native'],
        content: '围绕 React Native 构建、运行和交付应用的平台与工具集',
        iconUrl: '/images/resource-icons/expo-f5e5ca.png',
      },
      {
        id: '132',
        url: {
          zh: 'https://github.com/NervJS/taro',
        },
        title: 'Taro',
        tags: ['react'],
        content: '使用 React 等技术开发多端应用与小程序的跨端框架',
        iconUrl: '/images/resource-icons/taro-3664bb.ico',
      },
      {
        id: '133',
        url: {
          en: 'https://capacitorjs.com/',
        },
        title: 'Capacitor',
        tags: ['移动端'],
        content: '将 Web 应用与原生平台能力连接起来的跨平台原生运行时',
        iconUrl: '/images/resource-icons/capacitor-6bf4bb.png',
      },
      {
        id: '134',
        url: {
          en: 'https://nativescript.org/',
        },
        title: 'NativeScript',
        tags: ['移动端'],
        content: '使用 JavaScript 或 TypeScript 开发原生移动界面与应用',
        iconUrl: '/images/resource-icons/nativescript-d2ac13.png',
      },
      {
        id: '135',
        url: {
          en: 'https://www.electronjs.org/',
          zh: 'https://www.electronjs.org/zh/docs/latest/',
        },
        title: 'Electron',
        tags: ['桌面', '跨端'],
        content: '结合 Chromium 与 Node.js 使用 Web 技术构建桌面应用',
        iconUrl: '/images/resource-icons/electron-61a62a.ico',
      },
      {
        id: '136',
        url: {
          en: 'https://v2.tauri.app/',
          zh: 'https://v2.tauri.app/zh-cn/',
        },
        title: 'Tauri',
        tags: ['桌面'],
        content: '结合 Web 前端、系统 WebView 与 Rust 构建跨平台应用',
        iconUrl: '/images/resource-icons/tauri-039af0.svg',
      },
      {
        id: '137',
        url: {
          en: 'https://github.com/wailsapp/wails',
        },
        title: 'Wails',
        tags: ['桌面', '跨端'],
        content: '使用 Go 与 Web 前端技术构建桌面应用的框架',
        iconUrl: '/images/resource-icons/wails-e073cd.png',
      },
      {
        id: '138',
        url: {
          en: 'https://neutralino.js.org/',
        },
        title: 'Neutralinojs',
        tags: ['桌面', '跨端'],
        content: '使用系统 WebView 与 JavaScript 原生 API 构建轻量桌面应用',
        iconUrl: '/images/resource-icons/neutralinojs-543c9a.png',
      },
      {
        id: '139',
        url: {
          en: 'https://nwjs.io/',
        },
        title: 'NW.js',
        tags: ['桌面', '跨端'],
        content: '结合 Chromium 与 Node.js 的桌面应用运行时',
        iconUrl: '/images/resource-icons/nw-js-e63909.png',
      },
      {
        id: '140',
        url: {
          en: 'https://framework7.io/',
        },
        title: 'Framework7',
        tags: ['移动端'],
        content: '构建移动与桌面 Web 应用的 UI 框架，提供多种框架集成',
        iconUrl: '/images/resource-icons/framework7-47e3c7.png',
      },
      {
        id: '142',
        url: {
          en: 'https://lynxjs.org/',
          zh: 'https://lynxjs.org/zh/',
        },
        title: 'Lynx',
        tags: ['react'],
        content: '支持使用 Web 风格技术构建跨平台原生界面的开源技术栈',
        iconUrl: '/images/resource-icons/lynx-dfb929.png',
      },
      {
        id: '144',
        url: {
          en: 'https://bun.sh/',
        },
        title: 'Bun',
        tags: ['javascript'],
        content: '集运行、依赖管理、测试与打包于一体的 JavaScript 和 TypeScript 工具包',
        iconUrl: '/images/resource-icons/bun-d50419.ico',
      },
      {
        id: '145',
        url: {
          en: 'https://deno.com/',
        },
        title: 'Deno',
        tags: ['javascript'],
        content: '支持 JavaScript、TypeScript 与 Web 标准 API 的运行时；官方于 2026 年 10 月宣布转入一年期月度修复与安全维护',
        iconUrl: '/images/resource-icons/deno-2a4500.ico',
      },
      {
        id: '146',
        url: {
          en: 'https://github.com/meta/hermes',
        },
        title: 'Hermes',
        tags: ['react-native'],
        content: '为 React Native 优化的底层 JavaScript 引擎，通过提前编译改善启动与内存使用',
        iconUrl: '/images/resource-icons/hermes-66e098.ico',
      },
      {
        id: '147',
        url: {
          en: 'https://bellard.org/quickjs/',
        },
        title: 'QuickJS',
        tags: ['javascript'],
        content: '可嵌入应用和工具的轻量级 JavaScript 引擎，提供脚本执行、模块与编译能力',
        iconUrl: '/images/resource-icons/quickjs-54721c.png',
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
      {
        id: '153',
        url: {
          en: 'https://echarts.apache.org/en/',
        },
        title: 'Apache ECharts',
        tags: ['图表'],
        content: 'Apache 的交互式数据可视化库，提供常见统计图表与 Canvas、SVG 渲染',
        iconUrl: '/images/resource-icons/apache-echarts-ac91db.ico',
      },
      {
        id: '154',
        url: {
          en: 'https://d3js.org/',
        },
        title: 'D3',
        tags: ['图表'],
        content: '用于定制数据可视化的 JavaScript 工具集，覆盖数据映射、形状、交互和布局',
        iconUrl: '/images/resource-icons/d3-bed7ab.png',
      },
      {
        id: '155',
        url: {
          en: 'https://www.chartjs.org/',
        },
        title: 'Chart.js',
        tags: ['图表'],
        content: '基于 Canvas 的图表库，提供响应式图表、动画和插件机制',
        iconUrl: '/images/resource-icons/chart-js-fe4a7e.ico',
      },
      {
        id: '156',
        url: {
          en: 'https://api.highcharts.com/highcharts/',
        },
        title: 'Highcharts',
        tags: ['图表'],
        content: '提供统计、金融、地图和甘特图等图表能力的 JavaScript 数据可视化库',
        iconUrl: '/images/resource-icons/highcharts-ed4d42.png',
      },
      {
        id: '157',
        url: {
          en: 'https://apexcharts.com/',
        },
        title: 'ApexCharts',
        tags: ['图表'],
        content: '提供响应式交互图表与多框架集成的 JavaScript 图表库',
        iconUrl: '/images/resource-icons/apexcharts-b072f3.png',
      },
      {
        id: '158',
        url: {
          en: 'https://recharts.github.io/',
        },
        title: 'Recharts',
        tags: ['图表'],
        content: '基于 React 组件和 SVG 的可组合图表库',
        iconUrl: '/images/resource-icons/recharts-002459.png',
      },
      {
        id: '159',
        url: {
          en: 'https://nivo.rocks/',
        },
        title: 'Nivo',
        tags: ['图表'],
        content: '基于 React 与 D3 的数据可视化组件，支持多种统计图与 SVG、Canvas 渲染',
        iconUrl: '/images/resource-icons/nivo-be8738.png',
      },
      {
        id: '160',
        url: {
          en: 'https://visx.airbnb.tech/',
        },
        title: 'visx',
        tags: ['图表'],
        content: 'Airbnb 的 React 可视化组件集合，结合 D3 计算能力构建定制图表',
        iconUrl: '/images/resource-icons/visx-f3b8db.png',
      },
      {
        id: '161',
        url: {
          en: 'https://nearform.com/open-source/victory/',
        },
        title: 'Victory',
        tags: ['图表'],
        content: '用于 React 的可组合图表组件库，提供区域图、散点图等图表',
        iconUrl: '/images/resource-icons/victory-2e9b5a.ico',
      },
      {
        id: '162',
        url: {
          en: 'https://vega.github.io/vega/',
        },
        title: 'Vega',
        tags: ['图表'],
        content: '通过声明式 JSON 规格描述交互可视化，并使用 Canvas 或 SVG 生成视图',
        iconUrl: '/images/resource-icons/vega-06bf3f.ico',
      },
      {
        id: '163',
        url: {
          en: 'https://vega.github.io/vega-lite/',
        },
        title: 'Vega-Lite',
        tags: ['图表'],
        content: '以简洁声明式语法描述统计图形，自动生成坐标轴、图例与交互',
        iconUrl: '/images/resource-icons/vega-lite-81cbb0.ico',
      },
      {
        id: '164',
        url: {
          en: 'https://observablehq.github.io/plot/',
        },
        title: 'Observable Plot',
        tags: ['图表'],
        content: '由 D3 团队维护、使用简洁代码创建探索性数据图表的 JavaScript 库',
        iconUrl: '/images/resource-icons/observable-plot-6d4da4.png',
      },
      {
        id: '165',
        url: {
          en: 'https://plotly.com/javascript/',
        },
        title: 'Plotly.js',
        tags: ['图表'],
        content: '支持统计、科学、金融和三维图表的声明式 JavaScript 图表库',
        iconUrl: '/images/resource-icons/plotly-js-6c50ca.ico',
      },
      {
        id: '166',
        url: {
          zh: 'https://g2.antv.antgroup.com/',
        },
        title: 'AntV G2',
        tags: ['图表'],
        content: '蚂蚁 AntV 的图形语法可视化引擎，用声明式配置组合统计图表',
        iconUrl: '/images/resource-icons/antv-g2-adf51f.png',
      },
      {
        id: '167',
        url: {
          zh: 'https://g6.antv.antgroup.com/',
        },
        title: 'AntV G6',
        tags: ['图表'],
        content: '蚂蚁 AntV 的关系图可视化引擎，提供图布局、交互与节点定制',
        iconUrl: '/images/resource-icons/antv-g6-c2d8bd.png',
      },
      {
        id: '168',
        url: {
          zh: 'https://x6.antv.antgroup.com/',
        },
        title: 'AntV X6',
        tags: ['流程图'],
        content: '基于 SVG 与 HTML 的图编辑引擎，可构建流程图、DAG 和数据血缘图',
        iconUrl: '/images/resource-icons/antv-x6-f618da.png',
      },
      {
        id: '169',
        url: {
          zh: 'https://f2.antv.antgroup.com/',
        },
        title: 'AntV F2',
        tags: ['图表'],
        content: '面向移动场景的图形语法可视化引擎，提供图表、动画和交互扩展',
        iconUrl: '/images/resource-icons/antv-f2-890ce7.png',
      },
      {
        id: '170',
        url: {
          en: 'https://www.visactor.io/vchart/',
        },
        title: 'VisActor VChart',
        tags: ['图表'],
        content: '字节跳动 VisActor 的跨端图表库，覆盖常见二维和三维统计图表',
        iconUrl: '/images/resource-icons/visactor-vchart-7c4394.png',
      },
      {
        id: '171',
        url: {
          en: 'https://unovis.dev/',
        },
        title: 'Unovis',
        tags: ['图表'],
        content: '模块化数据可视化组件库，支持 React、Vue、Angular、Svelte 和原生 JavaScript',
        iconUrl: '/images/resource-icons/unovis-7ffafe.svg',
      },
      {
        id: '172',
        url: {
          en: 'https://github.com/leeoniya/uPlot',
        },
        title: 'uPlot',
        tags: ['图表'],
        content: '侧重性能与小体积的 Canvas 图表库，适用于时间序列、折线和金融数据',
        iconUrl: '/images/resource-icons/uplot-22ab20.png',
      },
      {
        id: '173',
        url: {
          en: 'https://tradingview.github.io/lightweight-charts/',
        },
        title: 'Lightweight Charts',
        tags: ['图表', '金融'],
        content: 'TradingView 的轻量交互式金融图表库，支持系列、指标和插件扩展',
        iconUrl: '/images/resource-icons/lightweight-charts-6fd382.png',
      },
      {
        id: '174',
        url: {
          en: 'https://www.ag-grid.com/charts/',
        },
        title: 'AG Charts',
        tags: ['图表'],
        content: '支持 JavaScript、React、Vue 和 Angular 的图表库，提供社区版与企业版',
        iconUrl: '/images/resource-icons/ag-charts-e2b1fc.png',
      },
      {
        id: '175',
        url: {
          en: 'https://naver.github.io/billboard.js/',
        },
        title: 'billboard.js',
        tags: ['图表'],
        content: 'NAVER 基于 D3 的可复用图表库，提供 SVG 和 Canvas 渲染',
        iconUrl: '/images/resource-icons/billboard-js-8f459c.ico',
      },
      {
        id: '176',
        url: {
          en: 'https://js.cytoscape.org/',
        },
        title: 'Cytoscape.js',
        tags: ['关系图'],
        content: '用于关系网络可视化与分析的 JavaScript 图论库',
        iconUrl: '/images/resource-icons/cytoscape-js-836195.png',
      },
      {
        id: '177',
        url: {
          en: 'https://www.sigmajs.org/',
        },
        title: 'Sigma.js',
        tags: ['关系图'],
        content: '基于 WebGL 与 Graphology 的大规模交互关系图可视化库',
        iconUrl: '/images/resource-icons/sigma-js-34039c.png',
      },
      {
        id: '178',
        url: {
          en: 'https://threejs.org/',
        },
        title: 'Three.js',
        tags: ['3D', 'WebGL'],
        content: '用于构建浏览器三维场景的 JavaScript 库，提供模型、材质、灯光和渲染能力',
        iconUrl: '/images/resource-icons/three-js-86f64e.ico',
      },
      {
        id: '179',
        url: {
          en: 'https://www.babylonjs.com/',
        },
        title: 'Babylon.js',
        tags: ['3D', 'WebGL'],
        content: '支持 WebGL、WebGPU 与丰富三维工具链的开源 Web 3D 引擎',
        iconUrl: '/images/resource-icons/babylon-js-1d5b89.ico',
      },
      {
        id: '180',
        url: {
          en: 'https://pixijs.com/',
        },
        title: 'PixiJS',
        tags: ['2D', '图形'],
        content: '基于 WebGL 和 WebGPU 的二维图形渲染引擎，可构建游戏与交互内容',
        iconUrl: '/images/resource-icons/pixijs-8ef5d1.png',
      },
      {
        id: '181',
        url: {
          en: 'https://r3f.docs.pmnd.rs/',
        },
        title: 'React Three Fiber',
        tags: ['3D', 'react'],
        content: 'Three.js 的 React 渲染器，以组件方式构建可交互的三维场景',
        iconUrl: '/images/resource-icons/react-three-fiber-d51783.ico',
      },
      {
        id: '182',
        url: {
          en: 'https://gsap.com/',
        },
        title: 'GSAP',
        tags: ['动画', 'js'],
        content: '提供时间线、缓动、滚动和 SVG 等能力的 JavaScript 动画工具集',
        iconUrl: '/images/resource-icons/gsap-f854d4.png',
      },
      {
        id: '183',
        url: {
          en: 'https://motion.dev/',
        },
        title: 'Motion',
        tags: ['动画', 'react'],
        content: '支持 React、Vue 与 JavaScript 的动画库，覆盖布局、手势、滚动和弹簧动画',
        iconUrl: '/images/resource-icons/motion-8ca344.svg',
      },
      {
        id: '184',
        url: {
          en: 'https://animejs.com/',
        },
        title: 'Anime.js',
        tags: ['动画', 'js'],
        content: '用于属性、关键帧、时间线、SVG 与滚动交互的 JavaScript 动画引擎',
        iconUrl: '/images/resource-icons/anime-js-beb979.png',
      },
      {
        id: '185',
        url: {
          en: 'https://www.react-spring.dev/',
        },
        title: 'React Spring',
        tags: ['动画', 'react'],
        content: '基于弹簧物理模型的 React 动画库，支持可交互的自然运动',
        iconUrl: '/images/resource-icons/react-spring-439bbd.ico',
      },
      {
        id: '186',
        url: {
          en: 'https://github.com/airbnb/lottie-web',
        },
        title: 'Lottie Web',
        tags: ['动画', 'Lottie'],
        content: '将 Lottie 动画数据渲染到网页的播放库，支持 SVG、Canvas 和 HTML 渲染',
        iconUrl: '/images/resource-icons/lottie-web-43c27e.png',
      },
      {
        id: '187',
        url: {
          en: 'https://rive.app/docs/runtimes/web/web-js',
        },
        title: 'Rive Web',
        tags: ['动画', 'Rive'],
        content: 'Rive 的开源 Web 运行时，用于播放交互动画与状态机',
        iconUrl: '/images/resource-icons/rive-web-83c80f.png',
      },
      {
        id: '188',
        url: {
          en: 'https://auto-animate.formkit.com/',
        },
        title: 'AutoAnimate',
        tags: ['动画', 'vue'],
        content: '为 DOM 子元素的插入、移除和移动自动添加过渡，支持多种前端框架',
        iconUrl: '/images/resource-icons/autoanimate-95c2b0.ico',
      },
      {
        id: '189',
        url: {
          en: 'https://react-hook-form.com/',
        },
        title: 'React Hook Form',
        tags: ['表单', '校验'],
        content: '基于 React Hooks 的表单状态与校验库，支持多种 schema 校验器',
        iconUrl: '/images/resource-icons/react-hook-form-b497f0.png',
      },
      {
        id: '190',
        url: {
          en: 'https://tanstack.com/form/latest',
        },
        title: 'TanStack Form',
        tags: ['表单', '校验'],
        content: '支持 React、Vue 等框架的类型安全表单状态与校验方案',
        iconUrl: '/images/resource-icons/tanstack-form-956f40.png',
      },
      {
        id: '191',
        url: {
          en: 'https://formik.org/',
        },
        title: 'Formik',
        tags: ['表单', '校验'],
        content: '管理 React 表单值、访问状态、错误、校验和提交的表单库',
        iconUrl: '/images/resource-icons/formik-7145d2.png',
      },
      {
        id: '192',
        url: {
          en: 'https://vee-validate.logaretm.com/',
        },
        title: 'VeeValidate',
        tags: ['表单', '校验'],
        content: 'Vue 表单库，提供组件与组合式 API 管理值、校验、错误和提交',
        iconUrl: '/images/resource-icons/veevalidate-89fb1b.ico',
      },
      {
        id: '193',
        url: {
          en: 'https://vuelidate-next.netlify.app/',
        },
        title: 'Vuelidate',
        tags: ['表单', '校验'],
        content: '基于数据模型的 Vue 表单校验库；目前处于 LTS 模式',
        iconUrl: '/images/resource-icons/vuelidate-22ca8e.png',
      },
      {
        id: '194',
        url: {
          en: 'https://formkit.com/',
        },
        title: 'FormKit',
        tags: ['表单', '校验'],
        content: '提供表单输入、校验、schema 与主题的表单框架，支持 Vue 和 React 集成',
        iconUrl: '/images/resource-icons/formkit-f20c61.ico',
      },
      {
        id: '195',
        url: {
          en: 'https://github.com/alibaba/formily',
        },
        title: 'Formily',
        tags: ['表单', '校验'],
        content: '阿里巴巴的 schema 驱动表单方案，支持表单状态管理与多组件体系适配',
        iconUrl: '/images/resource-icons/formily-50d205.ico',
      },
      {
        id: '196',
        url: {
          en: 'https://rjsf-team.github.io/react-jsonschema-form/docs/',
        },
        title: 'React JSON Schema Form',
        tags: ['表单'],
        content: '根据 JSON Schema 生成 React 表单，支持主题、自定义组件和校验',
        iconUrl: '/images/resource-icons/react-json-schema-form-9882b0.ico',
      },
      {
        id: '197',
        url: {
          en: 'https://jsonforms.io/',
        },
        title: 'JSON Forms',
        tags: ['表单'],
        content: '以 JSON Schema 与 UI Schema 声明表单，支持 React、Angular 和 Vue',
        iconUrl: '/images/resource-icons/json-forms-ad4504.ico',
      },
      {
        id: '198',
        url: {
          zh: 'https://www.form-create.com/',
        },
        title: 'FormCreate',
        tags: ['表单'],
        content: '通过 JSON 规则生成具有动态渲染、数据收集和校验能力的 Vue 表单',
        iconUrl: '/images/resource-icons/formcreate-a20746.png',
      },
      {
        id: '199',
        url: {
          en: 'https://vueform.com/',
        },
        title: 'Vueform',
        tags: ['表单', '校验'],
        content: 'Vue 表单框架，支持动态 schema、校验和可视化表单构建集成',
        iconUrl: '/images/resource-icons/vueform-3f9ff8.png',
      },
      {
        id: '200',
        url: {
          en: 'https://zod.dev/',
        },
        title: 'Zod',
        tags: ['校验'],
        content: '面向 TypeScript 的 schema 校验库，支持静态类型推导与运行时数据验证',
        iconUrl: '/images/resource-icons/zod-4fc9d1.png',
      },
      {
        id: '201',
        url: {
          en: 'https://github.com/jquense/yup',
        },
        title: 'Yup',
        tags: ['校验'],
        content: '用于对象 schema 解析、转换和异步校验的 JavaScript 库',
        iconUrl: '/images/resource-icons/yup-a1ca57.png',
      },
      {
        id: '202',
        url: {
          en: 'https://valibot.dev/',
        },
        title: 'Valibot',
        tags: ['校验'],
        content: '采用模块化 API 的 TypeScript schema 校验库，兼顾类型推导与包体积',
        iconUrl: '/images/resource-icons/valibot-7a9fc8.png',
      },
      {
        id: '203',
        url: {
          en: 'https://ajv.js.org/',
        },
        title: 'Ajv',
        tags: ['校验'],
        content: '支持 JSON Schema 和 JSON Type Definition 的 JavaScript 校验器',
        iconUrl: '/images/resource-icons/ajv-1293cb.ico',
      },
      {
        id: '204',
        url: {
          en: 'https://arktype.io/',
        },
        title: 'ArkType',
        tags: ['校验'],
        content: '使用接近 TypeScript 的语法定义运行时校验规则并推导类型',
        iconUrl: '/images/resource-icons/arktype-4c009d.svg',
      },
      {
        id: '205',
        url: {
          en: 'https://docs.superstructjs.org/',
        },
        title: 'Superstruct',
        tags: ['校验'],
        content: '通过可组合的数据结构定义与校验 JavaScript 运行时数据',
        iconUrl: '/images/resource-icons/superstruct-1c9d64.jpg',
      },
      {
        id: '206',
        url: {
          en: 'https://vestjs.dev/',
        },
        title: 'Vest',
        tags: ['表单', '校验'],
        content: '以类似单元测试的声明方式组织表单校验，支持逐字段与异步校验',
        iconUrl: '/images/resource-icons/vest-3a528a.ico',
      },
      {
        id: '207',
        url: {
          en: 'https://conform.guide/',
        },
        title: 'Conform',
        tags: ['表单', '校验'],
        content: '基于 Web 标准和渐进增强的 React 表单校验方案，支持服务端协同',
        iconUrl: '/images/resource-icons/conform-376c13.jpg',
      },
      {
        id: '208',
        url: {
          en: 'https://superforms.rocks/',
        },
        title: 'Superforms',
        tags: ['表单', '校验'],
        content: '面向 SvelteKit 的表单处理方案，连接 schema 校验、客户端状态和服务端提交',
        iconUrl: '/images/resource-icons/superforms-ef8374.png',
      },
      {
        id: '209',
        url: {
          en: 'https://final-form.org/react',
        },
        title: 'React Final Form',
        tags: ['表单', '校验'],
        content: '基于订阅机制的 React 表单状态管理库，可组合接入校验和字段组件',
        iconUrl: '/images/resource-icons/react-final-form-ac3a33.ico',
      },
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
        id: '228',
        url: {
          en: 'https://tiptap.dev/',
        },
        title: 'Tiptap',
        tags: ['富文本'],
        content: '基于 ProseMirror 的无头富文本编辑器框架，支持扩展与协同编辑集成',
        iconUrl: '/images/resource-icons/tiptap-ff7c41.png',
      },
      {
        id: '229',
        url: {
          en: 'https://lexical.dev/',
        },
        title: 'Lexical',
        tags: ['富文本'],
        content: '模块化文本编辑器框架，可扩展列表、链接、表格等内容能力',
        iconUrl: '/images/resource-icons/lexical-e77f54.ico',
      },
      {
        id: '230',
        url: {
          en: 'https://prosemirror.net/',
        },
        title: 'ProseMirror',
        tags: ['富文本'],
        content: '基于文档 schema、状态与事务构建富文本编辑器的模块化工具集',
        iconUrl: '/images/resource-icons/prosemirror-8c3999.ico',
      },
      {
        id: '231',
        url: {
          en: 'https://docs.slatejs.org/',
        },
        title: 'Slate',
        tags: ['富文本'],
        content: '可高度定制的富文本编辑器框架，官方仍标注 Beta 状态',
        iconUrl: '/images/resource-icons/slate-10ad4c.png',
      },
      {
        id: '232',
        url: {
          en: 'https://quilljs.com/',
        },
        title: 'Quill',
        tags: ['富文本'],
        content: '以 Delta 数据模型和模块扩展构建网页富文本编辑体验的编辑器',
        iconUrl: '/images/resource-icons/quill-8ead7a.ico',
      },
      {
        id: '233',
        url: {
          en: 'https://ckeditor.com/ckeditor-5/',
        },
        title: 'CKEditor 5',
        tags: ['富文本'],
        content: '具有模块化架构的富文本编辑器，支持多种编辑模式和协作扩展',
        iconUrl: '/images/resource-icons/ckeditor-5-0684b1.png',
      },
      {
        id: '234',
        url: {
          en: 'https://www.tiny.cloud/docs/tinymce/latest/',
        },
        title: 'TinyMCE',
        tags: ['富文本'],
        content: '提供工具栏、格式化、媒体和插件体系的网页富文本编辑器',
        iconUrl: '/images/resource-icons/tinymce-3d228c.png',
      },
      {
        id: '235',
        url: {
          en: 'https://editorjs.io/',
        },
        title: 'Editor.js',
        tags: ['富文本'],
        content: '以块为单位编辑内容并输出结构化 JSON 的网页编辑器',
        iconUrl: '/images/resource-icons/editor-js-394099.png',
      },
      {
        id: '236',
        url: {
          zh: 'https://www.wangeditor.com/',
        },
        title: 'wangEditor',
        tags: ['富文本'],
        content: '开箱即用的 Web 富文本编辑器，提供 Vue 和 React 集成',
        iconUrl: '/images/resource-icons/wangeditor-68c2d0.ico',
      },
      {
        id: '237',
        url: {
          en: 'https://milkdown.dev/',
        },
        title: 'Milkdown',
        tags: ['Markdown'],
        content: '基于 ProseMirror 和 remark 的插件式 Markdown 所见即所得编辑器',
        iconUrl: '/images/resource-icons/milkdown-6d925e.ico',
      },
      {
        id: '238',
        url: {
          zh: 'https://b3log.org/vditor/',
        },
        title: 'Vditor',
        tags: ['Markdown'],
        content: '浏览器端 Markdown 编辑器，支持所见即所得、即时渲染与分屏预览',
        iconUrl: '/images/resource-icons/vditor-e7335c.png',
      },
      {
        id: '239',
        url: {
          en: 'https://ui.toast.com/tui-editor/',
        },
        title: 'TOAST UI Editor',
        tags: ['Markdown'],
        content: '支持 Markdown 和所见即所得模式切换的网页内容编辑器',
        iconUrl: '/images/resource-icons/toast-ui-editor-d08cec.ico',
      },
      {
        id: '240',
        url: {
          en: 'https://imzbf.github.io/md-editor-v3/en-US/',
        },
        title: 'MdEditorV3',
        tags: ['Markdown'],
        content: '面向 Vue 3 的 Markdown 编辑与预览组件，支持主题和扩展配置',
        iconUrl: '/images/resource-icons/mdeditorv3-c7f4a3.ico',
      },
      {
        id: '241',
        url: {
          en: 'https://bytemd.js.org/',
        },
        title: 'ByteMD',
        tags: ['Markdown'],
        content: '基于 Svelte 构建、可用于多框架的插件式 Markdown 编辑器组件',
        iconUrl: '/images/resource-icons/bytemd-c75165.png',
      },
      {
        id: '242',
        url: {
          en: 'https://mdxeditor.dev/',
        },
        title: 'MDXEditor',
        tags: ['Markdown'],
        content: 'React 的 Markdown 富文本编辑组件，支持以自然编辑交互维护 Markdown 文档',
        iconUrl: '/images/resource-icons/mdxeditor-afe329.ico',
      },
      {
        id: '243',
        url: {
          en: 'https://www.blocknotejs.org/',
        },
        title: 'BlockNote',
        tags: ['富文本'],
        content: '基于块的 React 富文本编辑器，提供接近文档应用的编辑体验',
        iconUrl: '/images/resource-icons/blocknote-5b751e.png',
      },
      {
        id: '244',
        url: {
          en: 'https://platejs.org/',
        },
        title: 'Plate',
        tags: ['富文本'],
        content: '用于构建 React 富文本编辑器的框架、插件和组件体系',
        iconUrl: '/images/resource-icons/plate-a7cd5d.png',
      },
      {
        id: '245',
        url: {
          en: 'https://github.com/remirror/remirror',
        },
        title: 'Remirror',
        tags: ['富文本'],
        content: '基于 ProseMirror 的 React 编辑器工具集，支持扩展和协同编辑场景',
        iconUrl: '/images/resource-icons/remirror-8ae205.ico',
      },
      {
        id: '246',
        url: {
          en: 'https://code.haverbeke.berlin/codemirror/dev',
        },
        title: 'CodeMirror',
        tags: ['代码编辑'],
        content: '可嵌入网页的模块化代码编辑器，支持语法、语言服务和扩展配置',
        iconUrl: '/images/resource-icons/codemirror-a83ad9.png',
      },
      {
        id: '247',
        url: {
          en: 'https://microsoft.github.io/monaco-editor/',
        },
        title: 'Monaco Editor',
        tags: ['代码编辑'],
        content: '源自 VS Code 的可嵌入浏览器代码编辑库，提供语言服务与编辑能力',
        iconUrl: '/images/resource-icons/monaco-editor-72f169.png',
      },
      {
        id: '248',
        url: {
          en: 'https://leafletjs.com/reference-1.9.4.html',
        },
        title: 'Leaflet',
        tags: ['地图', 'GIS'],
        content: '轻量的交互地图 JavaScript 库，支持图层、标记、移动设备和插件扩展；入口为 1.9 稳定版文档',
        iconUrl: '/images/resource-icons/leaflet-60e870.svg',
      },
      {
        id: '249',
        url: {
          en: 'https://maplibre.org/maplibre-gl-js/docs/',
        },
        title: 'MapLibre GL JS',
        tags: ['地图', 'GIS'],
        content: '基于 WebGL 的开源地图渲染库，支持矢量瓦片、样式与交互',
        iconUrl: '/images/resource-icons/maplibre-gl-js-7f5bb2.ico',
      },
      {
        id: '250',
        url: {
          en: 'https://openlayers.org/',
        },
        title: 'OpenLayers',
        tags: ['地图', 'GIS'],
        content: '支持地图瓦片、矢量数据和多种地理格式的开源 Web 地图库',
        iconUrl: '/images/resource-icons/openlayers-ad044b.svg',
      },
      {
        id: '251',
        url: {
          en: 'https://cesium.com/platform/cesiumjs/',
        },
        title: 'CesiumJS',
        tags: ['地图', 'GIS'],
        content: '用于三维地球和地理空间可视化的 JavaScript 库，支持 3D Tiles',
        iconUrl: '/images/resource-icons/cesiumjs-1ed3d2.svg',
      },
      {
        id: '252',
        url: {
          en: 'https://docs.mapbox.com/mapbox-gl-js/',
        },
        title: 'Mapbox GL JS',
        tags: ['地图', 'GIS'],
        content: '用于交互式矢量地图与三维地图的 WebGL 渲染库',
        iconUrl: '/images/resource-icons/mapbox-gl-js-4cf2f7.png',
      },
      {
        id: '253',
        url: {
          en: 'https://deck.gl/',
        },
        title: 'deck.gl',
        tags: ['地图', 'GIS'],
        content: '以可组合 GPU 图层展示大规模地理和空间数据的可视化框架',
        iconUrl: '/images/resource-icons/deck-gl-e704a9.png',
      },
      {
        id: '254',
        url: {
          en: 'https://reactflow.dev/',
        },
        title: 'React Flow',
        tags: ['流程图'],
        content: '用于构建节点编辑器、工作流与交互关系图的 React 库',
        iconUrl: '/images/resource-icons/react-flow-a7b58e.ico',
      },
      {
        id: '255',
        url: {
          en: 'https://vueflow.dev/',
        },
        title: 'Vue Flow',
        tags: ['流程图'],
        content: '用于构建可交互节点、连线和流程编辑界面的 Vue 库',
        iconUrl: '/images/resource-icons/vue-flow-7eb401.png',
      },
      {
        id: '256',
        url: {
          zh: 'https://site.logic-flow.cn/',
        },
        title: 'LogicFlow',
        tags: ['流程图'],
        content: '滴滴开源的流程图编辑框架，支持节点定制、插件和业务流程编排',
        iconUrl: '/images/resource-icons/logicflow-51b720.png',
      },
      {
        id: '257',
        url: {
          en: 'https://mermaid.js.org/',
        },
        title: 'Mermaid',
        tags: ['流程图'],
        content: '通过文本语法生成流程图、时序图、关系图和其他图形的 JavaScript 工具',
        iconUrl: '/images/resource-icons/mermaid-1356a5.png',
      },
      {
        id: '258',
        url: {
          en: 'https://www.jointjs.com/',
        },
        title: 'JointJS',
        tags: ['流程图'],
        content: '基于 SVG 的 JavaScript 图形与流程编辑库，提供社区版及商业扩展',
        iconUrl: '/images/resource-icons/jointjs-404f04.png',
      },
      {
        id: '259',
        url: {
          en: 'https://reglejs.dev/',
        },
        title: 'Regle',
        tags: ['表单', '校验'],
        content: '类型安全、基于模型的 Vue 表单校验库，提供无头组合式 API',
        iconUrl: '/images/resource-icons/regle-02d55f.ico',
      },
      {
        id: '260',
        url: {
          en: 'https://formly.dev/',
        },
        title: 'Angular Formly',
        tags: ['表单'],
        content: 'Angular 的动态表单库，可依据 JSON 配置生成表单并接入不同 UI 组件',
        iconUrl: '/images/resource-icons/angular-formly-3e93cc.png',
      },
      {
        id: '261',
        url: {
          en: 'https://surveyjs.io/form-library',
        },
        title: 'SurveyJS Form Library',
        tags: ['表单', '问卷'],
        content: '根据 JSON 定义生成问卷与动态表单的 JavaScript 库，支持多种前端框架',
        iconUrl: '/images/resource-icons/surveyjs-form-library-9f09dd.ico',
      },
      {
        id: '262',
        url: {
          en: 'https://uniforms.tools/',
        },
        title: 'uniforms',
        tags: ['表单'],
        content: '支持多种 schema 和主题的 React 动态表单库',
        iconUrl: '/images/resource-icons/uniforms-238e6c.png',
      },
      {
        id: '263',
        url: {
          en: 'https://joi.dev/',
        },
        title: 'Joi',
        tags: ['校验'],
        content: '以声明式 schema 定义 JavaScript 数据规则，支持字段关联与条件校验',
        iconUrl: '/images/resource-icons/joi-8291f7.png',
      },
      {
        id: '264',
        url: {
          en: 'https://github.com/validatorjs/validator.js',
        },
        title: 'validator.js',
        tags: ['校验'],
        content: '提供邮箱、URL、日期等字符串校验与清理能力的 JavaScript 库',
        iconUrl: '/images/resource-icons/validator-js-109e35.ico',
      },
      {
        id: '265',
        url: {
          en: 'https://tresjs.org/',
        },
        title: 'TresJS',
        tags: ['3D', 'vue'],
        content: '在 Three.js 之上以 Vue 组件和声明式方式构建交互三维场景',
        iconUrl: '/images/resource-icons/tresjs-796bc3.ico',
      },
      {
        id: '266',
        url: {
          en: 'https://github.com/galacean/engine',
        },
        title: 'Galacean Engine',
        tags: ['3D', '2D'],
        content: '蚂蚁开源的 TypeScript 交互引擎，支持二维、三维、动画和物理效果',
        iconUrl: '/images/resource-icons/galacean-engine-df3954.ico',
      },
      {
        id: '267',
        url: {
          en: 'https://aframe.io/',
        },
        title: 'A-Frame',
        tags: ['3D', 'AR'],
        content: '使用 HTML 和实体组件模型构建 Web 三维、AR 和 VR 体验的框架',
        iconUrl: '/images/resource-icons/a-frame-90820c.png',
      },
      {
        id: '268',
        url: {
          en: 'https://github.com/ant-design/ant-design-charts',
        },
        title: 'Ant Design Charts',
        tags: ['图表'],
        content: '基于 AntV 可视化引擎的 React 图表组件，支持统计图、关系图与地图',
        iconUrl: '/images/resource-icons/ant-design-charts-34bdd7.ico',
      },
      {
        id: '269',
        url: {
          en: 'https://github.com/antvis/G2Plot',
        },
        title: 'AntV G2Plot',
        tags: ['图表'],
        content: '基于 G2 的开箱即用统计图表库；属于既有 G2 4 生态',
        iconUrl: '/images/resource-icons/antv-g2plot-428185.ico',
      },
      {
        id: '270',
        url: {
          en: 'https://github.com/antvis/L7',
        },
        title: 'AntV L7',
        tags: ['地图', 'GIS'],
        content: '基于 WebGL 的大规模地理空间数据可视化引擎，可组合点线面等图层',
        iconUrl: '/images/resource-icons/antv-l7-2a6851.ico',
      },
      {
        id: '271',
        url: {
          zh: 'https://lbs.amap.com/api/javascript-api-v2/summary',
        },
        title: '高德地图 JS API',
        tags: ['地图', 'GIS'],
        content: '提供地图展示、地理数据、搜索与路线等能力的网页地图开发接口',
        iconUrl: '/images/resource-icons/js-api-ae4fb8.ico',
      },
      {
        id: '272',
        url: {
          zh: 'https://lbsyun.baidu.com/docs/jsapi?title=jsapi4/index',
        },
        title: '百度地图 JSAPI',
        tags: ['地图', 'GIS'],
        content: '百度地图的网页地图开发接口，支持地图展示、交互、覆盖物和位置服务',
        iconUrl: '/images/resource-icons/jsapi-b81e75.ico',
      },
      {
        id: '273',
        url: {
          zh: 'https://lbs.qq.com/webApi/javascriptGL/glGuide/glOverview',
        },
        title: '腾讯地图 JavaScript API GL',
        tags: ['地图', 'GIS'],
        content: '腾讯位置服务基于 WebGL 的网页地图开发接口，支持地图与覆盖物交互',
        iconUrl: '/images/resource-icons/javascript-api-gl-47955a.ico',
      },
      {
        id: '274',
        url: {
          en: 'https://gojs.net/latest/',
        },
        title: 'GoJS',
        tags: ['流程图'],
        content: '用于构建交互流程图、组织图、业务模型与定制节点编辑器的图形库',
        iconUrl: '/images/resource-icons/gojs-032837.ico',
      },
      {
        id: '275',
        url: {
          en: 'https://retejs.org/',
        },
        title: 'Rete.js',
        tags: ['流程图'],
        content: '用于可视化编程的 TypeScript 节点编辑框架，支持图处理和多框架集成',
        iconUrl: '/images/resource-icons/rete-js-d8ef60.ico',
      },
      {
        id: '276',
        url: {
          en: 'https://bpmn.io/toolkit/bpmn-js/',
        },
        title: 'bpmn-js',
        tags: ['流程图'],
        content: '可嵌入网页的 BPMN 2.0 流程图查看与编辑工具集',
        iconUrl: '/images/resource-icons/bpmn-js-996eb9.png',
      },
      {
        id: '277',
        url: {
          en: 'https://maxgraph.github.io/maxGraph/',
        },
        title: 'maxGraph',
        tags: ['流程图'],
        content: 'mxGraph 的 TypeScript 后继库，用于显示、定制和交互编辑矢量图形',
        iconUrl: '/images/resource-icons/maxgraph-81651b.png',
      },
      {
        id: '278',
        url: {
          en: 'https://github.com/jgraph/mxgraph',
        },
        title: 'mxGraph',
        tags: ['流程图'],
        content: '传统客户端 JavaScript 图形编辑库；公开版本已结束维护，可用于查询存量项目',
        iconUrl: '/images/resource-icons/mxgraph-e37709.ico',
      },
      {
        id: '279',
        url: {
          en: 'https://motion.vueuse.org/',
        },
        title: 'VueUse Motion',
        tags: ['动画', 'vue'],
        content: '基于组合式函数与指令为 Vue 添加声明式动画，支持预设、弹簧和 Nuxt 集成',
        iconUrl: '/images/resource-icons/vueuse-motion-e4e1a3.ico',
      },
      {
        id: '280',
        url: {
          en: 'https://reactcommunity.org/react-transition-group/',
        },
        title: 'React Transition Group',
        tags: ['动画', '过渡'],
        content: '管理 React 组件进入、退出与列表过渡状态，辅助组织 CSS 动画和类名',
        iconUrl: '/images/resource-icons/react-transition-group-1eb943.ico',
      },
      {
        id: '281',
        url: {
          en: 'https://michalsnik.github.io/aos/',
        },
        title: 'AOS',
        tags: ['动画', '滚动'],
        content: '通过元素属性为滚动进入视口的内容添加动画的 JavaScript 库',
        iconUrl: '/images/resource-icons/aos-f7c066.png',
      },
      {
        id: '282',
        url: {
          en: 'https://docs.lottiefiles.com/en/runtimes/distributions/js',
        },
        title: 'DotLottie Web',
        tags: ['动画', 'Lottie'],
        content: '基于 Rust 与 WebAssembly 的 Lottie 和 dotLottie 网页动画播放库',
        iconUrl: '/images/resource-icons/dotlottie-web-7119a5.ico',
      },
      {
        id: '283',
        url: {
          en: 'https://ace.c9.io/',
        },
        title: 'Ace',
        tags: ['代码编辑'],
        content: '可嵌入网页的 JavaScript 代码编辑器，提供语法高亮、补全和键盘绑定',
        iconUrl: '/images/resource-icons/ace-a467da.png',
      },
      {
        id: '284',
        url: {
          en: 'https://svelteflow.dev/',
        },
        title: 'Svelte Flow',
        tags: ['流程图'],
        content: '用于构建节点编辑器、流程和可交互关系图的 Svelte 库',
        iconUrl: '/images/resource-icons/svelte-flow-4458b0.ico',
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
      {
        id: '286',
        url: {
          en: 'https://konvajs.org/',
        },
        title: 'Konva',
        tags: ['2D', '图形'],
        content: '基于 Canvas 场景图构建交互二维图形，支持事件、拖动、变换和动画',
        iconUrl: '/images/resource-icons/konva-a58150.ico',
      },
      {
        id: '287',
        url: {
          en: 'https://www.fabricjs.com/',
        },
        title: 'Fabric.js',
        tags: ['2D', '图形'],
        content: '为 Canvas 提供交互对象模型、文本编辑、SVG 转换和动画能力的图形库',
        iconUrl: '/images/resource-icons/fabric-js-6d8134.ico',
      },
      {
        id: '288',
        url: {
          en: 'https://p5js.org/',
        },
        title: 'p5.js',
        tags: ['2D', '图形'],
        content: '面向创意编程的 JavaScript 图形库，可创建绘画、动画和交互作品',
        iconUrl: '/images/resource-icons/p5-js-8c8feb.png',
      },
    ],
  },
  {
    title: '打包/构建工具',
    resources: [
      {
        id: '020',
        url: {
          en: 'https://webpack.js.org/',
          zh: 'https://www.webpackjs.com/concepts/',
        },
        title: 'webpack',
        tags: ['webpack'],
        content: '支持模块依赖图、代码拆分和插件扩展的 JavaScript 静态模块打包器',
        iconUrl: '/images/resource-icons/original-020.ico',
      },
      {
        id: '021',
        url: {
          en: 'https://vite.dev/',
          zh: 'https://cn.vitejs.dev/',
        },
        title: 'Vite',
        tags: ['vite', '工具链'],
        content: '为 Web 开发提供开发服务器、即时模块更新和生产构建的工具链',
        iconUrl: '/images/resource-icons/original-021.svg',
      },
      {
        id: '022',
        url: {
          en: 'https://esbuild.github.io/',
          zh: 'https://esbuild.bootcss.com/getting-started/',
        },
        title: 'esbuild',
        tags: ['esbuild'],
        content: '使用 Go 编写的 JavaScript 与 TypeScript 打包器、转译器和压缩器',
        iconUrl: '/images/resource-icons/original-022.svg',
      },
      {
        id: '023',
        url: {
          en: 'https://parceljs.org/',
        },
        title: 'Parcel',
        tags: ['parceljs'],
        content: '内置多语言转换、代码拆分与资源优化的零配置 Web 构建工具',
        iconUrl: '/images/resource-icons/original-023.avif',
      },
      {
        id: '024',
        url: {
          en: 'https://rollupjs.org/',
          zh: 'https://cn.rollupjs.org/',
        },
        title: 'Rollup',
        tags: ['rollupjs'],
        content: '面向 JavaScript 模块的打包器，支持 Tree-shaking 与多种输出格式',
        iconUrl: '/images/resource-icons/original-024.svg',
      },
      {
        id: '025',
        url: {
          en: 'https://babeljs.io/docs/',
          zh: 'https://www.babeljs.cn/docs/',
        },
        title: 'Babel',
        tags: ['babeljs'],
        content: '通过插件与预设转换 JavaScript 语法的编译工具链',
        iconUrl: '/images/resource-icons/original-025.svg',
      },
      {
        id: '026',
        url: {
          en: 'https://gruntjs.com/',
          zh: 'https://www.gruntjs.net/',
        },
        title: 'Grunt',
        tags: ['gruntjs'],
        content: '使用配置和插件自动化执行构建任务的 JavaScript 工具，仍有大量存量项目使用',
        iconUrl: '/images/resource-icons/original-026.png',
      },
      {
        id: '027',
        url: {
          en: 'https://gulpjs.com/',
          zh: 'https://www.gulpjs.com.cn/',
        },
        title: 'gulp',
        tags: ['gulpjs'],
        content: '使用 JavaScript 函数与流组合任务的自动化构建工具，适合定制资源处理管线',
        iconUrl: '/images/resource-icons/original-027.png',
      },
      {
        id: '337',
        url: {
          en: 'https://rspack.rs/',
          zh: 'https://rspack.rs/zh/',
        },
        title: 'Rspack',
        tags: ['打包工具'],
        content: '基于 Rust 的 Web 打包器，提供现代化 webpack 兼容接口',
        iconUrl: '/images/resource-icons/rspack-cf51c1.png',
      },
      {
        id: '338',
        url: {
          en: 'https://rsbuild.rs/',
          zh: 'https://rsbuild.rs/zh/',
        },
        title: 'Rsbuild',
        tags: ['构建工具'],
        content: '基于 Rspack 的应用构建工具，内置开发服务器与常用构建能力',
        iconUrl: '/images/resource-icons/rsbuild-f776b7.png',
      },
      {
        id: '339',
        url: {
          en: 'https://rolldown.rs/',
        },
        title: 'Rolldown',
        tags: ['打包工具'],
        content: '基于 Rust 的 JavaScript 打包器，兼容 Rollup 接口并为 Vite 提供构建基础',
        iconUrl: '/images/resource-icons/rolldown-6b56b8.svg',
      },
      {
        id: '340',
        url: {
          en: 'https://swc.rs/',
        },
        title: 'SWC',
        tags: ['编译工具'],
        content: '基于 Rust 的 JavaScript 和 TypeScript 编译工具链，支持转译与压缩',
        iconUrl: '/images/resource-icons/swc-3a9db9.ico',
      },
      {
        id: '341',
        url: {
          en: 'https://oxc.rs/',
        },
        title: 'Oxc',
        tags: ['编译工具'],
        content: '基于 Rust 的 JavaScript 工具集合，提供解析、转换、压缩与模块解析能力',
        iconUrl: '/images/resource-icons/oxc-695bec.svg',
      },
      {
        id: '342',
        url: {
          en: 'https://terser.org/',
        },
        title: 'Terser',
        tags: ['压缩工具', 'js'],
        content: 'JavaScript 压缩与混淆工具，支持命令行和 Node.js API',
        iconUrl: '/images/resource-icons/terser-7eee8c.png',
      },
      {
        id: '343',
        url: {
          en: 'https://tsdown.dev/',
          zh: 'https://tsdown.dev/zh-CN/',
        },
        title: 'tsdown',
        tags: ['库构建', 'ts'],
        content: '基于 Rolldown 和 Oxc 的库打包工具，支持生成类型声明与迁移 tsup 配置',
        iconUrl: '/images/resource-icons/tsdown-4419ed.svg',
      },
      {
        id: '344',
        url: {
          en: 'https://rslib.rs/',
          zh: 'https://rslib.rs/zh/',
        },
        title: 'Rslib',
        tags: ['库构建'],
        content: '基于 Rsbuild 的库开发工具，用于构建 JavaScript 库与 UI 组件',
        iconUrl: '/images/resource-icons/rslib-31571c.png',
      },
      {
        id: '345',
        url: {
          en: 'https://tsup.egoist.dev/',
        },
        title: 'tsup',
        tags: ['库构建', 'ts'],
        content: '基于 esbuild 的 TypeScript 库打包工具；项目已停止积极维护，官方建议迁移至 tsdown',
        iconUrl: '/images/resource-icons/tsup-9ae6be.jpg',
      },
      {
        id: '346',
        url: {
          en: 'https://github.com/unjs/unbuild',
        },
        title: 'unbuild',
        tags: ['库构建'],
        content: 'UnJS 的 JavaScript 库构建系统，支持 Rollup 打包、类型声明与开发桩',
        iconUrl: '/images/resource-icons/unbuild-a5b13a.svg',
      },
      {
        id: '347',
        url: {
          en: 'https://turborepo.dev/',
        },
        title: 'Turborepo',
        tags: ['Monorepo'],
        content: 'JavaScript 和 TypeScript 构建任务系统，支持依赖编排与本地、远程缓存',
        iconUrl: '/images/resource-icons/turborepo-9dc95f.png',
      },
      {
        id: '348',
        url: {
          en: 'https://nx.dev/',
        },
        title: 'Nx',
        tags: ['Monorepo'],
        content: '面向 Monorepo 的构建系统，提供项目图、任务编排、缓存与框架集成',
        iconUrl: '/images/resource-icons/nx-d2592b.png',
      },
      {
        id: '349',
        url: {
          en: 'https://rushjs.io/',
          zh: 'https://rushjs.io/zh-cn/',
        },
        title: 'Rush',
        tags: ['Monorepo'],
        content: '大型 JavaScript Monorepo 管理器，统一依赖安装、增量构建与多包发布',
        iconUrl: '/images/resource-icons/rush-34ebcd.png',
      },
      {
        id: '350',
        url: {
          en: 'https://lerna.js.org/',
        },
        title: 'Lerna',
        tags: ['Monorepo'],
        content: 'JavaScript 和 TypeScript 多包仓库工具，整合 Nx 任务缓存与版本发布',
        iconUrl: '/images/resource-icons/lerna-879ff5.png',
      },
      {
        id: '351',
        url: {
          en: 'https://pnpm.io/',
          zh: 'https://pnpm.io/zh/',
        },
        title: 'pnpm',
        tags: ['包管理'],
        content: '节省磁盘空间的包管理器，支持工作区、内容寻址存储与严格依赖管理',
        iconUrl: '/images/resource-icons/pnpm-2e5aa0.png',
      },
      {
        id: '352',
        url: {
          en: 'https://docs.npmjs.com/',
        },
        title: 'npm',
        tags: ['包管理', 'js'],
        content: 'JavaScript 包管理器与公共包注册服务的官方文档入口',
        iconUrl: '/images/resource-icons/npm-d79677.png',
      },
      {
        id: '353',
        url: {
          en: 'https://yarnpkg.com/',
        },
        title: 'Yarn',
        tags: ['包管理'],
        content: '支持工作区与可重复安装的 JavaScript 包管理器，适用于多包项目',
        iconUrl: '/images/resource-icons/yarn-a6bc64.svg',
      },
      {
        id: '398',
        url: {
          en: 'https://nextjs.org/docs/app/api-reference/turbopack',
        },
        title: 'Turbopack',
        tags: ['打包工具'],
        content: '内置于 Next.js 的 Rust 增量打包器，缓存编译结果并按需构建模块',
        iconUrl: '/images/resource-icons/turbopack-47cc25.ico',
      },
      {
        id: '399',
        url: {
          en: 'https://www.farmfe.org/',
          zh: 'https://www.farmfe.org/zh/',
        },
        title: 'Farm',
        tags: ['构建工具'],
        content: '基于 Rust 的 Web 构建引擎，支持持久缓存、部分打包与 JavaScript 插件',
        iconUrl: '/images/resource-icons/farm-3457b1.ico',
      },
      {
        id: '400',
        url: {
          en: 'https://www.npmjs.com/package/@umijs/mako',
        },
        title: 'Mako',
        tags: ['打包工具'],
        content: '旧 Mako 构建引擎的已发布包；原仓库已迁移至 Utoo，使用前核对后继与迁移说明',
        iconUrl: '/images/resource-icons/mako-643036.png',
      },
      {
        id: '401',
        url: {
          en: 'https://rsdoctor.rs/',
          zh: 'https://rsdoctor.rs/zh/',
        },
        title: 'Rsdoctor',
        tags: ['构建分析'],
        content: '面向 Rspack 的构建分析工具，可查看编译耗时、模块关系与产物差异',
        iconUrl: '/images/resource-icons/rsdoctor-fec7bd.png',
      },
      {
        id: '402',
        url: {
          en: 'https://github.com/nodejs/corepack',
        },
        title: 'Corepack',
        tags: ['包管理'],
        content: '为 Node.js 项目管理并分发指定版本的包管理器，协助统一开发环境',
        iconUrl: '/images/resource-icons/corepack-dfa954.png',
      },
      {
        id: '403',
        url: {
          en: 'https://github.com/open-cli-tools/concurrently',
        },
        title: 'concurrently',
        tags: ['任务编排'],
        content: '跨平台并行执行多个命令，集中处理日志、进程结束与失败状态',
        iconUrl: '/images/resource-icons/concurrently-e6c6c0.png',
      },
      {
        id: '404',
        url: {
          en: 'https://github.com/bcomnes/npm-run-all2',
        },
        title: 'npm-run-all2',
        tags: ['任务编排'],
        content: '串行或并行运行多条 npm 脚本，是 npm-run-all 的维护分支',
        iconUrl: '/images/resource-icons/npm-run-all2-aa7d89.png',
      },
      {
        id: '405',
        url: {
          en: 'https://github.com/mysticatea/npm-run-all',
        },
        title: 'npm-run-all',
        tags: ['任务编排'],
        content: '跨平台串行或并行执行 npm 脚本的传统任务编排工具',
        iconUrl: '/images/resource-icons/npm-run-all-4d2332.png',
      },
      {
        id: '413',
        url: {
          en: 'https://github.com/unjs/obuild',
        },
        title: 'obuild',
        tags: ['库构建', 'ts'],
        content: '基于 Rolldown 的零配置 ESM 和 TypeScript 包构建工具（Beta），支持打包与逐文件转译',
        iconUrl: '/images/resource-icons/obuild-9052ab.ico',
      },
      {
        id: '414',
        url: {
          en: 'https://github.com/utooland/utoo',
        },
        title: 'Utoo Pack',
        tags: ['打包工具'],
        content: '基于 Turbopack 的前端打包工具，属于 Utoo 工具链；与旧 Mako 引擎区分',
        iconUrl: '/images/resource-icons/utoo-pack-551780.png',
      },
      {
        id: '415',
        url: {
          en: 'https://www.typescriptlang.org/',
          zh: 'https://www.typescriptlang.org/zh/',
        },
        title: 'TypeScript',
        tags: ['编译工具'],
        content: '为 JavaScript 添加类型系统与开发工具支持，并可编译输出标准 JavaScript',
        iconUrl: '/images/resource-icons/typescript-ed0504.png',
      },
    ],
  },
  {
    title: 'CSS 相关',
    resources: [
      {
        id: '289',
        url: {
          en: 'https://sass-lang.com/',
        },
        title: 'Sass',
        tags: ['css'],
        content: '支持模块、变量、嵌套与混入的样式表语言，采用 Dart Sass 实现',
        iconUrl: '/images/resource-icons/sass-5744cc.png',
      },
      {
        id: '290',
        url: {
          en: 'https://lesscss.org/',
          zh: 'https://lesscss.cn/',
        },
        title: 'Less',
        tags: ['css'],
        content: '通过变量、混入和运算扩展 CSS 的动态样式语言',
        iconUrl: '/images/resource-icons/less-ae5239.ico',
      },
      {
        id: '291',
        url: {
          en: 'https://stylus-lang.com/',
        },
        title: 'Stylus',
        tags: ['css'],
        content: '支持灵活语法、函数和混入的 CSS 预处理语言；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/stylus-37d4d5.svg',
      },
      {
        id: '292',
        url: {
          en: 'https://postcss.org/',
        },
        title: 'PostCSS',
        tags: ['css'],
        content: '通过 JavaScript 插件转换样式的工具，可组合兼容处理和语法扩展',
        iconUrl: '/images/resource-icons/postcss-1c2515.ico',
      },
      {
        id: '293',
        url: {
          en: 'https://lightningcss.dev/',
        },
        title: 'Lightning CSS',
        tags: ['css'],
        content: '使用 Rust 实现的 CSS 解析、兼容转换、打包与压缩工具',
        iconUrl: '/images/resource-icons/lightning-css-539f15.svg',
      },
      {
        id: '294',
        url: {
          en: 'https://github.com/postcss/autoprefixer',
        },
        title: 'Autoprefixer',
        tags: ['css'],
        content: '根据浏览器兼容数据为 CSS 添加或清理厂商前缀的 PostCSS 插件',
        iconUrl: '/images/resource-icons/autoprefixer-c8faa8.png',
      },
      {
        id: '295',
        url: {
          en: 'https://cssnano.github.io/cssnano/',
        },
        title: 'cssnano',
        tags: ['css'],
        content: '通过可组合的 PostCSS 插件优化和压缩 CSS',
        iconUrl: '/images/resource-icons/cssnano-9b02ce.svg',
      },
      {
        id: '296',
        url: {
          en: 'https://tailwindcss.com/',
          zh: 'https://tailwind.nodejs.cn/docs/installation/using-vite',
        },
        title: 'Tailwind CSS',
        tags: ['css'],
        content: '以工具类组合界面的 CSS 框架，支持设计令牌和响应式变体',
        iconUrl: '/images/resource-icons/tailwind-css-6fec5b.ico',
      },
      {
        id: '297',
        url: {
          en: 'https://unocss.dev/',
        },
        title: 'UnoCSS',
        tags: ['css'],
        content: '可按需生成样式的原子化 CSS 引擎，支持规则、预设与快捷方式',
        iconUrl: '/images/resource-icons/unocss-fcfe0d.svg',
      },
      {
        id: '118',
        url: {
          en: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
          zh: 'https://www.bootcss.com/',
        },
        title: 'Bootstrap',
        tags: ['css'],
        content: '提供响应式栅格、样式工具和交互组件的前端框架',
        iconUrl: '/images/resource-icons/bootstrap-faab0d.png',
      },
      {
        id: '298',
        url: {
          en: 'https://bulma.io/',
        },
        title: 'Bulma',
        tags: ['css'],
        content: '基于 Flexbox 的响应式 CSS 框架，提供模块化组件与布局工具',
        iconUrl: '/images/resource-icons/bulma-fb4b30.png',
      },
      {
        id: '299',
        url: {
          en: 'https://get.foundation/',
        },
        title: 'Foundation',
        tags: ['css'],
        content: '提供响应式布局、无障碍组件和 Sass 工具的前端框架；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/foundation-df42a4.png',
      },
      {
        id: '300',
        url: {
          en: 'https://getuikit.com/',
        },
        title: 'UIkit',
        tags: ['css'],
        content: '模块化前端框架，提供响应式布局、样式和交互组件',
        iconUrl: '/images/resource-icons/uikit-447340.png',
      },
      {
        id: '301',
        url: {
          en: 'https://picocss.com/',
        },
        title: 'Pico CSS',
        tags: ['css'],
        content: '为语义化 HTML 提供简洁默认样式的轻量 CSS 框架',
        iconUrl: '/images/resource-icons/pico-css-1c3e76.svg',
      },
      {
        id: '125',
        url: {
          en: 'https://daisyui.com/',
        },
        title: 'daisyUI',
        tags: ['css'],
        content: '基于 Tailwind CSS 的语义化组件类与主题系统',
        iconUrl: '/images/resource-icons/daisyui-7360d5.svg',
      },
      {
        id: '302',
        url: {
          en: 'https://open-props.style/',
        },
        title: 'Open Props',
        tags: ['css'],
        content: '可组合的 CSS 自定义属性库，提供颜色、间距、动画等设计令牌',
        iconUrl: '/images/resource-icons/open-props-5ff35e.svg',
      },
      {
        id: '303',
        url: {
          en: 'https://purecss.io/',
        },
        title: 'Pure.css',
        tags: ['css'],
        content: '提供小体积响应式布局与组件样式的 CSS 模块集合',
        iconUrl: '/images/resource-icons/pure-css-16f467.ico',
      },
      {
        id: '304',
        url: {
          en: 'https://tachyons.io/',
        },
        title: 'Tachyons',
        tags: ['css'],
        content: '由单一职责工具类组成的函数式 CSS 样式体系；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/tachyons-1888fc.jpg',
      },
      {
        id: '120',
        url: {
          en: 'https://fomantic-ui.com/',
        },
        title: 'Fomantic UI',
        tags: ['css'],
        content: '从 Semantic UI 延续的社区框架，提供语义化组件与主题',
        iconUrl: '/images/resource-icons/fomantic-ui-51ae12.ico',
      },
      {
        id: '305',
        url: {
          en: 'https://styled-components.com/',
        },
        title: 'styled-components',
        tags: ['css'],
        content: '通过模板字符串编写组件样式；处于维护模式，仍有广泛使用',
        iconUrl: '/images/resource-icons/styled-components-b0d6a3.png',
      },
      {
        id: '306',
        url: {
          en: 'https://emotion.sh/docs/introduction',
        },
        title: 'Emotion',
        tags: ['css'],
        content: '支持样式对象和模板字符串的组件样式库，提供缓存与主题能力；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/emotion-aca7d7.png',
      },
      {
        id: '307',
        url: {
          en: 'https://vanilla-extract.style/',
        },
        title: 'vanilla-extract',
        tags: ['css'],
        content: '使用 TypeScript 定义样式并在构建时生成静态 CSS',
        iconUrl: '/images/resource-icons/vanilla-extract-ebab74.png',
      },
      {
        id: '308',
        url: {
          en: 'https://panda-css.com/',
        },
        title: 'Panda CSS',
        tags: ['css'],
        content: '通过静态分析生成原子样式，提供类型安全令牌、配方与模式',
        iconUrl: '/images/resource-icons/panda-css-7b1d66.ico',
      },
      {
        id: '309',
        url: {
          en: 'https://stylexjs.com/',
        },
        title: 'StyleX',
        tags: ['css'],
        content: '由 Meta 开源的静态提取样式系统，生成可复用的原子 CSS',
        iconUrl: '/images/resource-icons/stylex-a7f488.svg',
      },
      {
        id: '310',
        url: {
          en: 'https://linaria.dev/',
        },
        title: 'Linaria',
        tags: ['css'],
        content: '在构建时提取 CSS 的样式库，支持使用 JavaScript 表达样式',
        iconUrl: '/images/resource-icons/linaria-023378.png',
      },
      {
        id: '311',
        url: {
          en: 'https://compiledcssinjs.com/',
        },
        title: 'Compiled',
        tags: ['css'],
        content: '通过构建期编译生成原子 CSS 的组件样式方案',
        iconUrl: '/images/resource-icons/compiled-c12575.png',
      },
      {
        id: '312',
        url: {
          en: 'https://github.com/css-modules/css-modules',
        },
        title: 'CSS Modules',
        tags: ['css'],
        content: '通过局部作用域类名组织 CSS 的模块约定，可与多种构建工具集成',
        iconUrl: '/images/resource-icons/css-modules-391cd9.png',
      },
      {
        id: '313',
        url: {
          en: 'https://necolas.github.io/normalize.css/',
        },
        title: 'normalize.css',
        tags: ['css'],
        content: '保留合理默认样式并统一常见浏览器元素表现的 CSS 基础样式；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/normalize-css-289feb.ico',
      },
      {
        id: '314',
        url: {
          en: 'https://github.com/sindresorhus/modern-normalize',
        },
        title: 'modern-normalize',
        tags: ['css'],
        content: '面向现代浏览器的轻量基础样式归一化方案；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/modern-normalize-9b7f62.png',
      },
      {
        id: '315',
        url: {
          en: 'https://animate.style/',
        },
        title: 'Animate.css',
        tags: ['css'],
        content: '提供可直接组合使用的跨浏览器 CSS 动画类；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/animate-css-c421e0.ico',
      },
      {
        id: '316',
        url: {
          en: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          zh: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
        },
        title: 'MDN CSS 参考',
        tags: ['css'],
        content: '查询 CSS 属性、选择器、布局、函数和浏览器兼容性的参考资料',
        iconUrl: '/images/resource-icons/mdn-css-8b3219.png',
      },
      {
        id: '317',
        url: {
          en: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
          zh: 'https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Styling_basics',
        },
        title: 'MDN CSS 学习',
        tags: ['css'],
        content: '从层叠、选择器和盒模型开始学习 CSS 的系统课程',
        iconUrl: '/images/resource-icons/mdn-css-a21658.png',
      },
      {
        id: '318',
        url: {
          en: 'https://web.dev/learn/css',
        },
        title: 'web.dev Learn CSS',
        tags: ['css'],
        content: '由浏览器开发者维护的 CSS 课程，覆盖布局、交互与现代样式能力',
        iconUrl: '/images/resource-icons/web-dev-learn-css-98569b.png',
      },
      {
        id: '319',
        url: {
          en: 'https://css-tricks.com/',
        },
        title: 'CSS-Tricks',
        tags: ['css'],
        content: '围绕 CSS 与前端实践的教程、技术文章和布局指南',
        iconUrl: '/images/resource-icons/css-tricks-37c154.ico',
      },
      {
        id: '320',
        url: {
          en: 'https://moderncss.dev/',
        },
        title: 'Modern CSS Solutions',
        tags: ['css'],
        content: '通过现代 CSS 解决实际界面、布局与无障碍问题的系列教程',
        iconUrl: '/images/resource-icons/modern-css-solutions-86fc12.png',
      },
      {
        id: '321',
        url: {
          en: 'https://every-layout.dev/',
        },
        title: 'Every Layout',
        tags: ['css'],
        content: '使用内在布局和组合原则构建可适应内容与空间的 CSS 布局',
        iconUrl: '/images/resource-icons/every-layout-d2c452.png',
      },
      {
        id: '322',
        url: {
          en: 'https://smolcss.dev/',
        },
        title: 'SmolCSS',
        tags: ['css'],
        content: '聚焦简短、可组合的现代 CSS 布局与界面模式',
        iconUrl: '/images/resource-icons/smolcss-e2892b.png',
      },
      {
        id: '323',
        url: {
          en: 'https://caniuse.com/',
        },
        title: 'Can I use',
        tags: ['css'],
        content: '查询 CSS、HTML 和 Web API 在主流浏览器中的支持情况',
        iconUrl: '/images/resource-icons/can-i-use-d9da4d.png',
      },
      {
        id: '324',
        url: {
          en: 'https://webstatus.dev/',
        },
        title: 'Web Platform Status',
        tags: ['css'],
        content: '按 Baseline 状态查询 Web 平台功能的跨浏览器可用性',
        iconUrl: '/images/resource-icons/web-platform-status-8e0a6c.png',
      },
      {
        id: '325',
        url: {
          en: 'https://www.w3.org/Style/CSS/',
        },
        title: 'CSS Working Group',
        tags: ['css'],
        content: '访问 CSS 工作组的标准草案、模块状态和规范进展',
        iconUrl: '/images/resource-icons/css-working-group-66222f.ico',
      },
      {
        id: '326',
        url: {
          en: 'https://flukeout.github.io/',
        },
        title: 'CSS Diner',
        tags: ['css'],
        content: '通过交互练习学习 CSS 选择器',
        iconUrl: '/images/resource-icons/css-diner-a75f6f.png',
      },
      {
        id: '327',
        url: {
          en: 'https://flexboxfroggy.com/',
        },
        title: 'Flexbox Froggy',
        tags: ['css'],
        content: '通过青蛙布局练习学习 Flexbox 对齐与分布',
        iconUrl: '/images/resource-icons/flexbox-froggy-896762.ico',
      },
      {
        id: '328',
        url: {
          en: 'https://cssgridgarden.com/',
        },
        title: 'Grid Garden',
        tags: ['css'],
        content: '通过网格花园练习学习 CSS Grid 布局',
        iconUrl: '/images/resource-icons/grid-garden-e97fc0.ico',
      },
      {
        id: '329',
        url: {
          en: 'https://github.com/vercel/styled-jsx',
        },
        title: 'styled-jsx',
        tags: ['css'],
        content: '为 React 组件提供作用域样式，支持服务端渲染与构建优化；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/styled-jsx-c95b53.png',
      },
      {
        id: '330',
        url: {
          en: 'https://cssinjs.org/',
        },
        title: 'JSS',
        tags: ['css'],
        content: '使用 JavaScript 对象定义样式的传统方案，适用于维护既有项目；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/jss-870bad.ico',
      },
      {
        id: '331',
        url: {
          en: 'https://styled-system.com/',
        },
        title: 'Styled System',
        tags: ['css'],
        content: '将主题令牌与组件属性映射为样式的工具集，适用于既有设计系统；稳定发布间隔较长，仍有存量采用',
        iconUrl: '/images/resource-icons/styled-system-bd85be.png',
      },
      {
        id: '332',
        url: {
          en: 'https://github.com/mui/pigment-css',
        },
        title: 'Pigment CSS',
        tags: ['css'],
        content: '由 MUI 开发的构建期样式提取方案，目前仍处于实验阶段',
        iconUrl: '/images/resource-icons/pigment-css-87722c.png',
      },
      {
        id: '333',
        url: {
          en: 'https://preset-env.cssdb.org/',
        },
        title: 'PostCSS Preset Env',
        tags: ['css'],
        content: '根据目标浏览器将现代 CSS 特性转换为兼容样式',
        iconUrl: '/images/resource-icons/postcss-preset-env-6955bc.ico',
      },
      {
        id: '334',
        url: {
          en: 'https://purgecss.com/',
        },
        title: 'PurgeCSS',
        tags: ['css'],
        content: '分析模板与内容并移除未使用 CSS 的构建期工具',
        iconUrl: '/images/resource-icons/purgecss-eb259d.png',
      },
      {
        id: '335',
        url: {
          en: 'https://materializeweb.com/',
        },
        title: 'Materialize',
        tags: ['css'],
        content: '基于 Material Design 的响应式样式与交互组件框架',
        iconUrl: '/images/resource-icons/materialize-ccec8c.png',
      },
      {
        id: '336',
        url: {
          en: 'https://www.joshwcomeau.com/css/',
        },
        title: 'Josh W. Comeau CSS',
        tags: ['css'],
        content: '通过交互示例讲解 CSS 布局、动画与界面实现的系列文章',
        iconUrl: '/images/resource-icons/josh-w-comeau-css-a18ce5.png',
      },
    ],
  },
  {
    title: '测试与代码质量',
    resources: [
      {
        id: '354',
        url: {
          en: 'https://vitest.dev/',
          zh: 'https://cn.vitest.dev/',
        },
        title: 'Vitest',
        tags: ['单元测试'],
        content: '基于 Vite 的测试框架，支持 TypeScript、快照、覆盖率与浏览器测试',
        iconUrl: '/images/resource-icons/vitest-7fc39e.ico',
      },
      {
        id: '355',
        url: {
          en: 'https://jestjs.io/',
          zh: 'https://jestjs.io/zh-Hans/',
        },
        title: 'Jest',
        tags: ['单元测试', 'js'],
        content: 'JavaScript 测试框架，集成断言、Mock、快照与覆盖率功能',
        iconUrl: '/images/resource-icons/jest-1f30f0.ico',
      },
      {
        id: '356',
        url: {
          en: 'https://mochajs.org/',
        },
        title: 'Mocha',
        tags: ['单元测试', 'js'],
        content: '支持 Node.js 与浏览器的 JavaScript 测试框架，可自由搭配断言和 Mock 工具',
        iconUrl: '/images/resource-icons/mocha-676cf0.svg',
      },
      {
        id: '357',
        url: {
          en: 'https://jasmine.github.io/',
        },
        title: 'Jasmine',
        tags: ['单元测试'],
        content: '可在浏览器和 Node.js 中运行的 JavaScript 行为驱动测试框架',
        iconUrl: '/images/resource-icons/jasmine-7876ab.ico',
      },
      {
        id: '358',
        url: {
          en: 'https://rstest.rs/',
          zh: 'https://rstest.rs/zh/',
        },
        title: 'Rstest',
        tags: ['单元测试'],
        content: '基于 Rspack 的 JavaScript 和 TypeScript 测试框架，支持组件与真实浏览器测试',
        iconUrl: '/images/resource-icons/rstest-1f18dd.svg',
      },
      {
        id: '359',
        url: {
          en: 'https://qunitjs.com/',
        },
        title: 'QUnit',
        tags: ['单元测试', 'js'],
        content: '支持浏览器和 Node.js 的 JavaScript 测试框架，可扩展断言、运行器与报告',
        iconUrl: '/images/resource-icons/qunit-6bfe58.svg',
      },
      {
        id: '360',
        url: {
          en: 'https://github.com/avajs/ava',
        },
        title: 'AVA',
        tags: ['单元测试', 'js'],
        content: '面向 Node.js 的 JavaScript 测试运行器，支持并发执行与直观断言差异',
        iconUrl: '/images/resource-icons/ava-7b7ca8.png',
      },
      {
        id: '361',
        url: {
          en: 'https://node-tap.org/',
        },
        title: 'node-tap',
        tags: ['单元测试'],
        content: '基于 TAP 协议的 JavaScript 测试框架，集成断言、快照、Mock 与覆盖率',
        iconUrl: '/images/resource-icons/node-tap-d720d9.ico',
      },
      {
        id: '362',
        url: {
          en: 'https://modern-web.dev/docs/test-runner/overview/',
        },
        title: 'Web Test Runner',
        tags: ['浏览器测试'],
        content: '在真实浏览器中运行 Web 测试，支持原生模块与多种浏览器启动器',
        iconUrl: '/images/resource-icons/web-test-runner-1c46e0.png',
      },
      {
        id: '363',
        url: {
          en: 'https://playwright.dev/',
        },
        title: 'Playwright',
        tags: ['E2E', '浏览器'],
        content: '跨 Chromium、Firefox 和 WebKit 的端到端测试框架，内置自动等待与追踪',
        iconUrl: '/images/resource-icons/playwright-9b7555.ico',
      },
      {
        id: '364',
        url: {
          en: 'https://www.cypress.io/',
        },
        title: 'Cypress',
        tags: ['E2E'],
        content: '面向 Web 应用的端到端和组件测试工具，提供交互式调试体验',
        iconUrl: '/images/resource-icons/cypress-84c445.svg',
      },
      {
        id: '365',
        url: {
          en: 'https://webdriver.io/',
        },
        title: 'WebdriverIO',
        tags: ['E2E'],
        content: '基于 WebDriver 与 WebDriver BiDi 的自动化框架，支持浏览器与组件测试',
        iconUrl: '/images/resource-icons/webdriverio-00c717.png',
      },
      {
        id: '366',
        url: {
          en: 'https://nightwatchjs.org/',
        },
        title: 'Nightwatch',
        tags: ['E2E'],
        content: '支持真实浏览器、移动端和并行执行的 JavaScript 端到端测试框架',
        iconUrl: '/images/resource-icons/nightwatch-353082.ico',
      },
      {
        id: '367',
        url: {
          en: 'https://pptr.dev/',
        },
        title: 'Puppeteer',
        tags: ['浏览器'],
        content: '通过 DevTools Protocol 或 WebDriver BiDi 控制 Chrome 和 Firefox 的 JavaScript 库',
        iconUrl: '/images/resource-icons/puppeteer-57f940.ico',
      },
      {
        id: '368',
        url: {
          en: 'https://cucumber.io/docs/installation/javascript/',
        },
        title: 'Cucumber.js',
        tags: ['BDD'],
        content: '在 JavaScript 中执行 Gherkin 行为规格，用于行为驱动开发与验收测试',
        iconUrl: '/images/resource-icons/cucumber-js-3f23e5.svg',
      },
      {
        id: '369',
        url: {
          en: 'https://testing-library.com/',
        },
        title: 'Testing Library',
        tags: ['组件测试'],
        content: '从用户操作与可访问性语义出发测试 UI 的轻量工具集合，提供多框架适配',
        iconUrl: '/images/resource-icons/testing-library-0a037d.png',
      },
      {
        id: '370',
        url: {
          en: 'https://storybook.js.org/',
        },
        title: 'Storybook',
        tags: ['组件测试'],
        content: '独立开发、展示和测试 UI 组件的工作台，支持交互测试与视觉测试集成',
        iconUrl: '/images/resource-icons/storybook-a47b34.svg',
      },
      {
        id: '371',
        url: {
          en: 'https://mswjs.io/',
        },
        title: 'Mock Service Worker',
        tags: ['Mock'],
        content: '跨浏览器与 Node.js 的网络请求模拟库，可在开发和测试中复用 Mock',
        iconUrl: '/images/resource-icons/mock-service-worker-0d3b7c.svg',
      },
      {
        id: '372',
        url: {
          en: 'https://www.chaijs.com/',
        },
        title: 'Chai',
        tags: ['断言库'],
        content: '可与任意 JavaScript 测试框架搭配的 BDD 和 TDD 断言库',
        iconUrl: '/images/resource-icons/chai-b1e160.ico',
      },
      {
        id: '373',
        url: {
          en: 'https://sinonjs.org/',
        },
        title: 'Sinon.JS',
        tags: ['Mock'],
        content: '独立的 JavaScript 测试替身库，提供 spies、stubs、mocks 与假时钟',
        iconUrl: '/images/resource-icons/sinon-js-a8acd0.png',
      },
      {
        id: '374',
        url: {
          en: 'https://github.com/jsdom/jsdom',
        },
        title: 'jsdom',
        tags: ['DOM环境'],
        content: '在 Node.js 中实现 DOM 和 HTML 等 Web 标准，为前端测试提供模拟环境',
        iconUrl: '/images/resource-icons/jsdom-338410.png',
      },
      {
        id: '375',
        url: {
          en: 'https://github.com/capricorn86/happy-dom',
        },
        title: 'Happy DOM',
        tags: ['DOM环境'],
        content: '用于测试的 JavaScript DOM 实现，提供无图形界面的浏览器 API 模拟',
        iconUrl: '/images/resource-icons/happy-dom-687611.png',
      },
      {
        id: '376',
        url: {
          en: 'https://istanbul.js.org/',
        },
        title: 'Istanbul / nyc',
        tags: ['覆盖率'],
        content: '基于代码插桩统计 JavaScript 测试覆盖率，提供命令行与多种报告格式',
        iconUrl: '/images/resource-icons/istanbul-nyc-99c65f.png',
      },
      {
        id: '377',
        url: {
          en: 'https://github.com/bcoe/c8',
        },
        title: 'c8',
        tags: ['覆盖率'],
        content: '使用 V8 原生覆盖率收集能力生成 JavaScript 测试覆盖率报告',
        iconUrl: '/images/resource-icons/c8-7ed6a8.png',
      },
      {
        id: '378',
        url: {
          en: 'https://fast-check.dev/',
        },
        title: 'fast-check',
        tags: ['属性测试'],
        content: 'JavaScript 和 TypeScript 属性测试库，自动生成并收缩测试输入以发现边界缺陷',
        iconUrl: '/images/resource-icons/fast-check-aff39b.png',
      },
      {
        id: '379',
        url: {
          en: 'https://stryker-mutator.io/docs/stryker-js/introduction/',
        },
        title: 'StrykerJS',
        tags: ['变异测试'],
        content: '面向 JavaScript 和 TypeScript 的变异测试工具，用故意修改代码检验测试有效性',
        iconUrl: '/images/resource-icons/strykerjs-657390.svg',
      },
      {
        id: '380',
        url: {
          en: 'https://github.com/dequelabs/axe-core',
        },
        title: 'axe-core',
        tags: ['无障碍测试'],
        content: 'Web UI 自动无障碍测试引擎，可集成现有功能测试与浏览器自动化工具',
        iconUrl: '/images/resource-icons/axe-core-0663d1.png',
      },
      {
        id: '381',
        url: {
          en: 'https://eslint.org/',
          zh: 'https://zh-hans.eslint.org/',
        },
        title: 'ESLint',
        tags: ['代码检查', 'js'],
        content: '可扩展的 JavaScript 代码检查工具，通过规则与自动修复发现和处理问题',
        iconUrl: '/images/resource-icons/eslint-6e3a6f.ico',
      },
      {
        id: '382',
        url: {
          en: 'https://typescript-eslint.io/',
        },
        title: 'typescript-eslint',
        tags: ['代码检查', 'ts'],
        content: '为 ESLint 提供 TypeScript 解析、规则与基于类型信息的静态分析',
        iconUrl: '/images/resource-icons/typescript-eslint-7a1dd8.ico',
      },
      {
        id: '383',
        url: {
          en: 'https://stylelint.io/',
        },
        title: 'Stylelint',
        tags: ['代码检查'],
        content: 'CSS 代码检查工具，帮助避免样式错误、统一约定并自动修复问题',
        iconUrl: '/images/resource-icons/stylelint-47475f.svg',
      },
      {
        id: '384',
        url: {
          en: 'https://prettier.io/',
        },
        title: 'Prettier',
        tags: ['格式化'],
        content: '支持 JavaScript、TypeScript、CSS、HTML、Markdown 等语言的代码格式化工具',
        iconUrl: '/images/resource-icons/prettier-61dfdd.png',
      },
      {
        id: '385',
        url: {
          en: 'https://biomejs.dev/',
          zh: 'https://biomejs.dev/zh-cn/',
        },
        title: 'Biome',
        tags: ['代码检查'],
        content: '集格式化与代码检查于一体的 Web 工具链，支持 JavaScript、TypeScript 等语言',
        iconUrl: '/images/resource-icons/biome-e3bc83.ico',
      },
      {
        id: '386',
        url: {
          en: 'https://oxc.rs/docs/guide/usage/linter.html',
        },
        title: 'Oxlint',
        tags: ['代码检查'],
        content: 'Oxc 项目的 Rust 代码检查工具，提供 ESLint 兼容规则与类型感知检查',
        iconUrl: '/images/resource-icons/oxlint-32a409.svg',
      },
      {
        id: '387',
        url: {
          en: 'https://oxc.rs/docs/guide/usage/formatter.html',
        },
        title: 'Oxfmt',
        tags: ['格式化'],
        content: 'Oxc 项目的 Prettier 兼容格式化工具（Beta），支持代码整理与 Tailwind 类排序',
        iconUrl: '/images/resource-icons/oxfmt-a8c34a.svg',
      },
      {
        id: '388',
        url: {
          en: 'https://knip.dev/',
        },
        title: 'Knip',
        tags: ['静态分析'],
        content: '分析 JavaScript 和 TypeScript 项目，查找未使用的依赖、导出与文件',
        iconUrl: '/images/resource-icons/knip-bbbeab.svg',
      },
      {
        id: '389',
        url: {
          en: 'https://commitlint.js.org/',
        },
        title: 'commitlint',
        tags: ['提交规范'],
        content: '检查 Git 提交信息是否符合团队约定，可与 Git hooks 和 CI 集成',
        iconUrl: '/images/resource-icons/commitlint-b341c5.png',
      },
      {
        id: '390',
        url: {
          en: 'https://typicode.github.io/husky/',
          zh: 'https://typicode.github.io/husky/zh/',
        },
        title: 'Husky',
        tags: ['Git钩子'],
        content: '管理 Git hooks，在提交和推送等阶段自动运行代码检查与测试',
        iconUrl: '/images/resource-icons/husky-1e1076.jpg',
      },
      {
        id: '391',
        url: {
          en: 'https://github.com/lint-staged/lint-staged',
        },
        title: 'lint-staged',
        tags: ['提交检查'],
        content: '仅针对 Git 暂存文件运行格式化、代码检查等任务，提高提交检查效率',
        iconUrl: '/images/resource-icons/lint-staged-3be64c.png',
      },
      {
        id: '392',
        url: {
          en: 'https://karma-runner.github.io/',
        },
        title: 'Karma',
        tags: ['浏览器测试'],
        content: '在多个真实浏览器中运行 JavaScript 测试的传统运行器；已弃用，供存量项目维护参考',
        iconUrl: '/images/resource-icons/karma-296e71.png',
      },
      {
        id: '393',
        url: {
          en: 'https://www.protractortest.org/',
        },
        title: 'Protractor',
        tags: ['E2E'],
        content: '面向 Angular 与 AngularJS 的传统端到端测试框架；2023 年已结束维护',
        iconUrl: '/images/resource-icons/protractor-fd6b2b.ico',
      },
      {
        id: '394',
        url: {
          en: 'https://palantir.github.io/tslint/',
        },
        title: 'TSLint',
        tags: ['代码检查'],
        content: '已弃用的 TypeScript 静态检查工具，官方建议迁移至 typescript-eslint',
        iconUrl: '/images/resource-icons/tslint-a1bf91.ico',
      },
      {
        id: '395',
        url: {
          en: 'https://enzymejs.github.io/enzyme/',
        },
        title: 'Enzyme',
        tags: ['组件测试'],
        content: '传统 React 组件测试工具，提供输出操作、遍历与模拟接口；正式适配停留在 React 16',
        iconUrl: '/images/resource-icons/enzyme-9b60b3.png',
      },
      {
        id: '397',
        url: {
          en: 'https://node.testcontainers.org/',
        },
        title: 'Testcontainers for Node.js',
        tags: ['集成测试'],
        content: '用于全栈容器集成测试，通过一次性 Docker 容器提供数据库、浏览器与服务等真实依赖',
        iconUrl: '/images/resource-icons/testcontainers-for-node-js-2c14ce.ico',
      },
      {
        id: '406',
        url: {
          en: 'https://standardjs.com/',
          zh: 'https://standardjs.com/readme-zhcn',
        },
        title: 'StandardJS',
        tags: ['代码检查'],
        content: '零配置的 JavaScript 代码风格规范、检查器与自动修复工具',
        iconUrl: '/images/resource-icons/standardjs-5b42d9.png',
      },
      {
        id: '407',
        url: {
          en: 'https://github.com/xojs/xo',
        },
        title: 'XO',
        tags: ['代码检查'],
        content: '具有预设规则的 JavaScript 和 TypeScript 检查工具，封装 ESLint 并提供自动修复',
        iconUrl: '/images/resource-icons/xo-8c71fa.png',
      },
      {
        id: '408',
        url: {
          en: 'https://jshint.com/',
        },
        title: 'JSHint',
        tags: ['代码检查', 'js'],
        content: '检测 JavaScript 常见错误与潜在问题的传统静态代码分析工具',
        iconUrl: '/images/resource-icons/jshint-5bdee6.png',
      },
      {
        id: '409',
        url: {
          en: 'https://github.com/DavidAnson/markdownlint',
        },
        title: 'markdownlint',
        tags: ['代码检查'],
        content: '用于 Markdown 和 CommonMark 文档的规则检查工具，可发现格式与风格问题',
        iconUrl: '/images/resource-icons/markdownlint-aba107.png',
      },
      {
        id: '410',
        url: {
          en: 'https://github.com/toplenboren/simple-git-hooks',
        },
        title: 'simple-git-hooks',
        tags: ['Git钩子'],
        content: '轻量 Git hooks 管理器，通过 package.json 或独立配置运行提交检查',
        iconUrl: '/images/resource-icons/simple-git-hooks-ec142e.png',
      },
      {
        id: '411',
        url: {
          en: 'https://lefthook.dev/',
        },
        title: 'Lefthook',
        tags: ['Git钩子'],
        content: '支持并行命令与暂存文件筛选的 Git hooks 管理器',
        iconUrl: '/images/resource-icons/lefthook-72c4be.svg',
      },
      {
        id: '412',
        url: {
          en: 'https://rslint.rs/',
        },
        title: 'Rslint',
        tags: ['代码检查', 'ts'],
        content: '基于 TypeScript 原生编译器的检查工具，支持 ESLint 兼容规则与类型检查',
        iconUrl: '/images/resource-icons/rslint-6a04a7.svg',
      },
      {
        id: '416',
        url: {
          en: 'https://github.com/antfu/eslint-config',
        },
        title: 'Antfu ESLint Config',
        tags: ['代码规范'],
        content: '覆盖 JavaScript、TypeScript、Vue 等项目的 ESLint 扁平配置预设',
        iconUrl: '/images/resource-icons/antfu-eslint-config-aa39f9.ico',
      },
    ],
  },
] as const satisfies readonly { title: string, resources: readonly Resource[] }[]
