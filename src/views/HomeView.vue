<script setup>
import LeftFeed from '@/components/feeds/LeftFeed.vue';
import MainFeed from '@/components/feeds/MainFeed.vue';
import RightFeed from '@/components/feeds/RightFeed.vue';

import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useUiStore } from '../stores/UiStore';
const store = useUiStore()
const { count, doubleCount } = storeToRefs(store)
const { increment } = store

console.log(doubleCount.value);
// watch(doubleCount, ()=> console.log(doubleCount.value))
watch(()=> count.value, ()=> {
  console.log(doubleCount.value)
  // inc()
})

// function inc(){
//   setTimeout(() => {
//     store.increment()
//   }, 1)
// }

// inc()

// console.log(count.value);

</script>

<template>
  <div class="flex flex-row justify-between w-screen h-screen relative">
    <LeftFeed class="bg-purple-200 rounded-tr-3xl rounded-br-3xl w-96 h-full absolute top-0 left-0 z-20" />
    <!-- -left-full -->
    <div class="w-full flex flex-row">
      <MainFeed class="bg-purple-50 w-3/5 flex-grow" />
      <!-- <RightFeed class="bg-purple-100 flex-grow-[0.5]" /> -->
    </div>
  </div>
</template>

<style lang="css" scoped></style>

<!-- <i class="fa-solid fa-bars"></i> -->
<!-- <i class="fa-solid fa-bars-staggered"></i> -->