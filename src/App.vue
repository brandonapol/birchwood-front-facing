<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="navbar">
      <div class="name nav-tabs">
        What's Brandon Eating
      </div>
      <div class="nav-tabs">
        <RouterLink class="navbar-item" :to="'/'">Home</RouterLink>
        <RouterLink class="navbar-item" :to="'/blog'">Blog</RouterLink>
      </div>
    </div>
  </header>
  <div class="space"></div>

  <RouterView />
</template>

<style>
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #291d1a; 
}

.header {
  background-color: #87a0b2; 
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #87a0b2; 
}

.space {
  height: 10px;
}

.nav-tabs {
  display: flex;
  gap: 10px;
}

.navbar-item {
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #87a0b2; 
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
}

.navbar-item:hover {
  background-color: #291d1a; /* Dark brown for hover effect */
}

.name {
  font-size: 1.5em;
  color: white;
}

/* Responsive Design */
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-tabs {
    width: 100%;
    justify-content: space-around;
  }

  .name {
    margin-bottom: 10px;
  }
}
</style>

