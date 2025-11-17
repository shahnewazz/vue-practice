<script setup>
import { ref } from 'vue';
import User from './components/User.vue';
import ValidationProp from './components/ValidationProp.vue';
import MultipleObjectProp from './components/MultipleObjectProp.vue';
import CustomValidator from './components/CustomValidator.vue';

const name = ref("Shahnewaz Sakil");
const age = ref(25);

const addresses = [
  { street: "123 Main St", city: "Dhaka", country: "Bangladesh" },
  { street: "456 Elm St", city: "Chittagong", country: "Bangladesh" }
];

const employee = {
  name: "Rahim",
  company: "ABC Corp"
}

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Prop</h1>

    <User :name="name" :age="age" />
    <User name="John Doe" age="30" />
    <ValidationProp name="Alice" :age="28" :addresses="addresses" :employee="employee" />
    <MultipleObjectProp v-bind="employee" />
    <CustomValidator name="Shahnewaz" :age="22" company="Microsoft"/>
  </div>
</template>

<style scoped>

</style>
