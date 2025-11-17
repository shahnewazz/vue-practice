<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    modelModifiers: {
        default: () => ({})
    }
})

const emit = defineEmits(['update:modelValue']);

const testValue = computed({
    get() {
        return props.modelValue;
    },
    set(val) {
        let modifiedValue = val.toUpperCase();

        emit('update:modelValue', modifiedValue);
    }
})

</script>

<template>
  <input 
        class="border p-2 rounded" 
        placeholder="Type something..." 
        v-model="testValue" 
    />
</template>

<style scoped>

</style>