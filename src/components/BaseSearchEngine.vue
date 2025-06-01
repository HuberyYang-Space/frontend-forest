<script setup lang="ts">
import { ArrowLeftBold, ArrowRightBold, Search } from '@element-plus/icons-vue'

// 搜索框
const showModal = ref(false)
const isOpen = ref(false)
const isTourOpen = ref(false)
const input = ref(null)
const tourEl = ref(null)
const curIndex = ref(0)
const keyWord = ref('')
const searchMainLeft = ref(-453)
const searchItemList = [
  {
    name: '百度',
    alt: 'baidu',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
    url: 'http://www.baidu.com/baidu?word=',
  },
  {
    name: '谷歌',
    alt: 'google',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
    url: 'https://www.google.com/search?q=',
  },
  {
    name: '必应',
    alt: 'bing',
    src: 'https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim',
    url: 'https://cn.bing.com/search?q=',
  },
]

let timer: NodeJS.Timeout | null
let timer2: NodeJS.Timeout | null
const startSwitch = ref(false)

function onKeyDown(e: KeyboardEvent) {
  if ((e.key === 'Escape' && isOpen.value) || (e.key === 'Enter' && !isOpen.value)) {
    e.preventDefault()
    handleSearchMainOpen()
  }

  if (e.key === 'Tab' && isOpen.value) {
    e.preventDefault()
    if (curIndex.value === 2)
      curIndex.value = 0
    else
      curIndex.value += 1
  }
}
watch(isOpen, (val) => {
  if (val) {
    (input.value as any).focus()
  }
})

onMounted(() => {
  // 监听按钮事件
  window.addEventListener('keydown', e => onKeyDown(e))
  timer = setInterval(() => {
    startSwitch.value = !startSwitch.value
  }, 2000)

  timer2 = setTimeout(() => {
    isTourOpen.value = true
    clearTimeout(timer2 as NodeJS.Timeout)
  }, 2000)

  const searchEl = document.querySelector('.el-input-group__prepend') as HTMLElement
  searchEl.onclick = () => showModal.value = !showModal.value
})

function handlerSearch() {
  const url = searchItemList[curIndex.value].url + keyWord.value
  window.open(url, '_blank')
  keyWord.value = ''
}

function handleModalClose(index: number) {
  showModal.value = false
  curIndex.value = index
}

function handleSearchMainOpen() {
  searchMainLeft.value = searchMainLeft.value === 10 ? -453 : 10
  isOpen.value = !isOpen.value
}

onUnmounted(() => clearInterval(timer as NodeJS.Timeout))
const switchIcon = computed(() => startSwitch.value ? Search : ArrowRightBold)
</script>

<template>
  <div class="search_main" :style="{ left: `${searchMainLeft}px` }">
    <el-tour v-model="isTourOpen">
      <el-tour-step
        :target="(tourEl as any).$el"
        title="搜索框"
        description=""
      >
        <div>
          点击 <el-tag type="primary">
            Enter
          </el-tag> 打开搜索框；点击 <el-tag type="primary">
            Tab
          </el-tag> 切换搜索引擎；点击 <el-tag type="primary">
            Esc
          </el-tag> 收起搜索框
        </div>
      </el-tour-step>
      <template #indicators>
        <span />
      </template>
    </el-tour>

    <el-form @submit="handlerSearch">
      <ElInput ref="input" v-model.trim="keyWord" placeholder="输入并搜索" type="text" name="word">
        <template #prepend>
          <div class="search_icon">
            <img
              draggable="false"
              class="search-icon-img"
              :src="searchItemList[curIndex].src"
              :alt="searchItemList[curIndex].alt"
            >
            <el-icon>
              <CaretBottom />
            </el-icon>
          </div>
        </template>
        <template #append>
          <el-button ref="tourEl" :icon="isOpen ? ArrowLeftBold : switchIcon" @click="handleSearchMainOpen" />
        </template>
      </ElInput>
    </el-form>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="modal-mask" @click="showModal = false">
          <div class="search_box">
            <div v-for="({ name, src, alt }, idx) in searchItemList" :key="name" @click="handleModalClose(idx)">
              <img draggable="false" class="icon-img" :src :alt>
              <span>{{ name }}</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
$search-height: 48px;
$search-box-size: 78px;
$base-top: 70px;

.search_main {
  transition: all ease-in-out 0.35s;
  width: 500px;
  position: fixed;
  z-index: 999;
  top: $base-top;

  // 修改el-input
  :deep(.el-input-group) {
    height: 50px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);

    .el-input-group__append,
    .el-input-group__prepend {
      border-radius: 0 !important;
    }
  }

  :deep(.el-input-group__prepend) {
    cursor: pointer;
  }

  .search-icon-img {
    border-radius: 4px;
    width: calc($search-height * 0.485);
    height: calc($search-height * 0.485);
    margin-right: calc($search-height * 0.1);
    object-fit: cover;
    user-select: none;
  }

  .search_icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.search_box {
  position: fixed;
  top: calc($base-top + 60px);
  left: 10px;
  background-color: #ffffff;
  // margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  width: calc(3 * $search-box-size);

  div:first-child {
    border-left: 1px solid rgb(243, 243, 243);
  }

  div {
    width: $search-box-size;
    height: $search-box-size;
    padding: calc($search-height * 0.31) 4px calc($search-height * 0.22);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgb(243, 243, 243);
    border-right: 1px solid rgb(243, 243, 243);
    border-bottom: 1px solid rgb(243, 243, 243);
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background-color: rgb(243, 243, 243);
    }
  }
}

.icon-img {
  width: calc($search-height * 0.543);
  height: calc($search-height * 0.543);
  margin-bottom: calc($search-height * 0.18);
  object-fit: cover;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  // display: flex;
  transition: opacity 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
