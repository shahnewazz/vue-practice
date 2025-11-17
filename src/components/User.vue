<script setup>
const props = defineProps(["name", "age"]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-green-600">User Component</h1>
    <p class="text-lg">Name: {{ name }}</p>
    <p class="text-lg">Age: {{ age }}</p> 
  </div>
</template>

<style scoped>

</style>