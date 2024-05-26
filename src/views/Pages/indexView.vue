<script setup lang="ts">
import "./style.less";
import Header from "@/components/Header/indexView.vue";
</script>

<template>
  <main class="pages">
    <Header />
    <RouterView />
  </main>
</template>
