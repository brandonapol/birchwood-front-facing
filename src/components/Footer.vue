<template>
    <div class="footer">
        <div class="links">
            <a href="https://github.com/brandonapol">GitHub</a>
            <a href="https://www.linkedin.com/in/brandonapol/">LinkedIn</a>
            <a href="mailto:brandonapol@cedarville.edu?subject=Hello%20there&body=Just%20wanted%20to%20say%20hello.">Email</a>
            <a href="https://github.com/brandonapol/Birchwood">Birchwood</a>
        </div>
        <div class="copyright">
            &copy; Brandon Apol {{ currentYear }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const currentYear = ref<string>("");

onMounted(() => {
    currentYear.value = String(new Date().getFullYear())
})
</script>

<style scoped>
.footer {
  margin: 1% 10%;
  border-top: 2px solid #B1B195;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #000000; 
}

.links {
    color: white;
    display: flex;
    flex-direction: row;
    text-decoration: none;
}

a {
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  margin: 0px 5px;
  background-color: #000000;
  border: 1px solid black;
  border-radius: 5px;
  transition: background-color 0.2s ease;
}

a:hover {
    background-color: #B1B195;
}

.copyright {
    color: white;
}
</style>