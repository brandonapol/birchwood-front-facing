<template>
  <div class="content">
    <div class="center">
      <p class="body-text">
        This is my recipe website. I mostly use it for
        the opportunity to play around with front-end, CICD and domain stuff. I also use it
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
      <img :src="imageSrc" alt="Birch wood forest" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import type { Ref } from "vue";

const monthToImageName = (month_num: number): Promise<any> => {
  switch (month_num) {
    case 0:
    case 1:
    case 11:
      return import("@/assets/images/snow_birch.jpeg");
    case 2:
    case 3:
    case 4:
      return import("@/assets/images/birch_stack.jpeg");
    case 5:
    case 6:
    case 7:
      return import("../assets/images/summer_sun_birch.jpeg");
    case 8:
    case 9:
    case 10:
      return import("@/assets/images/fall_birch_2.jpeg");
    default:
      return import("@/assets/images/birch_stack.jpeg");
  }
};

const imageSrc: Ref<string> = ref<string>("");

const getSeason = async (): Promise<any> => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const image_name = await monthToImageName(month)
  imageSrc.value = image_name.default;
};
onMounted(() => {
  getSeason();
})
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
