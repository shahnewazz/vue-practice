<script setup>
const divId = 'demo-text';
const heroAreaId = 'hero-area';
const profileLink = 'https://example.com/user/profile';
const linkClass = 'text-blue-500 hover:text-blue-700 hover:underline';
const attributes = {
  id: 'demo-text',
  class: 'text-lg text-gray-700',
  title: 'Demo Text',
  'data-info': 'additional-info'
};
const attributeName = 'data-dynamic';
const profileAttr = 'data-profile-link';
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Attribute Binding</h1>

    <div class="">
      <div class="topic-box">
        <h2 class="topic-header">Basic Attribute Binding</h2>
        <div v-bind:id="divId" class="text-lg text-gray-700">
          You can use  <code>v-bind:id</code> to bind attributes dynamically.
        </div>
        <div :id="heroAreaId" class="text-lg text-gray-700">
           You can also use <code>:id</code> as a shorthand for <code>v-bind:id</code>.
        </div>
        <div class="">
          <a :href="profileLink" :class="linkClass">Go to Profile</a>
        </div>
      </div>
      <div class="topic-box">
        <h2 class="topic-header">Object of Attributes</h2>
        <pre>
&lt;div v-bind="{ id: 'demo-text', title: 'Demo Text' }"&gt;
  You can bind multiple attributes using an object.
&lt;/div&gt;
        </pre>
        <div v-bind="attributes">
          This div has multiple attributes bound using an object.
          </div>  
      </div>
      <div class="topic-box">
        <h2 class="topic-header">Dynamic Arguments</h2>
        <div v-bind:[attributeName]="'dynamic-value'">
          This div has a dynamically bound attribute <code>data-dynamic="dynamic-value"</code>.
        </div>
        <div :[attributeName]="'dynamic-value'">
          This div has a dynamically bound attribute <code>data-dynamic="dynamic-value"</code>.
        </div>
        <div :[profileAttr]="profileLink">
          This div has a dynamically bound attribute <code>data-profile-link="{{ profileLink }}"</code>.
        </div>
      </div>
      <div class="topic-box">
        <h2 class="topic-header">Boolean Attribute</h2>
        <button v-bind:disabled="true" class="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Disabled Button
        </button>
        <button :disabled="false" class="bg-blue-500 text-white px-4 py-2 rounded">
          Enabled Button
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
