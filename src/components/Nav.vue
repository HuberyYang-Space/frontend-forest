<script setup lang='ts'>
import useNavFixed from '~/hooks/useNavFixed'

const { nav: navEl, navActive, navList, handleClickNav } = useNavFixed() as AnyKey
</script>

<template>
  <nav ref="navEl" class="nav" :class="[navActive ? 'active' : '']">
    <div class="container">
      <h1 class="logo">
        <a href="#">前端森林</a>
      </h1>
      <ul>
        <li v-for="{ id, href, active, navName } in navList" :key="id" @click="handleClickNav(id)">
          <a :href :class="[active ? 'current' : '']" target="_blank">{{ navName }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang='scss' scoped>
@use '~/styles/nav.scss';
</style>
