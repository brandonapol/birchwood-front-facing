<template>
  <div class="blogtile" :id="String(post.id)" v-bind="attrs">
    <div class="titlesection">
      <div class="title">{{ post.title }}</div>
    </div>
    <div class="ingredients-section">
      <h4>Ingredients</h4>
      <div v-for="(ingredient, index) in post.ingredients" :key="index" class="ingredient">
          {{ ingredient }}
      </div>
    </div>
    <div class="instructions-section">
      <h4>Instructions</h4>
      <div v-for="(instruction, index) in post.instructions" :key="index" class="instructions">{{ instruction }}</div>
    </div>
    <div class="notes-section">
      <h4>Notes</h4>
      <div v-for="(note, index) in post.notes" :key="index" class="notes">{{ note }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType, useAttrs } from "vue";
import type { Blog } from "@/assets/types"; 

const props: { readonly post: Blog } = defineProps({
  post: {
    type: Object as PropType<Blog>,
    required: true
  },
});

const attrs = useAttrs();
</script>

<style scoped>
    .blogtile {
        color: black;
        background-color: rgb(201, 204, 206);
        margin: 10px 0px;
        padding: 10px;
        display: flex;
        flex-direction: column;
    }

    .title {
      font-size: larger;
      font-weight: 700;
    }

    .titlesection {
      display: flex;
      justify-content: center;
      padding: 5px;
    }

    .ingredients-section {
      padding: 5px 0px;
      margin: 5px 0px;
    }

    .instructions-section {
      padding: 5px 0px;
      margin: 5px 0px;
    }

    .notes-section {
      padding: 5px 0px;
      margin: 5px 0px;
    }
</style>
