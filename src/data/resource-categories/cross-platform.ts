import type { Resource } from '../resource-types'

const resources = [
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
] as const satisfies readonly Resource[]

export default resources
