<template>
  <div class="border-bottom">
    <h2 class="center">All Recipes</h2>
    <div v-for="post in blogs" class="nav-tabs" :key="post.id" @click="goToPost(post.title)">
      <a>{{ post.title }}</a>
    </div>
  </div>
  <div v-for="post in blogs" :key="post.id" @click="goToPost(post.title)">
    <SingleBlog :post="post" />
  </div>
</template>

<script setup lang="ts">
import SingleBlog from "./SingleBlog.vue";
import type { Blog as BlogType } from "../assets/types";
import { useRouter } from "vue-router";

const router = useRouter();

const props: { recipes: string } = defineProps({
  recipes: {
    type: String,
    default: "[]",
  },
});
const blogs: BlogType[] = JSON.parse(props.recipes);

const goToPost = (title: string | number) => {
  router.push({ name: "SingleBlog", params: { title } });
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: 700;
}

.border-bottom {
  padding-bottom: 3%;
  border-bottom: 5px solid #000000;
}

.nav-tabs {
  padding: 0% 3% 0% 3%;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

.nav-tabs:hover {
  background-color: #909079;
  cursor: pointer;
}
</style>