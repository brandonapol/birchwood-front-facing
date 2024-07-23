<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="navbar-wrapper">
    <NavBar />
  </div>

  <RouterView />
  <Footer />
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

</style>

