<template>
  <div class="content">
    <div class="center">
      <p>
          This repository is the code for my recipe website. I mostly use it for the
          opportunity to play around with CICD and domain stuff. I also use it when
          I forget what I was doing in the middle of the grocery store, and to send
          friends recipes I use. The food here is pretty good. I call it Birchwood
          because I lived in a birch wood for several years and really fell in love
          with it. Originally this was a series of microservices (see <a href="https://github.com/brandonapol/Birchwood">Birchwood</a>), but I didn't feel
          like paying for an EKS cluster after I finished standing it up. Since
          birch trees are a colony organism (what we see as 'trees' are the
          above-ground portions of a larger entity connected by roots) it made sense
          both for the Birch woods to reflect who I am as well as a natural
          representation of microservices connected by a service mesh. But I wanted
          something cheap and automatic and to figure out the hackiest way possible
          to basically do the same thing, so here we are. Enjoy!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.center {
  display: flex;
}

.content {
  margin: 5% 10%;
  padding: 5%;
  background-color: #CACAAA;
}
</style>
