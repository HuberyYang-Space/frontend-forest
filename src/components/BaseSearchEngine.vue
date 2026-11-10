<script setup lang="ts">
import { ArrowLeftBold, Search } from '@element-plus/icons-vue'

const searchProviders = {
  baidu: { label: '百度', url: 'http://www.baidu.com/baidu', queryParam: 'word' },
  google: { label: '谷歌', url: 'https://www.google.com/search', queryParam: 'q' },
  bing: { label: '必应', url: 'https://cn.bing.com/search', queryParam: 'q' },
} as const

// 旧版 Safari 可能在组合结束后才派发输入法按键。
const imeKeyCode = 229

const provider = ref<keyof typeof searchProviders>('baidu')
const keyword = ref('')
const isOpen = ref(false)
const isTourOpen = ref(false)
const isComposing = ref(false)
const input = useTemplateRef<HTMLInputElement>('input')
const toggleButton = useTemplateRef<HTMLButtonElement>('toggleButton')

let tourTimer: number | undefined

async function toggleSearch() {
  window.clearTimeout(tourTimer)
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    isTourOpen.value = false
    await nextTick()
    input.value?.focus()
  }
  else {
    isComposing.value = false
    toggleButton.value?.focus()
  }
}

function onWindowKeyDown(event: KeyboardEvent) {
  if (event.key !== 'Enter' || isOpen.value || isTourOpen.value || event.defaultPrevented
    || event.repeat || event.isComposing || event.keyCode === imeKeyCode
    || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey
    || document.activeElement !== document.body) {
    return
  }

  event.preventDefault()
  void toggleSearch()
}

function onSearchKeyDown(event: KeyboardEvent) {
  if (event.defaultPrevented || event.isComposing || event.keyCode === imeKeyCode || isComposing.value)
    return

  if (event.key === 'Enter' && event.repeat)
    event.preventDefault()

  if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    void toggleSearch()
  }
}

function submitSearch() {
  const query = keyword.value.trim()
  if (!query || isComposing.value)
    return

  const { url, queryParam } = searchProviders[provider.value]
  const target = new URL(url)
  target.searchParams.set(queryParam, query)
  window.open(target.href, '_blank', 'noopener')
  keyword.value = ''
}

onMounted(() => {
  window.addEventListener('keydown', onWindowKeyDown)
  tourTimer = window.setTimeout(() => {
    if (document.activeElement === document.body)
      isTourOpen.value = true
  }, 2000)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onWindowKeyDown)
  window.clearTimeout(tourTimer)
})
</script>

<template>
  <div class="search_main" :class="{ 'is-open': isOpen }" @keydown="onSearchKeyDown">
    <button
      ref="toggleButton"
      type="button"
      class="search_toggle"
      :aria-label="isOpen ? '收起搜索' : '展开搜索'"
      :aria-expanded="isOpen"
      aria-controls="forest-search"
      @click="toggleSearch"
    >
      <el-icon :size="18">
        <component :is="isOpen ? ArrowLeftBold : Search" />
      </el-icon>
    </button>
    <form v-show="isOpen" id="forest-search" class="search_form" role="search" aria-label="外部搜索" @submit.prevent="submitSearch">
      <select v-model="provider" class="search_provider" aria-label="搜索引擎">
        <option v-for="(engine, id) in searchProviders" :key="id" :value="id">
          {{ engine.label }}
        </option>
      </select>
      <input
        ref="input"
        v-model="keyword"
        class="search_input"
        type="search"
        name="word"
        aria-label="搜索关键词"
        placeholder="输入并搜索"
        enterkeyhint="search"
        @compositionstart="isComposing = true"
        @compositionend="isComposing = false"
      >
      <button type="submit" class="search_submit">
        搜索
      </button>
    </form>

    <el-tour v-model="isTourOpen">
      <el-tour-step
        :target="toggleButton ?? undefined"
        title="搜索框"
        description="在页面空闲时按 Enter 或点击按钮展开搜索。用 Tab 移动焦点，在下拉框选择引擎，按 Esc 收起。"
      />
      <template #indicators>
        <span />
      </template>
    </el-tour>
  </div>
</template>

<style scoped lang="scss">
.search_main {
  position: fixed;
  top: 70px;
  left: 10px;
  z-index: 999;
  display: flex;
  border-radius: 4px;
  background: var(--el-bg-color, #fff);
  box-shadow: 0 2px 10px rgb(0 0 0 / 30%);

  &.is-open {
    width: min(500px, calc(100% - 20px));
  }
}

.search_form {
  display: flex;
  flex: 1;
  min-width: 0;
}

.search_toggle,
.search_provider,
.search_input,
.search_submit {
  min-height: 44px;
  border: 0;
  background: transparent;
  color: var(--el-text-color-primary, #303133);
  font: inherit;

  &:focus-visible {
    outline: 2px solid var(--el-color-primary, #409eff);
    outline-offset: -2px;
  }
}

.search_toggle,
.search_provider,
.search_submit {
  cursor: pointer;
}

.search_toggle {
  display: grid;
  width: 44px;
  place-items: center;
}

.search_provider,
.search_submit {
  padding-inline: 8px;
}

.search_input {
  flex: 1;
  min-width: 0;
  padding-inline: 8px;
  border-inline: 1px solid var(--el-border-color, #dcdfe6);
}
</style>
