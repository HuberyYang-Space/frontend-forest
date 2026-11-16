import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'
import { parse } from 'vue/compiler-sfc'

async function readProviders() {
  const source = await readFile(new URL('../src/components/BaseSearchEngine.vue', import.meta.url), 'utf8')
  const { descriptor } = parse(source)
  const script = ts.createSourceFile('search.ts', descriptor.scriptSetup.content, ts.ScriptTarget.Latest, true)
  const declarations = script.statements.filter(statement => ts.isVariableStatement(statement)
    && statement.declarationList.declarations.some(declaration => ['iconOptions', 'searchProviders'].includes(declaration.name.getText(script))))
  const code = ts.transpileModule(`${declarations.map(node => node.getText(script)).join('\n')}\nglobalThis.result = searchProviders`, {
    compilerOptions: { target: ts.ScriptTarget.ESNext },
  }).outputText
  const context = {}
  runInNewContext(code, context)
  return context.result
}

for (const [label, filename] of [
  ['百度', 'baidu.webp'],
  ['谷歌', 'google.webp'],
  ['必应', 'bing.webp'],
]) {
  test(`${label}实际配置使用可发布的本地 WebP 图标`, async () => {
    const providers = await readProviders()
    const provider = providers.find(item => item.label === label)
    assert.equal(provider?.icon, `/images/search-icons/${filename}`)
    const bytes = await readFile(new URL(`../public${provider.icon}`, import.meta.url))
    assert.equal(bytes.subarray(0, 4).toString(), 'RIFF')
    assert.equal(bytes.subarray(8, 12).toString(), 'WEBP')
  })
}
