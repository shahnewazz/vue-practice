<script setup>
const props = defineProps(["name", "company"]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-purple-600">Multiple Object Prop</h1>
    <p class="text-lg">Name: {{ name }}</p>
    <p class="text-lg">Company: {{ company }}</p>
  </div>
</template>

<style scoped>

</style>