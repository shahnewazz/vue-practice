<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
        validator(propValue){
            return propValue.length >= 3;
        }
    },
    age: {
        type: Number,
        default: 0,
        validator(propValue){
            return propValue > 0;
        }
    },
    company: {
        type: String,
        validator: (propValue) => {
            return ['Google', 'Facebook', 'Apple', 'Microsoft'].includes(propValue);
        }
    }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold text-red-600">Custom Validator Prop</h1>
    <p class="text-lg">Name: {{ name }}</p>
    <p class="text-lg">Age: {{ age }}</p>
  </div>
</template>

<style scoped>

</style>