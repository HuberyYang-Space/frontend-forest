import type { Resource } from '../resource-types'

const resources = [
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
] as const satisfies readonly Resource[]

export default resources
