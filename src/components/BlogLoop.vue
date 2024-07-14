<template>
  <div v-for="post in blogs" :key="post.id" @click="goToPost(post.id)">
    <a>{{ post.title }}</a>
  </div>
  <div v-for="post in blogs" :key="post.id" @click="goToPost(post.id)">
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

const goToPost = (id: string | number) => {
  router.push({ name: "SingleBlog", params: { id } });
};
</script>

<style scoped>
a {
  color: white;
}
</style>
