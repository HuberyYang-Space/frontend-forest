import type { Resource } from '../resource-types'

const resources = [
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
    id: '140',
    url: {
      en: 'https://framework7.io/',
    },
    title: 'Framework7',
    tags: ['移动端'],
    content: '构建移动与桌面 Web 应用的 UI 框架，提供多种框架集成',
    iconUrl: '/images/resource-icons/framework7-47e3c7.png',
  },
] as const satisfies readonly Resource[]

export default resources
