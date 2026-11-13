import type { ResourceCategoryId } from './resource-categories'
import type { Resource } from './resource-types'

const loaders = {
  'frameworks': () => import('./resource-categories/frameworks'),
  'components': () => import('./resource-categories/components'),
  'data': () => import('./resource-categories/data'),
  'cross-platform': () => import('./resource-categories/cross-platform'),
  'runtimes': () => import('./resource-categories/runtimes'),
  'utilities': () => import('./resource-categories/utilities'),
  'visualization': () => import('./resource-categories/visualization'),
  'animation': () => import('./resource-categories/animation'),
  'forms': () => import('./resource-categories/forms'),
  'editors': () => import('./resource-categories/editors'),
  'i18n': () => import('./resource-categories/i18n'),
  'pwa': () => import('./resource-categories/pwa'),
  'css': () => import('./resource-categories/css'),
  'build': () => import('./resource-categories/build'),
  'testing': () => import('./resource-categories/testing'),
  'quality': () => import('./resource-categories/quality'),
} satisfies Record<ResourceCategoryId, () => Promise<{ default: readonly Resource[] }>>

export async function loadResourceCategory(id: ResourceCategoryId): Promise<readonly Resource[]> {
  return (await loaders[id]()).default
}
