<template>
  <div class="border-bottom">
    <div v-for="post in blogs" :key="post.id" @click="goToPost(post.title)">
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
.border-bottom {
  padding-bottom: 3%;
  border-bottom: 5px solid #000000;
}
</style>