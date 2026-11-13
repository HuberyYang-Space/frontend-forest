import type { Resource } from '../resource-types'

const resources = [
  {
    id: '189',
    url: {
      en: 'https://react-hook-form.com/',
    },
    title: 'React Hook Form',
    tags: ['表单', '校验'],
    content: '基于 React Hooks 的表单状态与校验库，支持多种 schema 校验器',
    iconUrl: '/images/resource-icons/react-hook-form-b497f0.png',
  },
  {
    id: '190',
    url: {
      en: 'https://tanstack.com/form/latest',
    },
    title: 'TanStack Form',
    tags: ['表单', '校验'],
    content: '支持 React、Vue 等框架的类型安全表单状态与校验方案',
    iconUrl: '/images/resource-icons/tanstack-form-956f40.png',
  },
  {
    id: '191',
    url: {
      en: 'https://formik.org/',
    },
    title: 'Formik',
    tags: ['表单', '校验'],
    content: '管理 React 表单值、访问状态、错误、校验和提交的表单库',
    iconUrl: '/images/resource-icons/formik-7145d2.png',
  },
  {
    id: '192',
    url: {
      en: 'https://vee-validate.logaretm.com/',
    },
    title: 'VeeValidate',
    tags: ['表单', '校验'],
    content: 'Vue 表单库，提供组件与组合式 API 管理值、校验、错误和提交',
    iconUrl: '/images/resource-icons/veevalidate-89fb1b.ico',
  },
  {
    id: '193',
    url: {
      en: 'https://vuelidate-next.netlify.app/',
    },
    title: 'Vuelidate',
    tags: ['表单', '校验'],
    content: '基于数据模型的 Vue 表单校验库；目前处于 LTS 模式',
    iconUrl: '/images/resource-icons/vuelidate-22ca8e.png',
  },
  {
    id: '194',
    url: {
      en: 'https://formkit.com/',
    },
    title: 'FormKit',
    tags: ['表单', '校验'],
    content: '提供表单输入、校验、schema 与主题的表单框架，支持 Vue 和 React 集成',
    iconUrl: '/images/resource-icons/formkit-f20c61.ico',
  },
  {
    id: '195',
    url: {
      en: 'https://github.com/alibaba/formily',
    },
    title: 'Formily',
    tags: ['表单', '校验'],
    content: '阿里巴巴的 schema 驱动表单方案，支持表单状态管理与多组件体系适配',
    iconUrl: '/images/resource-icons/formily-50d205.ico',
  },
  {
    id: '196',
    url: {
      en: 'https://rjsf-team.github.io/react-jsonschema-form/docs/',
    },
    title: 'React JSON Schema Form',
    tags: ['表单'],
    content: '根据 JSON Schema 生成 React 表单，支持主题、自定义组件和校验',
    iconUrl: '/images/resource-icons/react-json-schema-form-9882b0.ico',
  },
  {
    id: '197',
    url: {
      en: 'https://jsonforms.io/',
    },
    title: 'JSON Forms',
    tags: ['表单'],
    content: '以 JSON Schema 与 UI Schema 声明表单，支持 React、Angular 和 Vue',
    iconUrl: '/images/resource-icons/json-forms-ad4504.ico',
  },
  {
    id: '198',
    url: {
      zh: 'https://www.form-create.com/',
    },
    title: 'FormCreate',
    tags: ['表单'],
    content: '通过 JSON 规则生成具有动态渲染、数据收集和校验能力的 Vue 表单',
    iconUrl: '/images/resource-icons/formcreate-a20746.png',
  },
  {
    id: '199',
    url: {
      en: 'https://vueform.com/',
    },
    title: 'Vueform',
    tags: ['表单', '校验'],
    content: 'Vue 表单框架，支持动态 schema、校验和可视化表单构建集成',
    iconUrl: '/images/resource-icons/vueform-3f9ff8.png',
  },
  {
    id: '200',
    url: {
      en: 'https://zod.dev/',
    },
    title: 'Zod',
    tags: ['校验'],
    content: '面向 TypeScript 的 schema 校验库，支持静态类型推导与运行时数据验证',
    iconUrl: '/images/resource-icons/zod-4fc9d1.png',
  },
  {
    id: '201',
    url: {
      en: 'https://github.com/jquense/yup',
    },
    title: 'Yup',
    tags: ['校验'],
    content: '用于对象 schema 解析、转换和异步校验的 JavaScript 库',
    iconUrl: '/images/resource-icons/yup-a1ca57.png',
  },
  {
    id: '202',
    url: {
      en: 'https://valibot.dev/',
    },
    title: 'Valibot',
    tags: ['校验'],
    content: '采用模块化 API 的 TypeScript schema 校验库，兼顾类型推导与包体积',
    iconUrl: '/images/resource-icons/valibot-7a9fc8.png',
  },
  {
    id: '203',
    url: {
      en: 'https://ajv.js.org/',
    },
    title: 'Ajv',
    tags: ['校验'],
    content: '支持 JSON Schema 和 JSON Type Definition 的 JavaScript 校验器',
    iconUrl: '/images/resource-icons/ajv-1293cb.ico',
  },
  {
    id: '204',
    url: {
      en: 'https://arktype.io/',
    },
    title: 'ArkType',
    tags: ['校验'],
    content: '使用接近 TypeScript 的语法定义运行时校验规则并推导类型',
    iconUrl: '/images/resource-icons/arktype-4c009d.svg',
  },
  {
    id: '205',
    url: {
      en: 'https://docs.superstructjs.org/',
    },
    title: 'Superstruct',
    tags: ['校验'],
    content: '通过可组合的数据结构定义与校验 JavaScript 运行时数据',
    iconUrl: '/images/resource-icons/superstruct-1c9d64.jpg',
  },
  {
    id: '206',
    url: {
      en: 'https://vestjs.dev/',
    },
    title: 'Vest',
    tags: ['表单', '校验'],
    content: '以类似单元测试的声明方式组织表单校验，支持逐字段与异步校验',
    iconUrl: '/images/resource-icons/vest-3a528a.ico',
  },
  {
    id: '207',
    url: {
      en: 'https://conform.guide/',
    },
    title: 'Conform',
    tags: ['表单', '校验'],
    content: '基于 Web 标准和渐进增强的 React 表单校验方案，支持服务端协同',
    iconUrl: '/images/resource-icons/conform-376c13.jpg',
  },
  {
    id: '208',
    url: {
      en: 'https://superforms.rocks/',
    },
    title: 'Superforms',
    tags: ['表单', '校验'],
    content: '面向 SvelteKit 的表单处理方案，连接 schema 校验、客户端状态和服务端提交',
    iconUrl: '/images/resource-icons/superforms-ef8374.png',
  },
  {
    id: '209',
    url: {
      en: 'https://final-form.org/react',
    },
    title: 'React Final Form',
    tags: ['表单', '校验'],
    content: '基于订阅机制的 React 表单状态管理库，可组合接入校验和字段组件',
    iconUrl: '/images/resource-icons/react-final-form-ac3a33.ico',
  },
  {
    id: '259',
    url: {
      en: 'https://reglejs.dev/',
    },
    title: 'Regle',
    tags: ['表单', '校验'],
    content: '类型安全、基于模型的 Vue 表单校验库，提供无头组合式 API',
    iconUrl: '/images/resource-icons/regle-02d55f.ico',
  },
  {
    id: '260',
    url: {
      en: 'https://formly.dev/',
    },
    title: 'Angular Formly',
    tags: ['表单'],
    content: 'Angular 的动态表单库，可依据 JSON 配置生成表单并接入不同 UI 组件',
    iconUrl: '/images/resource-icons/angular-formly-3e93cc.png',
  },
  {
    id: '261',
    url: {
      en: 'https://surveyjs.io/form-library',
    },
    title: 'SurveyJS Form Library',
    tags: ['表单', '问卷'],
    content: '根据 JSON 定义生成问卷与动态表单的 JavaScript 库，支持多种前端框架',
    iconUrl: '/images/resource-icons/surveyjs-form-library-9f09dd.ico',
  },
  {
    id: '262',
    url: {
      en: 'https://uniforms.tools/',
    },
    title: 'uniforms',
    tags: ['表单'],
    content: '支持多种 schema 和主题的 React 动态表单库',
    iconUrl: '/images/resource-icons/uniforms-238e6c.png',
  },
  {
    id: '263',
    url: {
      en: 'https://joi.dev/',
    },
    title: 'Joi',
    tags: ['校验'],
    content: '以声明式 schema 定义 JavaScript 数据规则，支持字段关联与条件校验',
    iconUrl: '/images/resource-icons/joi-8291f7.png',
  },
  {
    id: '264',
    url: {
      en: 'https://github.com/validatorjs/validator.js',
    },
    title: 'validator.js',
    tags: ['校验'],
    content: '提供邮箱、URL、日期等字符串校验与清理能力的 JavaScript 库',
    iconUrl: '/images/resource-icons/validator-js-109e35.ico',
  },
] as const satisfies readonly Resource[]

export default resources
