<template>
  <main>
    <div class="container">
      <BlogLoop :recipes="recipesAsJson" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Ref, ComputedRef } from "vue";
import type { Blog } from "../assets/types";
import BlogLoop from "../components/BlogLoop.vue";
import recipes from "../assets/data/recipes";


const myRecipes: Ref<Blog[]> = ref(recipes);
const recipesAsJson: ComputedRef<string> = computed(() =>
  JSON.stringify(myRecipes.value)
);
</script>

<style>
.container {
  padding: 5% 10%;
  margin: 5% 10%;
  background-color: #B1B195;
}
</style>