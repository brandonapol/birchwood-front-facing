<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="navbar-wrapper">
    <NavBar />
  </div>

  <RouterView />
</template>

<style>
* {
  font-family: "Kanit", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000000; 
}

.navbar-wrapper {

}


</style>

