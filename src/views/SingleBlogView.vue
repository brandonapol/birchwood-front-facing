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
  const postId = route.params.id;
  const numericPostId = Number(postId);
  const foundPost = recipes.find((r) => r.id === numericPostId);
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
  padding: 0% 10%;
  margin: 5% 10%;
  padding: 5%;
  background-color: #B1B195;
}
</style>
