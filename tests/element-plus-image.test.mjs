import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

const sourceUrl = import.meta.resolve('element-plus/es/components/image/src/image.vue_vue_type_script_setup_true_lang.mjs')

async function createImageObserverCallback() {
  const source = ts.createSourceFile('image.mjs', await readFile(new URL(sourceUrl), 'utf8'), ts.ScriptTarget.Latest, true)
  const callbacks = []
  function visit(node) {
    if (ts.isCallExpression(node) && node.expression.getText(source) === 'useIntersectionObserver'
      && node.arguments[0]?.getText(source) === 'container') {
      callbacks.push(node.arguments[1])
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  assert.equal(callbacks.length, 1, '测试必须调用 ElImage 容器实际注册的观察回调')
  const loads = []
  const callback = runInNewContext(`(${callbacks[0].getText(source)})`, {
    lazyLoadHandler: isIntersecting => loads.push(isIntersecting),
  })
  return { callback, loads }
}

for (const [name, sequence, shouldLoad] of [
  [
    '同批先离开后进入视口仍触发加载',
    [false, true],
    true,
  ],
  [
    '同批短暂进入后离开视口仍触发加载',
    [true, false],
    true,
  ],
  [
    '同批全部在视口外不触发加载',
    [false, false],
    false,
  ],
  [
    '单次进入视口触发加载',
    [true],
    true,
  ],
]) {
  test(name, async () => {
    const { callback, loads } = await createImageObserverCallback()
    const target = {}
    callback(sequence.map(isIntersecting => ({ target, isIntersecting })))
    assert.deepEqual(loads, [shouldLoad])
  })
}
