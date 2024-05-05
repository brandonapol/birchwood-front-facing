<template>
  <div v-for="post in blogs" :key="post.id" @click="goToPost(post.title)">
    <a>{{ post.title }}</a>
  </div>
  <div v-for="post in blogs" :key="post.id" @click="goToPost(post.title)">
    <SingleBlog :post="post" />
  </div>
</template>

<script setup lang="ts">
import SingleBlog from "./SingleBlog.vue";
import type { Blog as BlogType } from "@/assets/types";
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import recipes from './../assets/data/recipes.json'

const myRecipes: Ref<BlogType[]> = ref(recipes)
const recipesAsJson: ComputedRef<string> = computed(() => JSON.stringify(myRecipes.value));
const blogs: BlogType[] = JSON.parse(String(recipesAsJson.value));

const router = useRouter();
const goToPost = ( title: string ) => {
  router.push({ name: 'SingleBlog', params: { title } })
}

</script>

<style scoped>

a {
  color: white;
}

</style>
