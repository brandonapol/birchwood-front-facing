<template>
  <div class="content">
    <div class="center">
      <p class="body-text">
        This repository is the code for my recipe website. I mostly use it for
        the opportunity to play around with CICD and domain stuff. I also use it
        when I forget what I was doing in the middle of the grocery store, and
        to send friends recipes I use. The food here is pretty good. I call it
        Birchwood because I lived in a birch wood for several years and really
        fell in love with it. Originally this was a series of microservices (see
        <a href="https://github.com/brandonapol/Birchwood">Birchwood</a>),
      </p>
      <p class="body-text">
        but I didn't feel like paying for an EKS cluster after I finished
        standing it up. Since birch trees are a colony organism (what we see as
        'trees' are the above-ground portions of a larger entity connected by
        roots) it made sense both for the Birch woods to reflect who I am as
        well as a natural representation of microservices connected by a service
        mesh. But I wanted something cheap and automatic and to figure out the
        hackiest way possible to basically do the same thing, so here we are.
        Enjoy!
      </p>
    </div>
    <div class="image">
      <img :src="getSeason()" alt="Birch wood forest" />
    </div>
  </div>
</template>

<script setup lang="ts">
const monthToImageName = (month_num: number): string => {
  switch (month_num) {
    case 0:
    case 1:
    case 11:
      return "snow_birch.jpeg";
    case 2:
    case 3:
    case 4:
      return "birch_stack.jpeg";
    case 5:
    case 6:
    case 7:
      return "summer_sun_birch.jpeg";
    case 8:
    case 9:
    case 10:
      return "fall_birch_2.jpeg";
    default:
      return "birch_stack.jpeg";
  }
};

const getSeason = (): string => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const image_name = monthToImageName(month)
  return `/src/assets/images/${image_name}`
};
</script>

<style scoped>
.image {
  max-width: 50%;
  margin: 0 auto; /* Center the image */
  padding-top: 5%;
}

.image img {
  width: 100%; /* Ensure the image scales to the width of its container */
}
.center {
  display: flex;
}

.content {
  margin: 5% 10%;
  padding: 5%;
  background-color: #b1b195;
  display: flex;
  flex-direction: column;
}

.body-text {
  padding: 0% 2%;
}

@media (max-width: 768px) {
  .center {
    display: flex;
    flex-direction: column;
  }

  .content {
    flex-direction: column;
    margin: 5%;
    padding: 5%;
  }

  .body-text {
    padding: 0%;
  }
}
</style>
