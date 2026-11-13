import type { Resource } from '../resource-types'

const resources = [
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
] as const satisfies readonly Resource[]

export default resources
