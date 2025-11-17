<script setup>
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <form @submit.prevent="$emit('fsubmit', name)">
    <input v-model="name" placeholder="Enter your name" class="border p-2 rounded mb-4" />
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<style scoped>

</style>