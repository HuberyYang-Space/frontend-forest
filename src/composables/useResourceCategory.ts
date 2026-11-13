import type { Ref } from 'vue'
import type { ResourceCategoryId } from '~/data/resource-categories'
import type { Resource } from '~/data/resource-types'
import { onScopeDispose, readonly, ref, shallowReadonly, shallowRef, watch } from 'vue'

export function useResourceCategory(
  activeId: Readonly<Ref<ResourceCategoryId>>,
  loadCategory: (id: ResourceCategoryId) => Promise<readonly Resource[]>,
) {
  const resources = shallowRef<readonly Resource[]>([])
  const status = ref<'loading' | 'ready' | 'error'>('loading')
  const errorMessage = ref('')
  let requestId = 0
  let disposed = false

  async function load() {
    if (disposed)
      return

    const currentRequest = ++requestId
    resources.value = []
    status.value = 'loading'
    errorMessage.value = ''

    try {
      const result = await loadCategory(activeId.value)
      if (currentRequest === requestId && !disposed) {
        resources.value = result
        status.value = 'ready'
      }
    }
    catch {
      if (currentRequest === requestId && !disposed) {
        status.value = 'error'
        errorMessage.value = '该分类暂时无法加载，请重试或重新载入页面。'
      }
    }
  }

  watch(activeId, load, { immediate: true, flush: 'sync' })
  onScopeDispose(() => {
    disposed = true
  })

  return {
    resources: shallowReadonly(resources),
    status: readonly(status),
    errorMessage: readonly(errorMessage),
    retry: load,
  }
}
