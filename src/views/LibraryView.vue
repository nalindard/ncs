<script setup>
import LeftFeed from '@/components/feeds/LeftFeed.vue';
import MainFeed from '@/components/feeds/MainFeed.vue';
import RightFeed from '@/components/feeds/RightFeed.vue';
import BackgroundAnimation from '../components/BackgroundAnimation.vue';

</script>

<template>
  <div class="flex flex-row justify-between w-screen h-screen relative">
    <LeftFeed class="bg-purple-200 rounded-tr-3xl rounded-br-3xl w-96 h-full absolute top-0 left-0 z-20" />
    <!-- -left-full -->
    <div class="w-full flex flex-row relative">
      <MainFeed class="w-3/5 flex-grow" />
      <!-- <RightFeed class="bg-purple-100 flex-grow-[0.5]" /> -->

      <!-- Background Animation -->
      <span class="w-full h-full -z-10 absolute top-0 blur-md overflow-hidden">
        <BackgroundAnimation />
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped></style>

<!-- <i class="fa-solid fa-bars"></i> -->
<!-- <i class="fa-solid fa-bars-staggered"></i> -->