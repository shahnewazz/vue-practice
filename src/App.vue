<script setup>
import { inject } from 'vue';

const app_name = inject('app_name');
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Plugins Demo</h1>
  </div>

  <div class="mt-4">
    <p v-font-size="'24px'">
      This paragraph uses a custom directive from the TestPlugin to set its font size.
    </p>
  </div>

  <div class="mt-4">
    <p>
      Injected App Name Via Plugin: <strong>{{ app_name }}</strong>
    </p>
  </div>

  <div class="mt-4">
    <UserCard />
  </div>

  <div class="mt-4">
    <p>
      App Version Via Plugin: <strong>{{ $appVersion }}</strong>
    </p>
  </div>

  <div class="mt-4">
    <p>
      The File path is: <strong>{{ $filePath('example.txt') }}</strong>
    </p>
  </div>

</template>

<style scoped>

</style>
