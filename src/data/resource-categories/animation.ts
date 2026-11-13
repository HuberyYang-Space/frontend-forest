import type { Resource } from '../resource-types'

const resources = [
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
    id: '315',
    url: {
      en: 'https://animate.style/',
    },
    title: 'Animate.css',
    tags: ['css'],
    content: '提供可直接组合使用的跨浏览器 CSS 动画类；稳定发布间隔较长，仍有存量采用',
    iconUrl: '/images/resource-icons/animate-css-c421e0.ico',
  },
] as const satisfies readonly Resource[]

export default resources
