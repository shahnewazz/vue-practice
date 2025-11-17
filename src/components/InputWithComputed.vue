<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  }
});

</script>

<template>
  <input 
        class="border p-2 rounded" 
        placeholder="Type something..." 
        v-model="value"
    />
</template>

<style scoped>

</style>