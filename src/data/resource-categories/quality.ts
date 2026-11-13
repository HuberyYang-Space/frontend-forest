import type { Resource } from '../resource-types'

const resources = [
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
] as const satisfies readonly Resource[]

export default resources
