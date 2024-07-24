<template>
  <header>
    <div class="navbar">
      <RouterLink class="name nav-tabs" :to="'/'">What's Brandon Eating</RouterLink>
      <div class="nav-tabs">
        <RouterLink class="navbar-item" :to="'/'">Home</RouterLink>
        <RouterLink class="navbar-item" :to="'/recipes'">Recipes</RouterLink>
      </div>
    </div>
  </header>
  <div class="space"></div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.navbar {
  margin: 1% 10%;
  border-bottom: 2px solid #B1B195;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #000000; 
}

.header {
  background-color: #000000; 
  padding: 1% 10%;
}

.space {
  height: 10px;
}

.nav-tabs {
  display: flex;
  text-decoration: none;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #000000; 
  border: 1px solid black;
  border-radius: 5px;
  color: white;
}

.navbar-item {
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #000000; 
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s ease;
}

.navbar-item:hover {
  background-color: #B1B195; /* Dark brown for hover effect */
}

.name {
  font-size: 1.5em;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #000000; 
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s ease;
}

.name:hover {
  background-color: #B1B195;
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
