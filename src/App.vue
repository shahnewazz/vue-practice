<script setup>
import ArchivePosts from './components/ArchivePosts.vue';
import RecentPosts from './components/RecentPosts.vue';
import LatestPosts from './components/LatestPosts.vue';
import { ref } from 'vue';

const currentTab = ref('Archive');

const tabs = {
  Archive: ArchivePosts,
  Recent: RecentPosts,
  Latest: LatestPosts,
}

</script>

<template>
  <div class="container mx-auto p-4">
    <div class="text-4xl font-bold text-blue-600">Dynamic Component</div>

    <button @click="currentTab = 'Archive'" class="mr-2 px-4 py-2 bg-gray-200 rounded">Archive Posts</button>
    <button @click="currentTab = 'Recent'" class="mr-2 px-4 py-2 bg-gray-200 rounded">Recent Posts</button>
    <button @click="currentTab = 'Latest'" class="px-4 py-2 bg-gray-200 rounded">Latest Posts</button>

    <component :is="tabs[currentTab]" class="mt-4"></component>
  </div>
</template>

<style scoped>

</style>
