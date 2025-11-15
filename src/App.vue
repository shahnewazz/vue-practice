<script setup>
const msg = "Hello This is a simple message"
function greet() {
  return "Welcome to Vue.js! from a function."
}
const isDarkMode = false;
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Interpolation Demo</h1>
    

    <div class="border border-blue-500 p-5">
      <p class="text-lg text-gray-700 mb-3">{{ msg }}</p>
      <p class="text-lg text-gray-700 mb-3">{{ 10 + 20 }}</p>
      <p class="text-lg text-gray-700 mb-3">{{ "Vue.js " + "is awesome!" }}</p>
      <p class="text-lg text-gray-700 mb-3">{{ msg.toUpperCase() }}</p>
      <p class="text-lg text-gray-700 mb-3">{{ msg.length }}</p>
      <p class="text-lg text-gray-700 mb-3">{{ greet() }}</p>
      <p class="text-lg text-gray-700 mb-3">{{ isDarkMode ? "Dark Mode is On" : "Light Mode is On" }}</p>

    </div>

  </div>
</template>

<style scoped>

</style>
