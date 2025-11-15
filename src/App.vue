<script setup>
import LocalComponent from './components/LocalComponent.vue'
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Component</h1>
    <div class="h-4 bg-gray-200"></div>
    <LocalComponent />
    <GlobalComponent />
  </div>
</template>

<style scoped>

</style>
