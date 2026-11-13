import type { Resource } from '../resource-types'

const resources = [
  {
    id: '228',
    url: {
      en: 'https://tiptap.dev/',
    },
    title: 'Tiptap',
    tags: ['富文本'],
    content: '基于 ProseMirror 的无头富文本编辑器框架，支持扩展与协同编辑集成',
    iconUrl: '/images/resource-icons/tiptap-ff7c41.png',
  },
  {
    id: '229',
    url: {
      en: 'https://lexical.dev/',
    },
    title: 'Lexical',
    tags: ['富文本'],
    content: '模块化文本编辑器框架，可扩展列表、链接、表格等内容能力',
    iconUrl: '/images/resource-icons/lexical-e77f54.ico',
  },
  {
    id: '230',
    url: {
      en: 'https://prosemirror.net/',
    },
    title: 'ProseMirror',
    tags: ['富文本'],
    content: '基于文档 schema、状态与事务构建富文本编辑器的模块化工具集',
    iconUrl: '/images/resource-icons/prosemirror-8c3999.ico',
  },
  {
    id: '231',
    url: {
      en: 'https://docs.slatejs.org/',
    },
    title: 'Slate',
    tags: ['富文本'],
    content: '可高度定制的富文本编辑器框架，官方仍标注 Beta 状态',
    iconUrl: '/images/resource-icons/slate-10ad4c.png',
  },
  {
    id: '232',
    url: {
      en: 'https://quilljs.com/',
    },
    title: 'Quill',
    tags: ['富文本'],
    content: '以 Delta 数据模型和模块扩展构建网页富文本编辑体验的编辑器',
    iconUrl: '/images/resource-icons/quill-8ead7a.ico',
  },
  {
    id: '233',
    url: {
      en: 'https://ckeditor.com/ckeditor-5/',
    },
    title: 'CKEditor 5',
    tags: ['富文本'],
    content: '具有模块化架构的富文本编辑器，支持多种编辑模式和协作扩展',
    iconUrl: '/images/resource-icons/ckeditor-5-0684b1.png',
  },
  {
    id: '234',
    url: {
      en: 'https://www.tiny.cloud/docs/tinymce/latest/',
    },
    title: 'TinyMCE',
    tags: ['富文本'],
    content: '提供工具栏、格式化、媒体和插件体系的网页富文本编辑器',
    iconUrl: '/images/resource-icons/tinymce-3d228c.png',
  },
  {
    id: '235',
    url: {
      en: 'https://editorjs.io/',
    },
    title: 'Editor.js',
    tags: ['富文本'],
    content: '以块为单位编辑内容并输出结构化 JSON 的网页编辑器',
    iconUrl: '/images/resource-icons/editor-js-394099.png',
  },
  {
    id: '236',
    url: {
      zh: 'https://www.wangeditor.com/',
    },
    title: 'wangEditor',
    tags: ['富文本'],
    content: '开箱即用的 Web 富文本编辑器，提供 Vue 和 React 集成',
    iconUrl: '/images/resource-icons/wangeditor-68c2d0.ico',
  },
  {
    id: '237',
    url: {
      en: 'https://milkdown.dev/',
    },
    title: 'Milkdown',
    tags: ['Markdown'],
    content: '基于 ProseMirror 和 remark 的插件式 Markdown 所见即所得编辑器',
    iconUrl: '/images/resource-icons/milkdown-6d925e.ico',
  },
  {
    id: '238',
    url: {
      zh: 'https://b3log.org/vditor/',
    },
    title: 'Vditor',
    tags: ['Markdown'],
    content: '浏览器端 Markdown 编辑器，支持所见即所得、即时渲染与分屏预览',
    iconUrl: '/images/resource-icons/vditor-e7335c.png',
  },
  {
    id: '239',
    url: {
      en: 'https://ui.toast.com/tui-editor/',
    },
    title: 'TOAST UI Editor',
    tags: ['Markdown'],
    content: '支持 Markdown 和所见即所得模式切换的网页内容编辑器',
    iconUrl: '/images/resource-icons/toast-ui-editor-d08cec.ico',
  },
  {
    id: '240',
    url: {
      en: 'https://imzbf.github.io/md-editor-v3/en-US/',
    },
    title: 'MdEditorV3',
    tags: ['Markdown'],
    content: '面向 Vue 3 的 Markdown 编辑与预览组件，支持主题和扩展配置',
    iconUrl: '/images/resource-icons/mdeditorv3-c7f4a3.ico',
  },
  {
    id: '241',
    url: {
      en: 'https://bytemd.js.org/',
    },
    title: 'ByteMD',
    tags: ['Markdown'],
    content: '基于 Svelte 构建、可用于多框架的插件式 Markdown 编辑器组件',
    iconUrl: '/images/resource-icons/bytemd-c75165.png',
  },
  {
    id: '242',
    url: {
      en: 'https://mdxeditor.dev/',
    },
    title: 'MDXEditor',
    tags: ['Markdown'],
    content: 'React 的 Markdown 富文本编辑组件，支持以自然编辑交互维护 Markdown 文档',
    iconUrl: '/images/resource-icons/mdxeditor-afe329.ico',
  },
  {
    id: '243',
    url: {
      en: 'https://www.blocknotejs.org/',
    },
    title: 'BlockNote',
    tags: ['富文本'],
    content: '基于块的 React 富文本编辑器，提供接近文档应用的编辑体验',
    iconUrl: '/images/resource-icons/blocknote-5b751e.png',
  },
  {
    id: '244',
    url: {
      en: 'https://platejs.org/',
    },
    title: 'Plate',
    tags: ['富文本'],
    content: '用于构建 React 富文本编辑器的框架、插件和组件体系',
    iconUrl: '/images/resource-icons/plate-a7cd5d.png',
  },
  {
    id: '245',
    url: {
      en: 'https://github.com/remirror/remirror',
    },
    title: 'Remirror',
    tags: ['富文本'],
    content: '基于 ProseMirror 的 React 编辑器工具集，支持扩展和协同编辑场景',
    iconUrl: '/images/resource-icons/remirror-8ae205.ico',
  },
  {
    id: '246',
    url: {
      en: 'https://code.haverbeke.berlin/codemirror/dev',
    },
    title: 'CodeMirror',
    tags: ['代码编辑'],
    content: '可嵌入网页的模块化代码编辑器，支持语法、语言服务和扩展配置',
    iconUrl: '/images/resource-icons/codemirror-a83ad9.png',
  },
  {
    id: '247',
    url: {
      en: 'https://microsoft.github.io/monaco-editor/',
    },
    title: 'Monaco Editor',
    tags: ['代码编辑'],
    content: '源自 VS Code 的可嵌入浏览器代码编辑库，提供语言服务与编辑能力',
    iconUrl: '/images/resource-icons/monaco-editor-72f169.png',
  },
  {
    id: '283',
    url: {
      en: 'https://ace.c9.io/',
    },
    title: 'Ace',
    tags: ['代码编辑'],
    content: '可嵌入网页的 JavaScript 代码编辑器，提供语法高亮、补全和键盘绑定',
    iconUrl: '/images/resource-icons/ace-a467da.png',
  },
] as const satisfies readonly Resource[]

export default resources
