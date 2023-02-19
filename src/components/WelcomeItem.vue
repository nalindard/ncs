<script setup>
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/UiStore';

const store = useUiStore()
const { toogleWelcomeBanner } = store

</script>

<template>
    <div id="welcome-bg"
        class="bg-gradient-to-r from-purple-700 to-purple-300 bg-center text-purple-100 w-full h-28 py-4 px-4 rounded-lg shadow-lg relative">
        <h4 class="text-5xl font-extrabold">Welcome user</h4>
        Photo by <a
            href="https://unsplash.com/@marcelalaskoski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marcela
            Laskoski</a> on <a
            href="https://unsplash.com/photos/YrtFlrLo2DQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

        <button @click="toogleWelcomeBanner()"
            class="absolute top-2 right-2 w-5 h-5 rounded-full bg-purple-100 bg-opacity-40 flex justify-center items-center">
            <i class="fa-solid fa-xmark fa-sm"></i>
        </button>
    </div>
</template>

<style scoped>#welcome-bg {
    background-image: linear-gradient(to right, rgba(108, 11, 97, 0.5), rgba(241, 152, 237, 0.5)), url('@/assets/images/welcome-img.jpg');
}</style>
