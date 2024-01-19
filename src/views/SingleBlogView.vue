<template>
    <SingleBlog v-if="blogPost" :post="blogPost"/>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import SingleBlog from '@/components/SingleBlog.vue';
  import type { Blog } from "@/assets/types"; 
  import recipes from './../assets/data/recipes.json';
  
  const route = useRoute();
  const blogPost = ref<Blog>();
  
  onMounted(() => {
  const postId = route.params.id;
  // Assuming the id in your recipes is a number, parse the postId from the route params
  const numericPostId = Number(postId);
  // Find the blog post that matches the id from the route params
  const foundPost = recipes.find(r => r.id === numericPostId);
  if (foundPost) {
    blogPost.value = foundPost as Blog;
  } else {
    blogPost.value =     {
        "id": 3,
        "title": "Default Title",
        "ingredients": [],
        "instructions": []
    }
  }
});
</script>

<style scoped>
/* { id: string | number; title: string; ingredients: string[]; instructions: string[]; notes?: string[] | undefined; } | null */
</style>

