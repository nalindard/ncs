<script setup>
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/UiStore';

const store = useUiStore()
const { toogleWelcomeBanner } = store

</script>

<template>
    <div id="welcome-bg"
        class="bg-gradient-to-r from-blue-700 to-blue-300 bg-center text-blue-100 w-full h-14 sm:h-16 md:h-20  lg:h-28 py-1 md:py-2 lg:py-4 px-4 rounded-lg shadow-lg relative">
        <h4 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold">Welcome user</h4>
        <h3 class="text-xs">
            Photo by <a href="https://unsplash.com/@abrizgalov?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Artem Bryzgalov</a> on <a href="https://unsplash.com/s/photos/blues-music?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </h3>

        <button @click="toogleWelcomeBanner()"
            class="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-100 bg-opacity-40 flex justify-center items-center scale-75 md:scale-100">
            <i class="fa-solid fa-xmark fa-sm"></i>
        </button>
    </div>
</template>

<style scoped>
#welcome-bg {
    background-image: linear-gradient(to right, rgba(11, 30, 108, 0.5), rgba(152, 155, 241, 0.5)), url('@/assets/images/welcome-img-2.jpg');
}
</style>
