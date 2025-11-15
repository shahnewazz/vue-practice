<script setup>
import { reactive, ref } from 'vue';
const numbers = reactive({ a: 10, b: 20 });
const isChanged = reactive({ value: false });

setTimeout(() => {
  numbers.a = 30;
  isChanged.value = true;
}, 2000);

const deepReactive = reactive({
  num: {count: 0},
  users: ['Alice', 'Bob']
});

setTimeout(() => {
  deepReactive.num.count = 10;
  deepReactive.users.push('Charlie');
}, 2000);

const num1 = ref(5);
const num2 = ref(15);

setTimeout(() => {
  num1.value = 25;
  num2.value = 35;
}, 2000);

const obj = { count : ref(0) };
setTimeout(() => {
  obj.count.value++;
}, 3000);

// also can be distructured
const { count:mynumber } = obj;
console.log(mynumber.value); // ref(0)

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600 mb-7">Reactivity</h1>
    <p>
      Reactivity is a core feature of Vue.js that allows the framework to efficiently update the DOM when the underlying data changes. It is achieved through a system of reactive data binding, where Vue tracks changes to data properties and automatically updates the view to reflect those changes.
    </p>

    <div class="topic-box">
      <h2 class="topic-header">reactive()</h2>
      <p>
        We can create a reactive object using the <code>reactive()</code> function.
      </p>
      <ul>
        <li> It returns a reactive proxy of the original object, which is not equivalent to the original object.</li>
        <li>The reactive conversion is <i>deep</i>: it affects all nested properties</li>
        <li>It works for objects and arrays or collections like Map and Set, but not for primitive values like numbers or strings.</li>
      </ul>
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Demo</h2>
      <small>After 2 seconds, the value of 'a' will change from 10 to 30.</small>
      <p>Sum : {{ numbers.a + numbers.b }}</p> <span :class="isChanged.value ? 'text-green-500' : 'text-red-500'">{{ isChanged.value ? "Value changed" : "Value not changed" }}</span>
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Deep Reactivity</h2>
      <small>After 2 seconds, the count will change from 0 to 10, and a new user will be added.</small>
      <p>Deep reactivity means that nested properties within a reactive object are also reactive. Changes to nested properties will trigger updates in the DOM.</p>
      <p>Count: {{ deepReactive.num.count }}</p>
      <p>Users: {{ deepReactive.users.join(', ') }}</p>
    </div>
    <div class="topic-box">
      <h2 class="topic-header">ref()</h2>
      <p>
        For primitive values like numbers or strings or booleans, we can use the <code>ref()</code> function to create a reactive reference.
      </p>
      <ul>
        <li>
          It returns a reactive object with a single property called <code>value</code> that holds the primitive value.
        </li>
        <li>
          Its mutable via the <code>value</code> property.
        </li>
        <li>
          When refs are used in templates, Vue automatically unwraps them, allowing direct access to the underlying value without needing to reference the <code>value</code> property.
        </li>
      </ul>
      <small>After 2 seconds, num1 will change from 5 to 25, and num2 will change from 15 to 35.</small>
      <p>Num1: {{ num1 }}</p>
      <p>Num2: {{ num2 }}</p>
      <p>Sum new Numbers: {{ num1 + num2 }}</p> 
      <p>
        Object with ref property count: {{ obj.count }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
