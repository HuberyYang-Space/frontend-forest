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
const hoveredResource = ref<string>()
const activatedResource = ref<string>()

function replaceFailedIcon(event: Event) {
  const img = event.currentTarget
  if (img instanceof HTMLImageElement && img.getAttribute('src') !== fallbackIcon) {
    img.src = fallbackIcon
    img.classList.add('err')
  }
}

function areLinksOpen(id: string) {
  return hoveredResource.value === id || activatedResource.value === id
}

function revealOnHover(event: PointerEvent, id: string) {
  if (event.pointerType === 'mouse')
    hoveredResource.value = id
}

function toggleLinks(event: MouseEvent, id: string) {
  const isMouseClick = event.detail > 0 && (!(event instanceof PointerEvent) || event.pointerType === 'mouse')
  if (isMouseClick && hoveredResource.value === id)
    return

  const wasOpen = areLinksOpen(id)
  if (hoveredResource.value === id)
    hoveredResource.value = undefined
  activatedResource.value = wasOpen ? undefined : id
}

function closeAfterHover(event: PointerEvent, id: string) {
  if (event.pointerType !== 'mouse' || hoveredResource.value !== id)
    return

  hoveredResource.value = undefined
  const card = event.currentTarget
  const focus = document.activeElement
  if (activatedResource.value !== id && card instanceof HTMLElement && focus instanceof HTMLAnchorElement && card.contains(focus))
    card.querySelector<HTMLButtonElement>('.card_r')?.focus({ preventScroll: true })
}

function keepLinksForKeyboard(event: KeyboardEvent, id: string) {
  if (!event.shiftKey && hoveredResource.value === id)
    activatedResource.value = id
}

function closeAfterFocus(event: FocusEvent, id: string) {
  const { currentTarget, relatedTarget } = event
  if (activatedResource.value === id && currentTarget instanceof HTMLElement
    && !(relatedTarget instanceof Node && currentTarget.contains(relatedTarget))) {
    activatedResource.value = undefined
  }
}

function closeFromKeyboard(event: KeyboardEvent, id: string) {
  const card = event.currentTarget
  if (!areLinksOpen(id) || !(card instanceof HTMLElement))
    return

  event.preventDefault()
  if (hoveredResource.value === id)
    hoveredResource.value = undefined
  if (activatedResource.value === id)
    activatedResource.value = undefined
  card.querySelector<HTMLButtonElement>('.card_r')?.focus()
}
</script>

<template>
  <section class="ary_container">
    <h2 class="ary_title">
      {{ title }}
    </h2>
    <el-row :gutter="15">
      <el-col v-for="item in resources" :key="item.id" class="resource_col" :xs="24" :sm="12" :md="8" :lg="6">
        <el-card
          class="resource_card"
          shadow="hover"
          :body-style="{ padding: 0 }"
          @pointerleave="closeAfterHover($event, item.id)"
          @focusout="closeAfterFocus($event, item.id)"
          @keydown.esc="closeFromKeyboard($event, item.id)"
        >
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
            <button
              type="button"
              class="card_r"
              :aria-label="`${item.title} 文档链接`"
              :aria-controls="`resource-links-${item.id}`"
              :aria-expanded="areLinksOpen(item.id)"
              @pointerenter="revealOnHover($event, item.id)"
              @click="toggleLinks($event, item.id)"
              @keydown.tab="keepLinksForKeyboard($event, item.id)"
            >
              <el-icon :size="15">
                <DArrowRight />
              </el-icon>
            </button>
            <div
              :id="`resource-links-${item.id}`"
              class="switch_box"
              :class="{ 'is-open': areLinksOpen(item.id) }"
              :aria-hidden="!areLinksOpen(item.id)"
            >
              <a
                v-if="item.url.zh"
                :href="item.url.zh"
                target="_blank"
                rel="noopener"
                :aria-label="`${item.title} 中文文档`"
                :tabindex="areLinksOpen(item.id) ? undefined : -1"
              >中文</a>
              <a
                v-if="item.url.en"
                :href="item.url.en"
                target="_blank"
                rel="noopener"
                :aria-label="`${item.title} 英文文档`"
                :tabindex="areLinksOpen(item.id) ? undefined : -1"
              >英文</a>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<style lang="scss" scoped>
@use '~/styles/resource-card.scss';
</style>
