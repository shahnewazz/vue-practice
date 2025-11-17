<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    canDrive: {
        type: Boolean,
        default: false
    },
    addresses: {
        type: Array,
        default: () => []
    },
    employee: {
        type: Object,
        default: () => ({})
    }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-green-600">Validation Prop</h1>
    <p class="text-lg">Name: {{ name }}</p>
    <p class="text-lg">Age: {{ age }}</p>
    <p class="text-lg">Can Drive: {{ canDrive ? "Yes" : "No" }}</p>
    <div v-if="addresses.length">
      <h2 class="text-xl font-medium mt-4">Addresses:</h2>
      <ul class="list-disc list-inside">
        <li v-for="(address, index) in addresses" :key="index">
          {{ address.street }}, {{ address.city }}, {{ address.country }}
        </li>
      </ul>
    </div>
    <div v-if="employee.name">
      <h2 class="text-xl font-medium mt-4">Employee Info:</h2>
      <p class="text-lg">Name: {{ employee.name }}</p>
      <p class="text-lg">Company: {{ employee.company }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>