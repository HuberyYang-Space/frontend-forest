import type { Resource } from '../resource-types'

const resources = [
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
] as const satisfies readonly Resource[]

export default resources
