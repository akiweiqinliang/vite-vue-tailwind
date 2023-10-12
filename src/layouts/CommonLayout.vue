<template>
  <Header />
  <RouterView  v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </RouterView>
</template>

<script setup>

import Header from "@/components/layout/Header.vue";
</script>

<style scoped>

</style>
