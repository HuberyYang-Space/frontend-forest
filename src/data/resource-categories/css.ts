import type { Resource } from '../resource-types'

const resources = [
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
] as const satisfies readonly Resource[]

export default resources
