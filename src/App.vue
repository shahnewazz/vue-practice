<script setup>
import { reactive } from 'vue';


const programmingTopics = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Python' },
  { id: 3, name: 'Java' },
  { id: 4, name: 'C#' },
  { id: 5, name: 'Ruby' },
];

const employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Designer' },
  { id: 3, name: 'Charlie', position: 'Manager' },
];

const nestedData = [
  {
    id: 1,
    category: 'Fruits',
    items: [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
    ],
  },
  {
    id: 2,
    category: 'Vegetables',
    items: [
      { id: 3, name: 'Carrot' },
      { id: 4, name: 'Lettuce' },
    ],
  },
  {
    id: 3,
    category: 'Dairy',
    items: [
      { id: 5, name: 'Milk' },
      { id: 6, name: 'Cheese' },
    ],
  },
  {
    id: 4,
    category: 'Grains',
    items: [
      { id: 7, name: 'Rice' },
      { id: 8, name: 'Wheat' },
    ],
  }
];

const booksData = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genres: ['Classic', 'Fiction'],
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genres: ['Classic', 'Fiction'],
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    genres: ['Dystopian', 'Science Fiction'],
  },
  {   
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genres: ['Classic', 'Romance'],
  }
];

const course = reactive({
  title: 'Vue.js Basics',
  description: 'Learn the basics of Vue.js framework.',
  duration: '4 weeks',
});

</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold text-blue-600">List Rendering Example</h1>

    <div class="topic-box">
      <h2 class="topic-header">For Loop</h2>

      <ul class="topic-list mb-5">
        <li v-for="(topic, index) in programmingTopics" :key="topic.id" class="topic-item">
         {{ index + 1 }} {{ topic.name }}
        </li>
      </ul>

      <ul class="topic-list mb-5">
        <li v-for="(employee, index) in employees" :key="employee.id" class="topic-item">
         {{ index + 1 }} {{ employee.name }} - {{ employee.position }}
        </li>
      </ul>

      <div v-for="category in nestedData" :key="category.id" class="mb-5">
        <h3 class="text-2xl font-semibold">{{ category.category }}</h3>
        <ul>
          <li v-for="item in category.items" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <div v-for="book in booksData" :key="book.id" class="mb-5">
        <h3 class="text-2xl font-semibold">{{ book.title }}</h3>
        <p class="italic">by {{ book.author }}</p>
        <ul class="list-disc list-inside">
          <li v-for="(genre, index) in book.genres" :key="index">
            {{ genre }}
          </li>
        </ul>
      </div>

      <div class="course-info border p-4 rounded-lg bg-gray-50">
        <h1 v-for="(value, key, index) in course" :key="index">{{ index + 1 }} {{ key.toUpperCase() }}: {{ value }}</h1>
      </div>
    </div>

    <div class="topic-box">
      <h2 class="topic-header">v-for with Range</h2>

      <ul class="topic-list mb-5">
        <li v-for="n in 5" :key="n" class="topic-item">
         Item {{ n }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
