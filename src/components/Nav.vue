<script setup lang="ts">
import { useNavFixed } from '~/composables/useNavFixed'

const nav = useTemplateRef<HTMLElement>('navEl')
const { isFixed, navLinks, selectedId } = useNavFixed(nav)
</script>

<template>
  <nav ref="navEl" class="nav" :class="{ active: isFixed }">
    <div class="container">
      <h1 class="logo">
        <a href="#">前端森林</a>
      </h1>
      <ul>
        <li v-for="{ id, href, label } in navLinks" :key="id">
          <a :href :class="{ current: selectedId === id }" target="_blank" rel="noopener" @click="selectedId = id">{{ label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '~/styles/nav.scss';
</style>
