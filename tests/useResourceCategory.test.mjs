import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { test } from 'node:test'
import { effectScope, nextTick, ref } from 'vue'

const source = new URL('../src/composables/useResourceCategory.ts', import.meta.url)
const framework = [
  {
    id: '001',
    title: 'Vue.js',
    content: '框架',
    tags: ['vue'],
    url: { en: 'https://vuejs.org/' },
    iconUrl: '/images/resource-icons/original-001.svg',
  },
]
const component = [
  {
    id: '085',
    title: 'Vuetify',
    content: '组件库',
    tags: ['vue'],
    url: { en: 'https://vuetifyjs.com/' },
    iconUrl: '/images/resource-icons/vuetify.svg',
  },
]

async function setup(t) {
  assert.ok(existsSync(source), '需要按分类加载的响应式状态接口')
  const { useResourceCategory } = await import(source.href)
  const activeId = ref('frameworks')
  const requests = []
  const scope = effectScope()
  t.after(() => scope.stop())
  const state = scope.run(() => useResourceCategory(activeId, (id) => {
    const deferred = Promise.withResolvers()
    requests.push({ id, ...deferred })
    return deferred.promise
  }))
  return { activeId, requests, scope, state }
}

async function settle() {
  await Promise.resolve()
  await nextTick()
}

test('立即加载默认分类并公开完整成功结果', async (t) => {
  const { requests, state } = await setup(t)
  assert.deepEqual(requests.map(r => r.id), ['frameworks'])
  assert.equal(state.status.value, 'loading')
  assert.deepEqual(state.resources.value, [])
  requests[0].resolve(framework)
  await settle()
  assert.equal(state.status.value, 'ready')
  assert.deepEqual(state.resources.value, framework)
  assert.equal(state.errorMessage.value, '')
})

test('选择变化立即清空旧卡片，加载完成后展示新分类', async (t) => {
  const { requests, activeId, state } = await setup(t)
  requests[0].resolve(framework)
  await settle()
  activeId.value = 'components'
  await nextTick()
  assert.equal(state.status.value, 'loading')
  assert.deepEqual(state.resources.value, [])
  requests[1].resolve(component)
  await settle()
  assert.equal(state.status.value, 'ready')
  assert.deepEqual(state.resources.value, component)
})

test('b 先成功后 A 才成功，仍保留 B 的完整数据', async (t) => {
  const { requests, activeId, state } = await setup(t)
  activeId.value = 'components'
  await nextTick()
  requests[1].resolve(component)
  await settle()
  requests[0].resolve(framework)
  await settle()
  assert.equal(state.status.value, 'ready')
  assert.deepEqual(state.resources.value, component)
  assert.equal(state.errorMessage.value, '')
})

test('b 先成功后 A 才失败，仍保持 B 的成功状态', async (t) => {
  const { requests, activeId, state } = await setup(t)
  activeId.value = 'components'
  await nextTick()
  requests[1].resolve(component)
  await settle()
  requests[0].reject(new Error('旧 A 失败'))
  await settle()
  assert.equal(state.status.value, 'ready')
  assert.deepEqual(state.resources.value, component)
  assert.equal(state.errorMessage.value, '')
})

test('失败可重试，重试清除错误并恢复当前分类', async (t) => {
  const { requests, state } = await setup(t)
  requests[0].reject(new Error('网络失败'))
  await settle()
  assert.equal(state.status.value, 'error')
  assert.deepEqual(state.resources.value, [])
  assert.ok(state.errorMessage.value.length > 0)
  const retry = state.retry()
  assert.equal(state.status.value, 'loading')
  assert.equal(state.errorMessage.value, '')
  assert.deepEqual(requests.map(r => r.id), ['frameworks', 'frameworks'])
  requests[1].resolve(framework)
  await retry
  assert.equal(state.status.value, 'ready')
  assert.deepEqual(state.resources.value, framework)
})

for (const outcome of ['resolve', 'reject']) {
  test(`作用域销毁后的 ${outcome} 不再更新状态或启动重试`, async (t) => {
    const { requests, scope, state } = await setup(t)
    scope.stop()
    const before = { status: state.status.value, resources: state.resources.value, error: state.errorMessage.value }
    requests[0][outcome](outcome === 'resolve'
      ? framework
      : new Error('销毁后的失败'))
    await settle()
    assert.deepEqual({ status: state.status.value, resources: state.resources.value, error: state.errorMessage.value }, before)
    await state.retry()
    assert.equal(requests.length, 1)
  })
}
