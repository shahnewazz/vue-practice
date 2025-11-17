<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';
import Count from './components/Count.vue';
import CountWithArg from './components/CountWithArg.vue';
import EventValidation from './components/EventValidation.vue';
import Input from './components/Input.vue';
import InputWithComputed from './components/InputWithComputed.vue';

function showChildEvent(message) {
  alert(message);
}

const count = ref(0);

function increaseWithArg(n) {
  count.value += n;
}

// declare emits
// const emit = defineEmits(['increment']);
const emit = defineEmits({
  fsubmit: ({name}) => {
    return typeof name === 'string' && name.length > 0;
  }
});


function submitForm(name) {
  emit('fsubmit', { name });
  alert('Form submitted!' + name);
}

const fullName = ref('');
const address = ref('');

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Component Event</h1>
    <div class="topic-box">
      <p class="topic-content">A componet can emit events to its parent component using the <code>emit</code> function provided by the <code>setup</code> context.</p>
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Emitting Events</h2>
      <div class="mt-6">
        <h2 class="text-2xl font-semibold mb-4">Count: {{ count }}</h2>
        <Count @increment="count++" />
        <CountWithArg @increment="(n) => count += n" />
        <CountWithArg @increment="increaseWithArg" />
      </div>

      <ChildComponent @child-event="showChildEvent" />
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Event Validation</h2>
      <EventValidation @fsubmit="submitForm" />
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Custom Event with v-model</h2>
      <p>Full Name: {{ fullName }}</p>
      <Input v-model="fullName" />
      <p>Address: {{ address }}</p>
      <Input v-model="address" />
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Custom Event with computed v-model</h2>
      <p>Full Name: {{ fullName }}</p>
      <InputWithComputed v-model="fullName" />
      <p>Address: {{ address }}</p>
      <InputWithComputed v-model="address" />
    </div>
  </div>
</template>

<style scoped>

</style>
