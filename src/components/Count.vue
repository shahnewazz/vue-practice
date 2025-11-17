<script setup>

</script>

<template>
  <button @click="$emit('increment')"
    class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
    Increment Count
  </button>
</template>

<style scoped>

</style>