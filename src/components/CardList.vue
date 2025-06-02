<script setup lang="ts">
interface TagTypes {
  js: 'warning'
  css: 'danger'
  vue: 'success'
  react: 'primary'
}

const props = defineProps(['title', 'tabList'])

const tagTypes: TagTypes = {
  js: 'warning',
  css: 'danger',
  vue: 'success',
  react: 'primary',
}

const data = ref<any[]>([])

watch(() => props.tabList, (val) => {
  data.value = val
}, { immediate: true })

function handleTagColor(tag: string[]) {
  const keys = Object.keys(tagTypes)
  let curTag = ''
  keys.forEach((item) => {
    if (tag.includes(item))
      curTag = item as keyof TagTypes
  })

  return tagTypes[curTag as keyof TagTypes] || (tagTypes[curTag as keyof TagTypes] === 'primary' ? '' : 'info')
}

function handleRedirect(url: string) {
  window.open(url, '_blank')
}

// 图片加载失败的默认行为
// function imgerror(event: anyKey) {
//   const img = event.srcElement
//   img.src = new URL('../../error.gif', import.meta.url).href
//   img.onerror = null
//   img.classList.add('err')
// }

function onCardMouseFocus(item: anyKey) {
  item.showConfig = true
}
function onCardMouseLeave(item: anyKey) {
  item.showConfig = false
}
</script>

<template>
  <div class="ary_container">
    <!-- 类别分组标题 -->
    <div class="ary_title">
      {{ title }}
    </div>
    <el-row :gutter="15">
      <el-col v-for="tab in data" :key="tab.id" :span="6">
        <el-card shadow="hover" :body-style="{ padding: 0 }" @mouseenter="onCardMouseFocus(tab)" @mouseleave="onCardMouseLeave(tab)">
          <div class="card_main">
            <div class="card_l">
              <div v-if="tab.iconUrl" class="logo">
                <!-- <img :src="tab.iconUrl" :onerror="(e:anyKey) => imgerror(e)"> -->
                <img :src="tab.iconUrl">
              </div>
              <div v-else class="logo err">
                <img src="../../error.gif">
              </div>
            </div>
            <div class="card_m">
              <p class="title">
                {{ tab.title }}
              </p>
              <div class="tags">
                <el-tag v-for="(tag, index) in tab.tags" :key="index" :type="handleTagColor(tag)" round>
                  {{ tag }}
                </el-tag>
              </div>
              <el-tooltip
                :content="tab.content"
                placement="bottom"
                effect="dark"
                :show-arrow="false"
                :offset="5"
                :show-after="300"
              >
                <p class="des">
                  {{ tab.content }}
                </p>
              </el-tooltip>
            </div>
            <div class="card_r">
              <el-icon :size="15">
                <DArrowRight />
              </el-icon>
            </div>
            <!-- language choose -->
            <div class="switch_box" :class="[tab.showConfig ? 'active' : 'disabled']">
              <div v-if="tab.url.zh" class="zh" @click="handleRedirect(tab.url.zh)">
                中文
              </div>
              <div v-if="tab.url.en" class="en" @click="handleRedirect(tab.url.en)">
                英文
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/homepage.scss';
</style>
