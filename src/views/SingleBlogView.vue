<template>
  <div class="container">
    <div>
      <RouterLink class="routerlink back-button" :to="'/recipes'">
          Back to all recipes
      </RouterLink>
    </div>
    <SingleBlog v-if="blogPost" :isSingleView="isSingleView" :post="blogPost" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import SingleBlog from "../components/SingleBlog.vue";
import type { Blog } from "../assets/types";
import recipes from "../assets/data/recipes";

const route = useRoute();
const blogPost = ref<Blog>();

const isSingleView = true

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

.routerlink {
  text-decoration: none;
  width: 250px;
}

.back-button {
  display: flex;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #000000; 
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.back-button:hover {
  background-color: #B1B195;
}
</style>
