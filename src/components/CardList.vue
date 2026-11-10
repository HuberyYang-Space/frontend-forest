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
const hoverDisclosures = new WeakSet<HTMLDetailsElement>()

function replaceFailedIcon(event: Event) {
  const img = event.currentTarget
  if (img instanceof HTMLImageElement && img.getAttribute('src') !== fallbackIcon) {
    img.src = fallbackIcon
    img.classList.add('err')
  }
}

function revealOnHover(event: PointerEvent) {
  if (event.pointerType !== 'mouse' || !(event.currentTarget instanceof HTMLElement))
    return

  const details = event.currentTarget.parentElement
  if (details instanceof HTMLDetailsElement && !details.open) {
    details.open = true
    hoverDisclosures.add(details)
  }
}

function keepHoveredLinks(event: MouseEvent) {
  if (!event.detail || (event instanceof PointerEvent && event.pointerType !== 'mouse')
    || !(event.currentTarget instanceof HTMLElement)) {
    return
  }

  const details = event.currentTarget.parentElement
  if (details instanceof HTMLDetailsElement && details.open && hoverDisclosures.has(details))
    event.preventDefault()
}

function dismissHoveredLinks(card: HTMLElement, focus: EventTarget | null) {
  const details = card.querySelector('details')
  if (details && hoverDisclosures.has(details) && !(focus instanceof Node && details.contains(focus))) {
    details.open = false
    hoverDisclosures.delete(details)
  }
}

function closeAfterHover(event: PointerEvent) {
  if (event.pointerType === 'mouse' && event.currentTarget instanceof HTMLElement)
    dismissHoveredLinks(event.currentTarget, document.activeElement)
}

function closeAfterFocus(event: FocusEvent) {
  if (event.currentTarget instanceof HTMLElement && !event.currentTarget.matches(':hover'))
    dismissHoveredLinks(event.currentTarget, event.relatedTarget)
}

function closeFromKeyboard(event: KeyboardEvent) {
  const details = event.currentTarget
  if (!(details instanceof HTMLDetailsElement) || !details.open)
    return

  event.preventDefault()
  details.open = false
  hoverDisclosures.delete(details)
  details.querySelector('summary')?.focus()
}
</script>

<template>
  <section class="ary_container">
    <h2 class="ary_title">
      {{ title }}
    </h2>
    <el-row :gutter="15">
      <el-col v-for="item in resources" :key="item.id" class="resource_col" :xs="24" :sm="12" :md="8" :lg="6">
        <el-card class="resource_card" shadow="hover" :body-style="{ padding: 0 }" @pointerleave="closeAfterHover" @focusout="closeAfterFocus">
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
            <details class="card_r" @keydown.esc="closeFromKeyboard">
              <summary :aria-label="`${item.title} 文档链接`" @pointerenter="revealOnHover" @click="keepHoveredLinks">
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
