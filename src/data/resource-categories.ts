export const resourceCategories = [
  { id: 'frameworks', label: '框架', count: 46 },
  { id: 'components', label: '组件库', count: 46 },
  { id: 'data', label: '数据管理', count: 23 },
  { id: 'cross-platform', label: '跨端', count: 14 },
  { id: 'runtimes', label: '运行时', count: 5 },
  { id: 'utilities', label: '工具库', count: 2 },
  { id: 'visualization', label: '可视化', count: 58 },
  { id: 'animation', label: '动画', count: 12 },
  { id: 'forms', label: '表单', count: 27 },
  { id: 'editors', label: '网页编辑器', count: 21 },
  { id: 'i18n', label: '国际化', count: 11 },
  { id: 'pwa', label: 'PWA', count: 8 },
  { id: 'css', label: 'CSS', count: 51 },
  { id: 'build', label: '构建', count: 36 },
  { id: 'testing', label: '测试', count: 31 },
  { id: 'quality', label: '代码质量', count: 20 },
] as const

export type ResourceCategoryId = typeof resourceCategories[number]['id']
