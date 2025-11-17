<script setup>

</script>

<template>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    @click="$emit('childEvent', 'Hello from Child Component!')">
    Emit Event to Parent
  </button>
</template>

<style scoped>

</style>