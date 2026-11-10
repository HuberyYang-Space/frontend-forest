<script setup lang="ts">
import { ArrowLeftBold, CaretBottom, Search } from '@element-plus/icons-vue'

const searchProviders = [
  {
    label: '百度',
    icon: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png',
    url: 'http://www.baidu.com/baidu',
    queryParam: 'word',
  },
  {
    label: '谷歌',
    icon: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png',
    url: 'https://www.google.com/search',
    queryParam: 'q',
  },
  {
    label: '必应',
    icon: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png',
    url: 'https://cn.bing.com/search',
    queryParam: 'q',
  },
] as const

// 旧版 Safari 可能在组合结束后才派发输入法按键。
const imeKeyCode = 229

const providerIndex = ref(0)
const provider = computed(() => searchProviders[providerIndex.value])
const keyword = ref('')
const isOpen = ref(false)
const isComposing = ref(false)
const input = useTemplateRef<HTMLInputElement>('input')
const toggleButton = useTemplateRef<HTMLButtonElement>('toggleButton')

async function toggleSearch() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await nextTick()
    input.value?.focus()
  }
  else {
    isComposing.value = false
    toggleButton.value?.focus()
  }
}

function onWindowKeyDown(event: KeyboardEvent) {
  if (event.key !== 'Enter' || isOpen.value || event.defaultPrevented
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

  if (event.key === 'Tab' && event.target === input.value && !event.shiftKey
    && !event.altKey && !event.ctrlKey && !event.metaKey) {
    event.preventDefault()
    if (!event.repeat)
      providerIndex.value = (providerIndex.value + 1) % searchProviders.length
  }

  if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    void toggleSearch()
  }
}

async function selectProvider(index: unknown) {
  if (typeof index !== 'number' || !searchProviders[index])
    return

  providerIndex.value = index
  await nextTick()
  input.value?.focus()
}

function hideUnavailableIcon(event: Event) {
  if (event.currentTarget instanceof HTMLImageElement)
    event.currentTarget.hidden = true
}

function submitSearch() {
  const query = keyword.value.trim()
  if (!query || isComposing.value)
    return

  const { url, queryParam } = provider.value
  const target = new URL(url)
  target.searchParams.set(queryParam, query)
  window.open(target.href, '_blank', 'noopener')
  keyword.value = ''
}

onMounted(() => window.addEventListener('keydown', onWindowKeyDown))
onUnmounted(() => window.removeEventListener('keydown', onWindowKeyDown))
</script>

<template>
  <div class="search_main" :class="{ 'is-open': isOpen }" @keydown="onSearchKeyDown">
    <form id="forest-search" class="search_form" role="search" aria-label="外部搜索" @submit.prevent="submitSearch">
      <el-dropdown trigger="click" placement="bottom-start" @command="selectProvider">
        <button type="button" class="search_provider" :aria-label="`搜索引擎：${provider.label}`">
          <img :key="provider.label" :src="provider.icon" alt="" @error="hideUnavailableIcon">
          <span>{{ provider.label }}</span>
          <el-icon>
            <CaretBottom />
          </el-icon>
        </button>
        <template #dropdown>
          <el-dropdown-menu class="provider_menu">
            <el-dropdown-item v-for="(engine, index) in searchProviders" :key="engine.label" :command="index">
              <img :src="engine.icon" alt="" @error="hideUnavailableIcon">
              {{ engine.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <input
        ref="input"
        v-model="keyword"
        class="search_input"
        type="search"
        name="word"
        aria-label="搜索关键词"
        aria-describedby="forest-search-keys"
        placeholder="输入并搜索"
        enterkeyhint="search"
        @compositionstart="isComposing = true"
        @compositionend="isComposing = false"
      >
      <span id="forest-search-keys" hidden>Tab 切换引擎，Shift+Tab 返回引擎按钮，Esc 收起搜索</span>
      <button type="submit" class="search_submit" aria-label="搜索" title="搜索">
        <el-icon :size="18">
          <Search />
        </el-icon>
      </button>
    </form>
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
  </div>
</template>

<style scoped lang="scss">
.search_main {
  --search-handle: 48px;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 999;
  display: flex;
  width: min(500px, calc(100% - 20px));
  transform: translateX(calc(-100% + var(--search-handle)));
  transition: transform 0.35s ease;
  border-radius: 4px;

  &.is-open {
    transform: translateX(10px);
    background: var(--el-bg-color, #fff);
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);

    .search_form {
      visibility: visible;
    }
  }
}

.search_form {
  display: flex;
  flex: 1;
  min-width: 0;
  visibility: hidden;
}

.search_toggle,
.search_provider,
.search_input,
.search_submit {
  min-height: 48px;
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

.search_toggle,
.search_submit {
  display: grid;
  flex: 0 0 var(--search-handle);
  place-items: center;
}

.search_toggle {
  border-radius: 0 4px 4px 0;
  background: var(--el-bg-color, #fff);
  box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
}

.is-open .search_toggle {
  box-shadow: none;
}

.search_provider {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 7px;
  white-space: nowrap;
}

.search_input {
  flex: 1;
  min-width: 0;
  padding-inline: 8px;
  border-inline: 1px solid var(--el-border-color, #dcdfe6);
}

.search_provider img,
.provider_menu img {
  width: 20px;
  height: 20px;
  border-radius: 4px;
  object-fit: contain;
}

.provider_menu img {
  margin-right: 6px;
}

@media (prefers-reduced-motion: reduce) {
  .search_main {
    transition: none;
  }
}
</style>
