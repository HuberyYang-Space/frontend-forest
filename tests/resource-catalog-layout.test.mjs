import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { compileStyle, compileTemplate, parse } from 'vue/compiler-sfc'

test('目录实际根容器的持久标签内容区保留一屏高度', async () => {
  const filename = 'ResourceCatalog.vue'
  const source = await readFile(new URL('../src/components/ResourceCatalog.vue', import.meta.url), 'utf8')
  const { descriptor } = parse(source, { filename })
  const { ast, errors } = compileTemplate({ source: descriptor.template.content, filename, id: 'catalog' })
  assert.deepEqual(errors, [])
  const root = ast.children.find(node => node.type === 1)
  assert.equal(root.tag, 'section')
  const classes = root.props.find(prop => prop.type === 6 && prop.name === 'class')?.value?.content.split(/\s+/u)
  assert.ok(classes?.includes('resource_catalog'), '占位样式必须关联实际目录根容器')
  assert.ok(root.children.some(node => node.type === 1 && node.tag === 'el-tabs'), '标签页必须位于该根容器内')

  const css = descriptor.styles.map(style => compileStyle({
    source: style.content,
    filename,
    id: 'data-v-catalog',
    scoped: style.scoped,
  }).code).join('\n')
  assert.match(css, /\.resource_catalog\[data-v-catalog\]\s+\.el-tabs__content\s*\{[^}]*\bmin-height:\s*100vh\s*[;}]/u, '高度必须作用于持久内容区，覆盖空内容、加载和失败阶段')
})
