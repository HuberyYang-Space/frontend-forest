<script setup lang="ts">
import type { ResourceCategoryId } from '~/data/resource-categories'
import CardList from '~/components/CardList.vue'
import { useResourceCategory } from '~/composables/useResourceCategory'
import { loadResourceCategory } from '~/data/resource-catalog'
import { resourceCategories } from '~/data/resource-categories'

const activeId = ref<ResourceCategoryId>('frameworks')
const { resources, status, errorMessage, retry } = useResourceCategory(activeId, loadResourceCategory)

function selectCategory(name: string | number) {
  const category = resourceCategories.find(category => category.id === name)
  if (category)
    activeId.value = category.id
}

function reloadPage() {
  window.location.reload()
}
</script>

<template>
  <section class="resource_catalog" aria-label="资源目录">
    <el-tabs :model-value="activeId" @update:model-value="selectCategory">
      <el-tab-pane
        v-for="category in resourceCategories"
        :key="category.id"
        :label="`${category.label} ${category.count}`"
        :name="category.id"
        lazy
      >
        <div v-if="activeId === category.id" :aria-busy="status === 'loading'">
          <p v-if="status === 'loading'" role="status">
            正在加载{{ category.label }}…
          </p>
          <el-skeleton :loading="status === 'loading'" :rows="6" :throttle="200" animated>
            <CardList
              v-if="status === 'ready'"
              :key="category.id"
              :title="`${category.label}（${category.count}）`"
              :resources
            />
            <div v-else-if="status === 'error'" class="category_error">
              <el-alert title="分类加载失败" :description="errorMessage" type="error" show-icon :closable="false" />
              <div class="category_actions">
                <el-button type="primary" @click="retry">
                  重试
                </el-button>
                <el-button @click="reloadPage">
                  重新载入页面
                </el-button>
              </div>
            </div>
          </el-skeleton>
        </div>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<style scoped>
.resource_catalog {
  margin-top: 24px;
}

.category_error {
  padding-block: 20px;
}

.category_actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.category_actions .el-button + .el-button {
  margin-left: 0;
}
</style>
