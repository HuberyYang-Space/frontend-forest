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
        tags: ['vue', 'js', '框架'],
        content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/001',
      },
      {
        id: '002',
        url: {
          zh: 'https://vuex.vuejs.org/zh/',
          en: 'https://vuex.vuejs.org/',
        },
        title: 'Vuex',
        tags: ['vue', '库'],
        content: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/002',
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
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/003',
      },
      {
        id: '004',
        url: {
          zh: 'https://pinia.vuejs.org/zh/',
          en: 'https://pinia.vuejs.org/',
        },
        title: 'Pinia',
        tags: ['vue', '库'],
        content: 'Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/004',
      },
      {
        id: '005',
        url: {
          zh: 'https://zh-hans.react.dev/',
          en: 'https://react.dev/',
        },
        title: 'React',
        tags: ['react', 'js', '框架'],
        content: '用于构建用户界面的 JavaScript 库',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/005',
      },
      {
        id: '006',
        url: {
          zh: 'https://reactrouter.cn/',
          en: 'https://reactrouter.com/',
        },
        title: 'React Router',
        tags: ['react', '库'],
        content: 'React.js的官方路由',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/006',
      },
      {
        id: '007',
        url: {
          zh: 'https://cn.redux.js.org/',
          en: 'https://redux.js.org/',
        },
        title: 'Redux',
        tags: ['redux', '库'],
        content: 'JS 应用的状态容器，提供可预测的状态管理',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/007',
      },
      {
        id: '008',
        url: {
          zh: 'https://reactnative.cn/',
          en: 'https://reactnative.dev/',
        },
        title: 'React Native',
        tags: ['react native', 'js', '框架'],
        content: '一次学习，随处编写',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/005',
      },
      {
        id: '009',
        url: {
          zh: 'https://nuxt.com.cn/',
          en: 'https://nuxt.com/',
        },
        title: 'NuxtJS',
        tags: ['nuxtjs', 'vue', '框架'],
        content: '使用简便的 Vue 框架',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/009',
      },
      {
        id: '010',
        url: {
          zh: 'https://www.nextjs.cn/',
          en: 'https://nextjs.org/',
        },
        title: 'Next.js',
        tags: ['nextjs', 'react', '框架'],
        content: '这是一个用于 生产环境的 React 框架',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/010',
      },
      {
        id: '011',
        url: {
          zh: 'https://www.solidjs.com/',
          en: 'https://www.solidjs.com/',
        },
        title: 'solid.js',
        tags: ['solidjs', 'js', '框架'],
        content: '一个用于构建用户界面，简单高效、性能卓越的JavaScript库',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/011',
      },
      {
        id: '012',
        url: {
          zh: 'https://www.svelte.cn/',
          en: 'https://svelte.dev/',
        },
        title: 'Svelte.js',
        tags: ['sveltejs', 'js', '框架'],
        content: 'Svelte 是一种全新的构建用户界面的方法',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/012',
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
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/013',
      },
      {
        id: '014',
        url: {
          en: 'https://angular.dev/',
          zh: 'https://angular.cn/',
        },
        title: 'Angular.js',
        tags: ['amgular', 'js', '框架'],
        content: '现代 Web 开发平台',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/014',
      },
      {
        id: '015',
        url: {
          en: 'https://preactjs.com/',
          zh: 'https://preactjs.com/',
        },
        title: 'Preact.js',
        tags: ['preact', 'js', '框架'],
        content: 'React 的轻量级替代方案，体积仅有 3kB，并且拥有与 React 相同的 API',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/015',
      },
      {
        id: '016',
        url: {
          zh: 'https://uniapp.dcloud.net.cn/',
          en: 'https://en.uniapp.dcloud.io/',
        },
        title: 'uni-app',
        tags: ['uni-app', '框架'],
        content:
      'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/016',
      },
      {
        id: '017',
        url: {
          zh: 'https://ionic.nodejs.cn/',
          en: 'https://ionicframework.com/',
        },
        title: 'Ionic',
        tags: ['ionic', '框架'],
        content: 'Ionic 是目前最有潜力的一款 HTML5 手机应用开发框架',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/017',
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
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/018',
      },
      {
        id: '019',
        url: {
          zh: 'https://qwikcn.netlify.app/docs/overview/',
          en: 'https://qwik.dev/',
        },
        title: 'quik',
        tags: ['quik', 'js'],
        content: '毫不费力地构建即时交互的网络应用程序',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/019',
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
        title: 'Webpack',
        tags: ['Webpack', '打包工具'],
        content: '构建你的 assets',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/020',
      },
      {
        id: '021',
        url: {
          en: 'https://vite.dev/',
          zh: 'https://cn.vitejs.dev/',
        },
        title: 'Vite',
        tags: ['vite', '工具链'],
        content: '下一代的前端工具链，为开发提供极速响应',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/021',
      },
      {
        id: '022',
        url: {
          en: 'https://esbuild.github.io/',
          zh: 'https://esbuild.bootcss.com/getting-started/',
        },
        title: 'esbuild',
        tags: ['esbuild', '打包工具'],
        content: '速度极快的网络捆绑器',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/022',
      },
      {
        id: '023',
        url: {
          en: 'https://parceljs.org/',
          zh: 'https://zh.parceljs.org/',
        },
        title: 'Parcel',
        tags: ['parceljs', '打包工具'],
        content: '极速零配置Web应用打包工具',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/023',
      },
      {
        id: '024',
        url: {
          en: 'https://rollupjs.org/',
          zh: 'https://www.rollupjs.com/',
        },
        title: 'Rollup',
        tags: ['rollupjs', '打包工具'],
        content: 'Rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/024',
      },
      {
        id: '025',
        url: {
          en: 'https://babeljs.io/',
          zh: 'https://www.babeljs.cn/',
        },
        title: 'Babel',
        tags: ['babeljs', '编译器'],
        content: 'Babel 是一个 JavaScript 编译器',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/025',
      },
      {
        id: '026',
        url: {
          en: 'https://gruntjs.com/',
          zh: 'https://www.gruntjs.net/',
        },
        title: 'Grunt.js',
        tags: ['gruntjs', '构建工具'],
        content: 'JavaScript 世界的构建工具',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/026',
      },
      {
        id: '027',
        url: {
          en: 'https://gulpjs.com/',
          zh: 'https://www.gulpjs.com.cn/',
        },
        title: 'Gulp.js',
        tags: ['gulpjs', '构建工具'],
        content: '用自动化构建工具增强你的工作流程！',
        iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/027',
      },
    ],
  },
] as const satisfies readonly { title: string, resources: readonly Resource[] }[]
