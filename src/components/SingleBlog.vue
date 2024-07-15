<template>
  <div class="blogtile" :id="String(props.post.id)">
    <div class="titlesection">
      <div class="blog title">{{ props.post.title }}</div>
    </div>
    <div class="ingredients-section">
      <h4>Ingredients</h4>
      <div
        v-for="(ingredient, index) in props.post.ingredients"
        :key="index"
        class="ingredient"
      >
        {{ ingredient }}
      </div>
    </div>
    <div class="instructions-section">
      <h4>Instructions</h4>
      <div
        v-for="(instruction, index) in props.post.instructions"
        :key="index"
        class="blog instructions"
      >
        {{ instruction }}
      </div>
    </div>
    <div class="notes-section">
      <h4>Notes</h4>
      <div
        v-for="(note, index) in props.post.notes"
        :key="index"
        class="blog notes"
      >
        {{ note }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Blog } from "@/assets/types";

const computedId = computed(() => String(props.post.id));

const props = defineProps({
  post: {
    type: Object as () => Blog,
    default: () => {},
  },
});
</script>

<style scoped>

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

.blogtile {
  margin: 3% 0%;
  border-top: 5px solid #000000;
  padding-top: 3%;
}
</style>
