<script setup lang="ts">
import type { ButtonInstance, InputInstance } from 'element-plus'
import { ArrowLeftBold, ArrowRightBold, CaretBottom, Search } from '@element-plus/icons-vue'

const iconOptions = '?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim'

const searchProviders = [
  {
    label: '百度',
    icon: `https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png${iconOptions}`,
    url: 'http://www.baidu.com/baidu',
    queryParam: 'word',
  },
  {
    label: '谷歌',
    icon: `https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png${iconOptions}`,
    url: 'https://www.google.com/search',
    queryParam: 'q',
  },
  {
    label: '必应',
    icon: `https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png${iconOptions}`,
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
const isChooserOpen = ref(false)
const isComposing = ref(false)
const showSearchIcon = ref(false)
const input = useTemplateRef<InputInstance>('input')
const toggleButton = useTemplateRef<ButtonInstance>('toggleButton')
const providerButton = useTemplateRef<HTMLButtonElement>('providerButton')
const chooser = useTemplateRef<HTMLElement>('chooser')
let iconTimer: number | undefined

async function toggleSearch() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    await nextTick()
    input.value?.focus()
  }
  else {
    isComposing.value = false
    toggleButton.value?.ref?.focus()
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

  if (event.key === 'Tab' && event.target === input.value?.input && !event.shiftKey
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

async function openChooser() {
  isChooserOpen.value = true
  await nextTick()
  chooser.value?.querySelectorAll('button')[providerIndex.value]?.focus()
}

async function closeChooser(index?: number) {
  isChooserOpen.value = false
  if (index !== undefined)
    providerIndex.value = index
  await nextTick()
  if (index === undefined)
    providerButton.value?.focus()
  else
    input.value?.focus()
}

function onChooserTab(event: KeyboardEvent) {
  const buttons = Array.from(chooser.value?.querySelectorAll('button') ?? [])
  const current = buttons.findIndex(button => button === event.target)
  const direction = event.shiftKey
    ? -1
    : 1
  buttons[(current + direction + buttons.length) % buttons.length]?.focus()
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

onMounted(() => {
  window.addEventListener('keydown', onWindowKeyDown)
  iconTimer = window.setInterval(() => {
    showSearchIcon.value = !showSearchIcon.value
  }, 2000)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onWindowKeyDown)
  window.clearInterval(iconTimer)
})
</script>

<template>
  <div class="search_main" :class="{ 'is-open': isOpen }" @keydown="onSearchKeyDown">
    <form
      id="forest-search"
      role="search"
      aria-label="外部搜索"
      @submit.prevent="submitSearch"
      @compositionstart="isComposing = true"
      @compositionend="isComposing = false"
    >
      <el-input
        ref="input"
        v-model="keyword"
        type="text"
        name="word"
        aria-label="搜索关键词"
        aria-describedby="forest-search-keys"
        placeholder="输入并搜索"
        enterkeyhint="search"
        :tabindex="isOpen ? 0 : -1"
      >
        <template #prepend>
          <button
            ref="providerButton"
            type="button"
            class="search_icon"
            :aria-label="`搜索引擎：${provider.label}`"
            aria-haspopup="dialog"
            :aria-expanded="isChooserOpen"
            :tabindex="isOpen ? 0 : -1"
            @click="openChooser"
          >
            <img :key="provider.label" class="search-icon-img" :src="provider.icon" alt="" draggable="false" @error="hideUnavailableIcon">
            <el-icon>
              <CaretBottom />
            </el-icon>
          </button>
        </template>
        <template #append>
          <el-button
            ref="toggleButton"
            native-type="button"
            :icon="isOpen ? ArrowLeftBold : (showSearchIcon ? Search : ArrowRightBold)"
            :aria-label="isOpen ? '收起搜索' : '展开搜索'"
            :aria-expanded="isOpen"
            aria-controls="forest-search"
            @click="toggleSearch"
          />
        </template>
      </el-input>
      <span id="forest-search-keys" hidden>Tab 切换引擎，Shift+Tab 返回引擎按钮，Esc 收起搜索</span>
    </form>

    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isChooserOpen"
          class="modal-mask"
          @click.self="closeChooser()"
          @keydown.esc.stop.prevent="closeChooser()"
          @keydown.tab.prevent="onChooserTab"
        >
          <div ref="chooser" class="search_box" role="dialog" aria-modal="true" aria-label="选择搜索引擎">
            <button v-for="(engine, index) in searchProviders" :key="engine.label" type="button" @click="closeChooser(index)">
              <img class="icon-img" :src="engine.icon" alt="" draggable="false" @error="hideUnavailableIcon">
              <span>{{ engine.label }}</span>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
$search-height: 48px;
$engine-size: 78px;

.search_main {
  --search-width: min(500px, calc(100% - 20px));

  position: fixed;
  top: 70px;
  left: calc(47px - var(--search-width));
  z-index: 999;
  width: var(--search-width);
  transition: left 0.35s ease-in-out;

  &.is-open {
    left: 10px;
  }

  &:not(.is-open) {
    :deep(.el-input-group__prepend),
    :deep(.el-input__wrapper) {
      pointer-events: none;
    }
  }

  :deep(.el-input-group) {
    height: 50px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
  }

  :deep(.el-input-group__append),
  :deep(.el-input-group__prepend) {
    border-radius: 0;
  }

  :deep(.el-input-group__prepend) {
    padding: 0;
  }
}

.search-icon-img {
  width: calc($search-height * 0.485);
  height: calc($search-height * 0.485);
  margin-right: calc($search-height * 0.1);
  border-radius: 4px;
  object-fit: cover;
  user-select: none;
}

.search_icon {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
}

.search_box {
  position: fixed;
  top: 130px;
  left: 10px;
  display: flex;
  width: calc(3 * $engine-size);
  max-width: calc(100% - 20px);
  background-color: #fff;

  button {
    display: flex;
    box-sizing: border-box;
    height: $engine-size;
    flex: 1 1 $engine-size;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    padding: calc($search-height * 0.31) 4px calc($search-height * 0.22);
    border: 1px solid rgb(243 243 243);
    border-left: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font: inherit;

    &:first-child {
      border-left: 1px solid rgb(243 243 243);
    }

    &:hover {
      background-color: rgb(243 243 243);
    }
  }
}

.icon-img {
  width: calc($search-height * 0.543);
  height: calc($search-height * 0.543);
  margin-bottom: calc($search-height * 0.18);
  object-fit: cover;
}

.search_icon,
.search_box button {
  &:focus-visible {
    outline: 2px solid var(--el-color-primary, #409eff);
    outline-offset: -2px;
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  inset: 0;
  background-color: rgb(0 0 0 / 60%);
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .search_main,
  .modal-mask {
    transition: none;
  }
}
</style>
