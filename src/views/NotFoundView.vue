<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div style="background: url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&dl=nasa-Yj1M5riCKk4-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb'); background-position: center; background-size: cover;" class="h-screen w-screen overflow-hidden flex flex-col justify-center items-center text-blue-50 bg-cover bg-center">
        <h2 class="text-4xl font-bold">Bruhhhhh <span class="text-blue-400">404</span>!</h2>
        <h2 class="text-xs">😒</h2>
        <h4 class="leading-tight text-2xl">You lost</h4>

        <!-- Way back -->
        <span class="mt-16">
            <RouterLink :to="{name: 'home'}" >
                <h1 class="text-9xl bg-blue-400 bg-opacity-25 hover:text-blue-700 w-32 aspect-square text-center rounded-full border border-blue-50">></h1>
            </RouterLink>
        </span>

        Photo by <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/photos/Yj1M5riCKk4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    </div>
</template>