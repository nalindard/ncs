<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
  <main class="min-h-screen w-screen">
    <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <!-- <RouterView /> -->
      <component :is="Component"></component>
    </transition>
  </router-view>
  </main>
</template>

<style scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>