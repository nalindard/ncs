<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="h-screen w-screen relative overflow-hidden bg-opacity-50" style="background-image: url('https://unsplash.com/photos/HU-uL54pfQI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc5NzI5Mzgz&force=true&w=1920'); background-size: cover; background-position: center;">

        <!-- Background animation/blur -->
        <div class="absolute inset-0 h-3/6 sm:h-full w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12 backdrop-blur-md">
        </div>

        <!-- Content -->
        <div class="absolute inset-0 z-10 w-full sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12 lg:px-12 text-blue-50 bg-cyan-900 bg-opacity-25">
            <div class="w-full flex flex-col justify-center items-center h-3/6 px-2 sm:px-4 md:px-6 lg:px-2">
                <transition appear name="slipe">
                    <h2 class="text-3xl sm:text-4xl md:text-5xl text-center md:text-left lg:text-6xl font-extrabold uppercase font-sans">Lorem ipsum <br class="sm:hidden"> dolor sit <br> amet <span class="text-cyan-300 ">consectetur</span> adipisicing.</h2>
                </transition>
                <span class="text-center">
                    <p></p>
                </span>
            </div>

            <!-- Links -->
            <transition appear name="slipe">
            <span class="absolute bottom-0 flex flex-col gap-4 md:flex-row w-full lg:w-10/12 justify-center items-center h-2/6 backdrop-blur-md sm:backdrop-blur-none">
                <span
                    class="hover:text-blue-50 hover:bg-cyan-400 text-base font-bold my-1 w-32 text-center py-1 rounded-full border border-blue-50 transition-all">
                    <RouterLink :to="{ name: 'library' }">Library</RouterLink>
                </span>
                <span
                    class="hover:text-blue-50 hover:bg-cyan-400 text-base font-bold my-1 w-32 text-center py-1 rounded-full border border-blue-50 transition-all">
                    <RouterLink :to="{ name: 'about' }">About</RouterLink>
                </span>
                <span
                    class="hover:text-blue-50 hover:bg-cyan-400 text-base font-bold my-1 w-32 text-center py-1 rounded-full border border-blue-50 transition-all relative">
                    <RouterLink :to="{ name: 'user' }">User</RouterLink>
                </span>
        </span>
    </transition>

        <!-- Image credit -->
        <span class="fixed bottom-2 md:bottom-4 right-2 md:right-4 text-xs scale-75 md:scale-90 lg:scale-100">
            Photo by <a href="https://unsplash.com/@juja_han?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juja Han</a> on <a href="https://unsplash.com/photos/HU-uL54pfQI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </span>
            
    </div>
</div>
</template>

<style scoped>
.slipe-enter-from{
  opacity: 0;
}
.slipe-enter-active{
  transition: all 1.2s  ease;
}
</style>