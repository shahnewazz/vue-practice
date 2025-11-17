<script setup>
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
    <input 
        class="border p-2 rounded" 
        placeholder="Type something..." 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)" 
    />
</template>

<style scoped>

</style>