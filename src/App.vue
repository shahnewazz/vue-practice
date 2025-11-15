<script setup>
import { computed, ref } from 'vue';
const firstName = ref('John')
const lastName = ref('Doe')

const fullName = () => {
  return `${firstName.value} ${lastName.value}`
}

setTimeout(() => {
  firstName.value = 'Shanewaz'
  lastName.value = 'Sakil'
}, 2000)

const computedFullName = computed(() => {
  console.log('Computed property runs')
  return `${firstName.value} ${lastName.value}`
})

const tryToChangeComputed = () => {
  // This will give a runtime warning
  computedFullName.value = 'New Name'
}
tryToChangeComputed()

const writableComputedFullName = computed({
  get(){
    return `${firstName.value} ${lastName.value}`
  },
  set(value){
    const names = value.split(' ')
    firstName.value = names[0]
    lastName.value = names[1]
  }
})

setTimeout(() => {
  writableComputedFullName.value = 'Alice Wonderland'
}, 4000)

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">Methods & Computer Property</h1>

    <div class="topic-box">
      <h2 class="topic-header">Methods</h2>
      <p>
        You can define methods as like normal javascript functions inside the script setup tag.
        In this example, we have defined a method called <code>fullName</code> which concatenates the first name and last name.
        After 2 seconds, the first name and last name are updated, and the full name will reflect the changes when the method is called.
      </p>
      <p class="mt-4">
        Full Name: <strong>{{ fullName() }}</strong>
      </p>
    </div>
    <div class="topic-box">
      <h2 class="topic-header">Computed Properties</h2>
      <ul>
        <li>
          It takes a getter functions that returns a read-only reactive ref object for the returned value from the getter.
        </li>
        <li>
          It automatically tracks its dependencies and re-evaluates when any of its dependencies change.
        </li>
        <li>
          The returned value is a computed ref, which means you access its value using the .value property.
        </li>
        <li>
          It caches the result until its dependencies change, improving performance by avoiding unnecessary recalculations.
        </li>
        <li>
          It runs only when its dependencies change, not on every render. But it will run once initially to set up the value.
        </li>
        <li>
          Its returns value is read-only by default. If you try to assign a value to it, you will get an runtime warning. If you need a writable computed property, you can provide a setter function as the second argument.
        </li>
      </ul>
      <p class="mt-4">
        Full Name: <strong>{{ computedFullName }}</strong>
      </p>
      <p class="mt-4">
        Writable Computed Full Name: <strong>{{ writableComputedFullName }}</strong>
      </p>
      <small class="text-gray-500">
        (After 4 seconds, the writable computed property will update the first name and last name)
      </small>
    </div>

  </div>
</template>

<style scoped>

</style>
