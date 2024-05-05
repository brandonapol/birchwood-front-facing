<template>
    <div @click="goBackToBlogList()">
      <a>Back to Blogs</a>
    </div>
    <SingleBlog v-if="blogPost" :post="blogPost"/>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Ref } from 'vue';
  import { useRoute, useRouter, type RouteLocationNormalizedLoaded } from 'vue-router';
  import SingleBlog from '@/components/SingleBlog.vue';
  import type { Blog } from "@/assets/types"; 
  import recipes from './../assets/data/recipes.json';
  
  const route: RouteLocationNormalizedLoaded = useRoute();
  const blogPost: Ref<Blog | undefined> = ref<Blog>();
  
  onMounted(() => {
  const postId: string | string [] = route.params.title;
  const foundPost: Blog | undefined = recipes.find(r => r.title === postId);
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

  const router = useRouter();

  const goBackToBlogList = () => {
    router.go(-1);
  };
</script>

<style scoped>
a {
  color: white;
}
</style>