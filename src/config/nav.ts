interface MenuItem {
  id: string
  url: { en?: string, zh?: string }
  title: string
  tags: string[]
  content?: string
  showConfig: boolean
  iconUrl: string
}

export interface MenuList { [key: string]: { title: string, data: MenuItem[] } }

// async function getItemIcon(id: string, query: string) {
//   const { VITE_APP_REQUEST_API, VITE_APP_TRUE_API } = import.meta.env
//   const baseURL = VITE_APP_REQUEST_API + VITE_APP_TRUE_API
//   const res = await axios.get(`${baseURL}/getWebIcons?id=${id}&url=${query}`)
//   return res?.data?.data || ''
// }

export async function getNavList() {
  const menuList: MenuList = {
    // 框架与生态
    list1: {
      title: '框架与生态',
      data: [
        {
          id: '001',
          url: {
            en: 'https://vuejs.org/',
            zh: 'https://cn.vuejs.org/',
          },
          title: 'Vue.js',
          tags: ['vue', 'js', '框架'],
          content: '渐进式 JavaScript 框架,易学易用，性能出色，适用场景丰富的 Web 前端框架',
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
          iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/019',
        },
      ],
    },
    // 打包构建工具
    list2: {
      title: '打包/构建工具',
      data: [
        {
          id: '020',
          url: {
            en: 'https://webpack.js.org/',
            zh: 'https://www.webpackjs.com/concepts/',
          },
          title: 'Webpack',
          tags: ['Webpack', '打包工具'],
          content: '构建你的 assets',
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
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
          showConfig: false,
          iconUrl: 'https://www.huberyyang.site/asstes/frontend-forest/027',
        },
      ],
    },
    // css/组件库
    // list3: {
    //   title: 'css框架/组件库',
    //   data: [
    //     {
    //       id: nanoid(),
    //       url: 'https://ant.design/index-cn',
    //       img: 'ant.design/index-cn.png',
    //       title: 'Ant Design',
    //       tags: ['AntDesign', '组件库', 'react'],
    //       content: '助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://antdv.com/components/overview-cn',
    //       img: 'antdv.com/components/overview-cn.png',
    //       title: 'Ant Design Vue',
    //       tags: ['AntDesign', '组件库', 'vue'],
    //       content: 'ant-design-vue 为 Web 应用提供了丰富的基础 UI 组件',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://element-plus.gitee.io/zh-CN/',
    //       img: 'element-plus.gitee.io/zh-CN/.png',
    //       title: 'Element Plus',
    //       tags: ['element', '组件库', ' vue3'],
    //       content: '基于 Vue 3，面向设计师和开发者的组件库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://element.eleme.cn/#/zh-CN',
    //       img: 'element.eleme.cn.png',
    //       title: 'Element',
    //       tags: ['element', '组件库', 'vue2'],
    //       content: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://vant-contrib.gitee.io/vant/#/zh-CN/',
    //       img: 'vant-ui.github.io.png',
    //       title: 'Vant',
    //       tags: ['vant', '移动端组件库', 'vue3'],
    //       content: '轻量、可定制的移动端 Vue 组件库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.naiveui.com/zh-CN/os-theme',
    //       img: 'www.naiveui.com/zh-CN/os-theme.png',
    //       title: 'Naive UI',
    //       tags: ['naiveui', '组件库', 'vue3'],
    //       content: '一个 Vue 3 组件库，比较完整，主题可调，使用 TypeScript，快',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://echarts.apache.org/zh/index.html',
    //       img: 'echarts.apache.org/zh.png',
    //       title: 'ECharts',
    //       tags: ['ECharts', '组件库'],
    //       content: '一个基于 JavaScript 的开源可视化图表库',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.bootcss.com/',
    //       img: 'www.bootcss.com.png',
    //       title: 'Bootstrap',
    //       tags: ['Bootstrap', '框架'],
    //       content: '简洁、直观、强悍的前端开发框架，让web开发更迅速、简单',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://unocss.dev/',
    //       img: 'unocss.dev.png',
    //       title: 'UnoCSS',
    //       tags: ['unocss', 'css'],
    //       content: '即时按需原子CSS引擎',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://cn.windicss.org/',
    //       img: 'cn.windicss.org.png',
    //       title: 'Windi CSS',
    //       tags: ['windicss', 'css', '框架'],
    //       content: '下一代工具类 CSS 框架',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.tailwindcss.cn/',
    //       img: 'www.tailwindcss.cn.png',
    //       title: 'tailwindcss',
    //       tags: ['tailwindcss', 'css', '框架'],
    //       content: '无需离开您的HTML，即可快速建立现代网站',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://bulma.zcopy.site/',
    //       img: 'bulma.zcopy.site.png',
    //       title: 'Bulma',
    //       tags: ['Bulma', 'css', '框架'],
    //       content: 'Bulma是一个免费、开源的CSS框架，它提供了易于使用的前端的组件，您可以轻松地组合这些组件来构建响应式Web界面',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://purecss.bootcss.com/',
    //       img: 'purecss.bootcss.com.png',
    //       title: 'Pure.CSS',
    //       tags: ['Pure', 'css', '框架'],
    //       content: 'Pure 是一组小巧且支持响应式布局的 CSS 模块，可用于任何 web 项目',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.sass.hk/',
    //       img: 'www.sass.hk.png',
    //       title: 'Sass',
    //       tags: ['sass', '预处理器'],
    //       content: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://www.stylus-lang.cn/',
    //       img: 'www.stylus-lang.cn.png',
    //       title: 'Stylus',
    //       tags: ['stylus', '预处理器'],
    //       content: '富于表现力、动态的、健壮的 CSS',
    //     },
    //     {
    //       id: nanoid(),
    //       url: 'https://less.devjs.cn/',
    //       img: 'lesscss.org.png',
    //       title: 'less',
    //       tags: ['less', '预处理器'],
    //       content: 'Less （Leaner Style Sheets 的缩写） 是一门向后兼容的 CSS 扩展语言',
    //     },
    //   ],
    // },
  }

  // for (const key in menuList) {
  //   const listData = menuList[key]
  //   for await (const item of listData.data) {
  //     const url = item.url.en || item.url.zh || ''
  //     const res = await getItemIcon(item.id, url)
  //     item.iconUrl = res
  //   }
  // }

  return menuList
}
