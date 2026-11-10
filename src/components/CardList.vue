<script setup lang="ts">
import type { TagProps } from 'element-plus'
import type { Resource } from '~/data/resources'
import { DArrowRight } from '@element-plus/icons-vue'

defineProps<{
  title: string
  resources: readonly Resource[]
}>()

const tagTypes = new Map<string, TagProps['type']>([
  ['js', 'warning'],
  ['vue', 'success'],
  ['react', 'primary'],
])

const fallbackIcon = '/error.gif'

function replaceFailedIcon(event: Event) {
  const img = event.currentTarget
  if (img instanceof HTMLImageElement && img.getAttribute('src') !== fallbackIcon) {
    img.src = fallbackIcon
    img.classList.add('err')
  }
}
</script>

<template>
  <section class="ary_container">
    <h2 class="ary_title">
      {{ title }}
    </h2>
    <el-row :gutter="15">
      <el-col v-for="item in resources" :key="item.id" class="resource_col" :xs="24" :sm="12" :md="8" :lg="6">
        <el-card class="resource_card" shadow="hover" :body-style="{ padding: 0 }">
          <div class="card_main">
            <div class="card_l">
              <div class="logo">
                <img :src="item.iconUrl" alt="" @error="replaceFailedIcon">
              </div>
            </div>
            <div class="card_m">
              <p class="title">
                {{ item.title }}
              </p>
              <div class="tags">
                <el-tag v-for="tag in item.tags" :key="tag" :type="tagTypes.get(tag) ?? 'info'" round>
                  {{ tag }}
                </el-tag>
              </div>
              <el-tooltip
                :content="item.content"
                placement="bottom"
                effect="dark"
                :show-arrow="false"
                :offset="5"
                :show-after="300"
              >
                <p class="des">
                  {{ item.content }}
                </p>
              </el-tooltip>
            </div>
            <details class="card_r">
              <summary :aria-label="`${item.title} 文档链接`">
                <el-icon :size="15">
                  <DArrowRight />
                </el-icon>
              </summary>
              <div class="switch_box">
                <a v-if="item.url.zh" :href="item.url.zh" target="_blank" rel="noopener" :aria-label="`${item.title} 中文文档`">中文</a>
                <a v-if="item.url.en" :href="item.url.en" target="_blank" rel="noopener" :aria-label="`${item.title} 英文文档`">英文</a>
              </div>
            </details>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>
@use '~/styles/resource-card.scss';
</style>
