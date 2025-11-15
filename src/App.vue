<script setup>
import { reactive, ref } from 'vue';

const clr = ref('red');
const fntSize = ref('16px');
const fntWeight = ref('bold');

const styleObject = reactive({
  color: 'blue',
  backgroundColor: 'lightgray',
  padding: '10px',
  borderRadius: '5px'
});

const myStyle = reactive({
  color: 'orange',
  fontSize: '22px',
  fontWeight: '600'
});

const isActive = ref(true);

const classObject = reactive({
  'text-green-500': isActive.value,
  'bg-green-200': isActive.value,
  'text-base': isActive.value,
  'font-medium': isActive.value,
  'p-4': isActive.value,
  'rounded': isActive.value
});

const currentTabBg = ref('bg-red-500');
const currentTabClr = ref('text-white');

// setInterval(() => {
//   isActive.value = !isActive.value;
// }, 2000);

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Class & Style Binding</h1>

    <div class="topic-box">
      <h2 class="topic-header">Style Binding</h2>

      <p class="text-blue-600 underline">Normal Style</p>
      <p style="color: brown; background-color: lightyellow;">Dynamic Style with Object Syntax</p>

      <p class="text-blue-600 underline">Dynamic Style</p>
      <p v-bind:style="{ color: 'blue', fontSize: '18px', fontWeight: '500' }">This text is styled dynamically using object syntax with v-bind.</p>
      <p :style="{ color: 'green', fontSize: '20px' }">This text is styled dynamically using object syntax.</p>

      <p class="text-blue-600 underline">Using Reactive Variables</p>
      <p :style="{ color: clr, fontSize: fntSize, fontWeight: fntWeight }">
        This text uses reactive variables for styling: Color is {{ clr }}, Font Size is {{ fntSize }}, Font Weight is {{ fntWeight }}.
      </p>

      <p class="text-blue-600 underline">Using Style Object</p>
      <p :style="{ color: 'purple', backgroundColor: 'lavender', padding: '10px', borderRadius: '5px' }">
        This text is styled using a style object with multiple properties.
      </p>

      <p class="text-blue-600 underline">Using Style Reactive Object</p>
      <p :style="styleObject">
        This text is styled using a reactive style object.
      </p>

      <p class="text-blue-600 underline">Using Multiple Style Reactive Object</p>
      <p :style="[styleObject, myStyle]">
        This text is styled using multiple reactive style objects.
      </p>
    </div>

    <div class="topic-box">
      <h2 class="topic-header">Class Binding</h2>
      <p class="text-blue-600 underline">Normal Class</p>
      <p class="text-red-500 bg-yellow-200 p-2 rounded">This paragraph uses normal class binding with Tailwind CSS classes.</p>
      <p class="text-blue-600 underline">Dynamic Class</p>
      <p :class="{ 'text-green-500 bg-green-200': isActive, 'text-base font-medium p-4 rounded': isActive }">
        This paragraph uses dynamic class binding with an object syntax.
      </p>
      <p :class="['text-purple-500', 'bg-gray-200', 'p-2', 'rounded']">
        This paragraph uses dynamic class binding with an array syntax.
      </p>
      <p :class="[classObject, 'mt-4']">
        This paragraph uses a reactive class object for dynamic class binding.
      </p>
      <p :class="[currentTabBg, currentTabClr, 'p-3', 'rounded']">
        This paragraph uses reactive variables for dynamic class binding.
      </p>
      <p :class="[isActive ? currentTabBg : 'bg-amber-200', isActive ? currentTabClr : 'text-amber-500', 'p-3', 'rounded']">
        This paragraph uses reactive variables for dynamic class binding.
      </p>
    </div>

    


  </div>
</template>

<style scoped>

</style>
