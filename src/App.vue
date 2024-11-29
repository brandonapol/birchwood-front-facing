<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

// const googleSheetsData = async () => {
//   const headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   }
//   const response = await fetch('http://localhost:5242/sheets', { headers })
//   const data = await response.json()
//   console.log(data)
// }

</script>

<template>
  <div class="navbar-wrapper">
    <NavBar />
  </div>
  <!-- <div>
    {{ googleSheetsData() }}
  </div> -->

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

