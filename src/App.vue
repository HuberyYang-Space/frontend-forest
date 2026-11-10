<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { usePageTitle } from '~/composables/usePageTitle'

const today = new Date()
const date = `${today.getMonth() + 1}-${today.getDate()}`
const isGrayTime = date === '4-4' || date === '12-13'

usePageTitle('ヾ(^▽^*)))欢迎回来!', '(｡í _ ì｡)不要走呀')
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div :class="{ grayAll: isGrayTime }">
      <router-view />
    </div>
  </el-config-provider>
</template>

<style lang="scss">
.grayAll {
  filter: grayscale(0.95);
}
</style>
