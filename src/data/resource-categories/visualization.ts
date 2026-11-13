import type { Resource } from '../resource-types'

const resources = [
  {
    id: '153',
    url: {
      en: 'https://echarts.apache.org/en/',
    },
    title: 'Apache ECharts',
    tags: ['图表'],
    content: 'Apache 的交互式数据可视化库，提供常见统计图表与 Canvas、SVG 渲染',
    iconUrl: '/images/resource-icons/apache-echarts-ac91db.ico',
  },
  {
    id: '154',
    url: {
      en: 'https://d3js.org/',
    },
    title: 'D3',
    tags: ['图表'],
    content: '用于定制数据可视化的 JavaScript 工具集，覆盖数据映射、形状、交互和布局',
    iconUrl: '/images/resource-icons/d3-bed7ab.png',
  },
  {
    id: '155',
    url: {
      en: 'https://www.chartjs.org/',
    },
    title: 'Chart.js',
    tags: ['图表'],
    content: '基于 Canvas 的图表库，提供响应式图表、动画和插件机制',
    iconUrl: '/images/resource-icons/chart-js-fe4a7e.ico',
  },
  {
    id: '156',
    url: {
      en: 'https://api.highcharts.com/highcharts/',
    },
    title: 'Highcharts',
    tags: ['图表'],
    content: '提供统计、金融、地图和甘特图等图表能力的 JavaScript 数据可视化库',
    iconUrl: '/images/resource-icons/highcharts-ed4d42.png',
  },
  {
    id: '157',
    url: {
      en: 'https://apexcharts.com/',
    },
    title: 'ApexCharts',
    tags: ['图表'],
    content: '提供响应式交互图表与多框架集成的 JavaScript 图表库',
    iconUrl: '/images/resource-icons/apexcharts-b072f3.png',
  },
  {
    id: '158',
    url: {
      en: 'https://recharts.github.io/',
    },
    title: 'Recharts',
    tags: ['图表'],
    content: '基于 React 组件和 SVG 的可组合图表库',
    iconUrl: '/images/resource-icons/recharts-002459.png',
  },
  {
    id: '159',
    url: {
      en: 'https://nivo.rocks/',
    },
    title: 'Nivo',
    tags: ['图表'],
    content: '基于 React 与 D3 的数据可视化组件，支持多种统计图与 SVG、Canvas 渲染',
    iconUrl: '/images/resource-icons/nivo-be8738.png',
  },
  {
    id: '160',
    url: {
      en: 'https://visx.airbnb.tech/',
    },
    title: 'visx',
    tags: ['图表'],
    content: 'Airbnb 的 React 可视化组件集合，结合 D3 计算能力构建定制图表',
    iconUrl: '/images/resource-icons/visx-f3b8db.png',
  },
  {
    id: '161',
    url: {
      en: 'https://nearform.com/open-source/victory/',
    },
    title: 'Victory',
    tags: ['图表'],
    content: '用于 React 的可组合图表组件库，提供区域图、散点图等图表',
    iconUrl: '/images/resource-icons/victory-2e9b5a.ico',
  },
  {
    id: '162',
    url: {
      en: 'https://vega.github.io/vega/',
    },
    title: 'Vega',
    tags: ['图表'],
    content: '通过声明式 JSON 规格描述交互可视化，并使用 Canvas 或 SVG 生成视图',
    iconUrl: '/images/resource-icons/vega-06bf3f.ico',
  },
  {
    id: '163',
    url: {
      en: 'https://vega.github.io/vega-lite/',
    },
    title: 'Vega-Lite',
    tags: ['图表'],
    content: '以简洁声明式语法描述统计图形，自动生成坐标轴、图例与交互',
    iconUrl: '/images/resource-icons/vega-lite-81cbb0.ico',
  },
  {
    id: '164',
    url: {
      en: 'https://observablehq.github.io/plot/',
    },
    title: 'Observable Plot',
    tags: ['图表'],
    content: '由 D3 团队维护、使用简洁代码创建探索性数据图表的 JavaScript 库',
    iconUrl: '/images/resource-icons/observable-plot-6d4da4.png',
  },
  {
    id: '165',
    url: {
      en: 'https://plotly.com/javascript/',
    },
    title: 'Plotly.js',
    tags: ['图表'],
    content: '支持统计、科学、金融和三维图表的声明式 JavaScript 图表库',
    iconUrl: '/images/resource-icons/plotly-js-6c50ca.ico',
  },
  {
    id: '166',
    url: {
      zh: 'https://g2.antv.antgroup.com/',
    },
    title: 'AntV G2',
    tags: ['图表'],
    content: '蚂蚁 AntV 的图形语法可视化引擎，用声明式配置组合统计图表',
    iconUrl: '/images/resource-icons/antv-g2-adf51f.png',
  },
  {
    id: '167',
    url: {
      zh: 'https://g6.antv.antgroup.com/',
    },
    title: 'AntV G6',
    tags: ['图表'],
    content: '蚂蚁 AntV 的关系图可视化引擎，提供图布局、交互与节点定制',
    iconUrl: '/images/resource-icons/antv-g6-c2d8bd.png',
  },
  {
    id: '168',
    url: {
      zh: 'https://x6.antv.antgroup.com/',
    },
    title: 'AntV X6',
    tags: ['流程图'],
    content: '基于 SVG 与 HTML 的图编辑引擎，可构建流程图、DAG 和数据血缘图',
    iconUrl: '/images/resource-icons/antv-x6-f618da.png',
  },
  {
    id: '169',
    url: {
      zh: 'https://f2.antv.antgroup.com/',
    },
    title: 'AntV F2',
    tags: ['图表'],
    content: '面向移动场景的图形语法可视化引擎，提供图表、动画和交互扩展',
    iconUrl: '/images/resource-icons/antv-f2-890ce7.png',
  },
  {
    id: '170',
    url: {
      en: 'https://www.visactor.io/vchart/',
    },
    title: 'VisActor VChart',
    tags: ['图表'],
    content: '字节跳动 VisActor 的跨端图表库，覆盖常见二维和三维统计图表',
    iconUrl: '/images/resource-icons/visactor-vchart-7c4394.png',
  },
  {
    id: '171',
    url: {
      en: 'https://unovis.dev/',
    },
    title: 'Unovis',
    tags: ['图表'],
    content: '模块化数据可视化组件库，支持 React、Vue、Angular、Svelte 和原生 JavaScript',
    iconUrl: '/images/resource-icons/unovis-7ffafe.svg',
  },
  {
    id: '172',
    url: {
      en: 'https://github.com/leeoniya/uPlot',
    },
    title: 'uPlot',
    tags: ['图表'],
    content: '侧重性能与小体积的 Canvas 图表库，适用于时间序列、折线和金融数据',
    iconUrl: '/images/resource-icons/uplot-22ab20.png',
  },
  {
    id: '173',
    url: {
      en: 'https://tradingview.github.io/lightweight-charts/',
    },
    title: 'Lightweight Charts',
    tags: ['图表', '金融'],
    content: 'TradingView 的轻量交互式金融图表库，支持系列、指标和插件扩展',
    iconUrl: '/images/resource-icons/lightweight-charts-6fd382.png',
  },
  {
    id: '174',
    url: {
      en: 'https://www.ag-grid.com/charts/',
    },
    title: 'AG Charts',
    tags: ['图表'],
    content: '支持 JavaScript、React、Vue 和 Angular 的图表库，提供社区版与企业版',
    iconUrl: '/images/resource-icons/ag-charts-e2b1fc.png',
  },
  {
    id: '175',
    url: {
      en: 'https://naver.github.io/billboard.js/',
    },
    title: 'billboard.js',
    tags: ['图表'],
    content: 'NAVER 基于 D3 的可复用图表库，提供 SVG 和 Canvas 渲染',
    iconUrl: '/images/resource-icons/billboard-js-8f459c.ico',
  },
  {
    id: '176',
    url: {
      en: 'https://js.cytoscape.org/',
    },
    title: 'Cytoscape.js',
    tags: ['关系图'],
    content: '用于关系网络可视化与分析的 JavaScript 图论库',
    iconUrl: '/images/resource-icons/cytoscape-js-836195.png',
  },
  {
    id: '177',
    url: {
      en: 'https://www.sigmajs.org/',
    },
    title: 'Sigma.js',
    tags: ['关系图'],
    content: '基于 WebGL 与 Graphology 的大规模交互关系图可视化库',
    iconUrl: '/images/resource-icons/sigma-js-34039c.png',
  },
  {
    id: '178',
    url: {
      en: 'https://threejs.org/',
    },
    title: 'Three.js',
    tags: ['3D', 'WebGL'],
    content: '用于构建浏览器三维场景的 JavaScript 库，提供模型、材质、灯光和渲染能力',
    iconUrl: '/images/resource-icons/three-js-86f64e.ico',
  },
  {
    id: '179',
    url: {
      en: 'https://www.babylonjs.com/',
    },
    title: 'Babylon.js',
    tags: ['3D', 'WebGL'],
    content: '支持 WebGL、WebGPU 与丰富三维工具链的开源 Web 3D 引擎',
    iconUrl: '/images/resource-icons/babylon-js-1d5b89.ico',
  },
  {
    id: '180',
    url: {
      en: 'https://pixijs.com/',
    },
    title: 'PixiJS',
    tags: ['2D', '图形'],
    content: '基于 WebGL 和 WebGPU 的二维图形渲染引擎，可构建游戏与交互内容',
    iconUrl: '/images/resource-icons/pixijs-8ef5d1.png',
  },
  {
    id: '181',
    url: {
      en: 'https://r3f.docs.pmnd.rs/',
    },
    title: 'React Three Fiber',
    tags: ['3D', 'react'],
    content: 'Three.js 的 React 渲染器，以组件方式构建可交互的三维场景',
    iconUrl: '/images/resource-icons/react-three-fiber-d51783.ico',
  },
  {
    id: '248',
    url: {
      en: 'https://leafletjs.com/reference-1.9.4.html',
    },
    title: 'Leaflet',
    tags: ['地图', 'GIS'],
    content: '轻量的交互地图 JavaScript 库，支持图层、标记、移动设备和插件扩展；入口为 1.9 稳定版文档',
    iconUrl: '/images/resource-icons/leaflet-60e870.svg',
  },
  {
    id: '249',
    url: {
      en: 'https://maplibre.org/maplibre-gl-js/docs/',
    },
    title: 'MapLibre GL JS',
    tags: ['地图', 'GIS'],
    content: '基于 WebGL 的开源地图渲染库，支持矢量瓦片、样式与交互',
    iconUrl: '/images/resource-icons/maplibre-gl-js-7f5bb2.ico',
  },
  {
    id: '250',
    url: {
      en: 'https://openlayers.org/',
    },
    title: 'OpenLayers',
    tags: ['地图', 'GIS'],
    content: '支持地图瓦片、矢量数据和多种地理格式的开源 Web 地图库',
    iconUrl: '/images/resource-icons/openlayers-ad044b.svg',
  },
  {
    id: '251',
    url: {
      en: 'https://cesium.com/platform/cesiumjs/',
    },
    title: 'CesiumJS',
    tags: ['地图', 'GIS'],
    content: '用于三维地球和地理空间可视化的 JavaScript 库，支持 3D Tiles',
    iconUrl: '/images/resource-icons/cesiumjs-1ed3d2.svg',
  },
  {
    id: '252',
    url: {
      en: 'https://docs.mapbox.com/mapbox-gl-js/',
    },
    title: 'Mapbox GL JS',
    tags: ['地图', 'GIS'],
    content: '用于交互式矢量地图与三维地图的 WebGL 渲染库',
    iconUrl: '/images/resource-icons/mapbox-gl-js-4cf2f7.png',
  },
  {
    id: '253',
    url: {
      en: 'https://deck.gl/',
    },
    title: 'deck.gl',
    tags: ['地图', 'GIS'],
    content: '以可组合 GPU 图层展示大规模地理和空间数据的可视化框架',
    iconUrl: '/images/resource-icons/deck-gl-e704a9.png',
  },
  {
    id: '254',
    url: {
      en: 'https://reactflow.dev/',
    },
    title: 'React Flow',
    tags: ['流程图'],
    content: '用于构建节点编辑器、工作流与交互关系图的 React 库',
    iconUrl: '/images/resource-icons/react-flow-a7b58e.ico',
  },
  {
    id: '255',
    url: {
      en: 'https://vueflow.dev/',
    },
    title: 'Vue Flow',
    tags: ['流程图'],
    content: '用于构建可交互节点、连线和流程编辑界面的 Vue 库',
    iconUrl: '/images/resource-icons/vue-flow-7eb401.png',
  },
  {
    id: '256',
    url: {
      zh: 'https://site.logic-flow.cn/',
    },
    title: 'LogicFlow',
    tags: ['流程图'],
    content: '滴滴开源的流程图编辑框架，支持节点定制、插件和业务流程编排',
    iconUrl: '/images/resource-icons/logicflow-51b720.png',
  },
  {
    id: '257',
    url: {
      en: 'https://mermaid.js.org/',
    },
    title: 'Mermaid',
    tags: ['流程图'],
    content: '通过文本语法生成流程图、时序图、关系图和其他图形的 JavaScript 工具',
    iconUrl: '/images/resource-icons/mermaid-1356a5.png',
  },
  {
    id: '258',
    url: {
      en: 'https://www.jointjs.com/',
    },
    title: 'JointJS',
    tags: ['流程图'],
    content: '基于 SVG 的 JavaScript 图形与流程编辑库，提供社区版及商业扩展',
    iconUrl: '/images/resource-icons/jointjs-404f04.png',
  },
  {
    id: '265',
    url: {
      en: 'https://tresjs.org/',
    },
    title: 'TresJS',
    tags: ['3D', 'vue'],
    content: '在 Three.js 之上以 Vue 组件和声明式方式构建交互三维场景',
    iconUrl: '/images/resource-icons/tresjs-796bc3.ico',
  },
  {
    id: '266',
    url: {
      en: 'https://github.com/galacean/engine',
    },
    title: 'Galacean Engine',
    tags: ['3D', '2D'],
    content: '蚂蚁开源的 TypeScript 交互引擎，支持二维、三维、动画和物理效果',
    iconUrl: '/images/resource-icons/galacean-engine-df3954.ico',
  },
  {
    id: '267',
    url: {
      en: 'https://aframe.io/',
    },
    title: 'A-Frame',
    tags: ['3D', 'AR'],
    content: '使用 HTML 和实体组件模型构建 Web 三维、AR 和 VR 体验的框架',
    iconUrl: '/images/resource-icons/a-frame-90820c.png',
  },
  {
    id: '268',
    url: {
      en: 'https://github.com/ant-design/ant-design-charts',
    },
    title: 'Ant Design Charts',
    tags: ['图表'],
    content: '基于 AntV 可视化引擎的 React 图表组件，支持统计图、关系图与地图',
    iconUrl: '/images/resource-icons/ant-design-charts-34bdd7.ico',
  },
  {
    id: '269',
    url: {
      en: 'https://github.com/antvis/G2Plot',
    },
    title: 'AntV G2Plot',
    tags: ['图表'],
    content: '基于 G2 的开箱即用统计图表库；属于既有 G2 4 生态',
    iconUrl: '/images/resource-icons/antv-g2plot-428185.ico',
  },
  {
    id: '270',
    url: {
      en: 'https://github.com/antvis/L7',
    },
    title: 'AntV L7',
    tags: ['地图', 'GIS'],
    content: '基于 WebGL 的大规模地理空间数据可视化引擎，可组合点线面等图层',
    iconUrl: '/images/resource-icons/antv-l7-2a6851.ico',
  },
  {
    id: '271',
    url: {
      zh: 'https://lbs.amap.com/api/javascript-api-v2/summary',
    },
    title: '高德地图 JS API',
    tags: ['地图', 'GIS'],
    content: '提供地图展示、地理数据、搜索与路线等能力的网页地图开发接口',
    iconUrl: '/images/resource-icons/js-api-ae4fb8.ico',
  },
  {
    id: '272',
    url: {
      zh: 'https://lbsyun.baidu.com/docs/jsapi?title=jsapi4/index',
    },
    title: '百度地图 JSAPI',
    tags: ['地图', 'GIS'],
    content: '百度地图的网页地图开发接口，支持地图展示、交互、覆盖物和位置服务',
    iconUrl: '/images/resource-icons/jsapi-b81e75.ico',
  },
  {
    id: '273',
    url: {
      zh: 'https://lbs.qq.com/webApi/javascriptGL/glGuide/glOverview',
    },
    title: '腾讯地图 JavaScript API GL',
    tags: ['地图', 'GIS'],
    content: '腾讯位置服务基于 WebGL 的网页地图开发接口，支持地图与覆盖物交互',
    iconUrl: '/images/resource-icons/javascript-api-gl-47955a.ico',
  },
  {
    id: '274',
    url: {
      en: 'https://gojs.net/latest/',
    },
    title: 'GoJS',
    tags: ['流程图'],
    content: '用于构建交互流程图、组织图、业务模型与定制节点编辑器的图形库',
    iconUrl: '/images/resource-icons/gojs-032837.ico',
  },
  {
    id: '275',
    url: {
      en: 'https://retejs.org/',
    },
    title: 'Rete.js',
    tags: ['流程图'],
    content: '用于可视化编程的 TypeScript 节点编辑框架，支持图处理和多框架集成',
    iconUrl: '/images/resource-icons/rete-js-d8ef60.ico',
  },
  {
    id: '276',
    url: {
      en: 'https://bpmn.io/toolkit/bpmn-js/',
    },
    title: 'bpmn-js',
    tags: ['流程图'],
    content: '可嵌入网页的 BPMN 2.0 流程图查看与编辑工具集',
    iconUrl: '/images/resource-icons/bpmn-js-996eb9.png',
  },
  {
    id: '277',
    url: {
      en: 'https://maxgraph.github.io/maxGraph/',
    },
    title: 'maxGraph',
    tags: ['流程图'],
    content: 'mxGraph 的 TypeScript 后继库，用于显示、定制和交互编辑矢量图形',
    iconUrl: '/images/resource-icons/maxgraph-81651b.png',
  },
  {
    id: '278',
    url: {
      en: 'https://github.com/jgraph/mxgraph',
    },
    title: 'mxGraph',
    tags: ['流程图'],
    content: '传统客户端 JavaScript 图形编辑库；公开版本已结束维护，可用于查询存量项目',
    iconUrl: '/images/resource-icons/mxgraph-e37709.ico',
  },
  {
    id: '284',
    url: {
      en: 'https://svelteflow.dev/',
    },
    title: 'Svelte Flow',
    tags: ['流程图'],
    content: '用于构建节点编辑器、流程和可交互关系图的 Svelte 库',
    iconUrl: '/images/resource-icons/svelte-flow-4458b0.ico',
  },
  {
    id: '286',
    url: {
      en: 'https://konvajs.org/',
    },
    title: 'Konva',
    tags: ['2D', '图形'],
    content: '基于 Canvas 场景图构建交互二维图形，支持事件、拖动、变换和动画',
    iconUrl: '/images/resource-icons/konva-a58150.ico',
  },
  {
    id: '287',
    url: {
      en: 'https://www.fabricjs.com/',
    },
    title: 'Fabric.js',
    tags: ['2D', '图形'],
    content: '为 Canvas 提供交互对象模型、文本编辑、SVG 转换和动画能力的图形库',
    iconUrl: '/images/resource-icons/fabric-js-6d8134.ico',
  },
  {
    id: '288',
    url: {
      en: 'https://p5js.org/',
    },
    title: 'p5.js',
    tags: ['2D', '图形'],
    content: '面向创意编程的 JavaScript 图形库，可创建绘画、动画和交互作品',
    iconUrl: '/images/resource-icons/p5-js-8c8feb.png',
  },
] as const satisfies readonly Resource[]

export default resources
