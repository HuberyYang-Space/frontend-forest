import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { test } from 'node:test'

const dataRoot = new URL('../src/data/', import.meta.url)
const expected = [
  [
    'frameworks',
    '框架',
    46,
    '1,3,5-6,9-12,14-15,19,28-36,38-47,49-53,57-62,74,148-151',
  ],
  [
    'components',
    '组件库',
    46,
    '17,54-56,85-96,98-117,121-124,126-130,140',
  ],
  [
    'data',
    '数据管理',
    23,
    '2,4,7,63-73,75-81,83-84',
  ],
  [
    'cross-platform',
    '跨端',
    14,
    '8,13,16,97,131-139,142',
  ],
  ['runtimes', '运行时', 5, '18,144-147'],
  ['utilities', '工具库', 2, '48,82'],
  [
    'visualization',
    '可视化',
    58,
    '153-181,248-258,265-278,284,286-288',
  ],
  [
    'animation',
    '动画',
    12,
    '182-188,279-282,315',
  ],
  ['forms', '表单', 27, '189-209,259-264'],
  ['editors', '网页编辑器', 21, '228-247,283'],
  ['i18n', '国际化', 11, '210-220'],
  ['pwa', 'PWA', 8, '221-227,285'],
  [
    'css',
    'CSS',
    51,
    '118-120,125,289-314,316-336',
  ],
  [
    'build',
    '构建',
    36,
    '20-27,337-353,398-405,413-415',
  ],
  [
    'testing',
    '测试',
    31,
    '354-380,392-393,395,397',
  ],
  [
    'quality',
    '代码质量',
    20,
    '381-391,394,406-412,416',
  ],
]

function expandIds(ranges) {
  return ranges.split(',').flatMap((range) => {
    const [start, end = start] = range.split('-').map(Number)
    return Array.from({ length: end - start + 1 }, (_, i) => String(start + i).padStart(3, '0'))
  })
}

async function readCatalog() {
  const metadata = new URL('resource-categories.ts', dataRoot)
  assert.ok(existsSync(metadata), '需要独立的分类元数据接口')
  const { resourceCategories } = await import(metadata.href)
  const modules = await Promise.all(resourceCategories.map(async ({ id }) => {
    const { default: resources } = await import(new URL(`resource-categories/${id}.ts`, dataRoot).href)
    return { id, resources }
  }))
  return { resourceCategories, modules }
}

test('分类名称、标识和数量符合确认的 16 类顺序', async () => {
  const { resourceCategories } = await readCatalog()
  assert.deepEqual(resourceCategories, expected.map(([id, label, count]) => ({ id, label, count })))
})

test('模块集合与元数据一致，各分类实际数量匹配', async () => {
  const { resourceCategories, modules } = await readCatalog()
  const files = await readdir(new URL('resource-categories/', dataRoot))
  assert.deepEqual(files.sort(), resourceCategories.map(({ id }) => `${id}.ts`).sort())
  for (const [i, { id, resources }] of modules.entries())
    assert.equal(resources.length, resourceCategories[i].count, id)
})

test('逐类完整 ID 归属一致，同数量分类也不能互换', async () => {
  const { modules } = await readCatalog()
  for (const [i, { id, resources }] of modules.entries())
    assert.deepEqual(resources.map(item => item.id).sort(), expandIds(expected[i][3]).sort(), id)
})

test('411 项资源及 471 个入口有效，无重复 ID 或缺失图标', async () => {
  const { modules } = await readCatalog()
  const resources = modules.flatMap(module => module.resources)
  assert.equal(resources.length, 411)
  assert.equal(new Set(resources.map(item => item.id)).size, resources.length)
  let links = 0
  for (const item of resources) {
    assert.match(item.id, /^\d{3}$/u)
    for (const field of ['title', 'content', 'iconUrl']) {
      assert.equal(typeof item[field], 'string', `${item.id}.${field}`)
      assert.equal(item[field].trim(), item[field], `${item.id}.${field}`)
      assert.ok(item[field].length > 0, `${item.id}.${field}`)
    }
    assert.ok(item.tags.length > 0, item.id)
    assert.ok(item.tags.every(tag => typeof tag === 'string' && tag.trim().length > 0), item.id)
    assert.ok(Object.keys(item.url).length > 0, item.id)
    for (const [language, url] of Object.entries(item.url)) {
      assert.ok(['en', 'zh'].includes(language), item.id)
      assert.equal(url.trim(), url, item.id)
      assert.ok(['http:', 'https:'].includes(new URL(url).protocol), item.id)
      links++
    }
    if (item.url.en && item.url.zh)
      assert.notEqual(item.url.en, item.url.zh, `${item.id} 语言入口重复`)
    assert.ok(item.iconUrl.startsWith('/images/resource-icons/'), item.id)
    assert.ok(existsSync(new URL(`../public${item.iconUrl}`, import.meta.url)), `${item.id}: ${item.iconUrl}`)
  }
  assert.equal(links, 471)
})
