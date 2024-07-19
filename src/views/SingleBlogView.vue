<template>
  <div class="container">
    <SingleBlog v-if="blogPost" :post="blogPost" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import SingleBlog from "../components/SingleBlog.vue";
import type { Blog } from "../assets/types";
import recipes from "../assets/data/recipes";

const route = useRoute();
const blogPost = ref<Blog>();

onMounted(() => {
  const postTitle = route.params.title;
  const numericPostTitle: string = String(postTitle);
  const foundPost = recipes.find((r) => r.title === numericPostTitle);
  if (foundPost) {
    blogPost.value = foundPost as Blog;
  } else {
    blogPost.value = {
      id: 3,
      title: "Default Title",
      ingredients: [],
      instructions: [],
      notes: [],
      nutrition: [],
    };
  }
});
</script>

<style scoped>
.container {
  padding: 5% 10%;
  margin: 5% 10%;
  background-color: #B1B195;
}
</style>
