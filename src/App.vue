<script setup>
import { isProxy, isReactive, isRef, reactive, ref, toRef, toRefs, unref } from 'vue';

const number = ref(10);
const profileURL = ref('https://example.com/profile.jpg');
const user = reactive({
  name: 'Alice',
  age: 30
});
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Reactivity Utilities</h1>

    <div class="topic-box">
      <h2 class="topic-header">Utilities</h2>
      <ul>
        <li>
          <code>isRef()</code> - Check if a value is a Vue ref.
        </li>
        <li>
          <code>isReactive()</code> - Check if a value is a reactive object.
        </li>
        <li>
          <code>isProxy()</code> - Check if a value is a proxy object.
        </li>
        <li>
          <code>unref()</code> - Get the value of a ref or return the value if it's not a ref.
        </li>
        <li>
          <code>toRef()</code> - Create a ref that points to a property on a reactive object.
        </li>
        <li>
          <code>toRefs()</code> - Create refs for all properties on a reactive object. It converts a reactive object to a plain object where each property is a ref.
        </li>
      </ul>
      <h3>Examples:</h3>
      <div class="example">
        <p><strong>isRef:</strong> {{ isRef(number) }}</p>
        <p><strong>isReactive:</strong> {{ isReactive(user) }}</p>
        <p><strong>isProxy:</strong> {{ isProxy(user) }}</p>
        <p><strong>unref:</strong> {{ unref(number) }}</p>
        <p><strong>toRef (user.name):</strong> {{ toRef(user, 'name').value }}</p>
        <p><strong>toRefs (user):</strong> Name - {{ toRefs(user).name.value }}, Age - {{ toRefs(user).age.value }}</p>
    </div>
  </div>
  </div>
</template>

<style scoped>

</style>
