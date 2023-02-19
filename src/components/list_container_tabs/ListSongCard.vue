<script setup>
import SongCardSubMenu from '../SongCardSubMenu.vue';

</script>

<template>
    <div class="bg-purple-400 w-full px-4 py-2 mb-2 rounded-md shadow-md flex">
        <!-- Number -->
        <span class="w-1/12 m-auto text-center">
            <h2 class="text-2xl font-bold">01</h2>
        </span>
        <!-- Thumbnail -->
        <span class="w-2/12 m-auto">
            <img src="https://linkstorage.linkfire.com/medialinks/images/4f47815a-79fb-444d-9f79-4ba1ec71fea9/artwork-440x440.jpg" alt="song-thumb"
            class="w-16 rounded-md">
        </span>
        <!-- Name & Artist -->
        <span class="flex-grow m-auto">
            <h2 class="text-2xl font-bold">Night begins to shine</h2>
            <h4 class="text-lg">The lost sky</h4>
        </span>
        <!-- Sub menu -->
        <span class="w-2/12 m-auto text-center flex justify-evenly relative">
            <!-- <SongCardSubMenu /> -->
            <!-- Like -->
            <button>
                <i class="fa-regular fa-heart fa-lg"></i>
            </button>
            <!-- Play / Pause -->
            <button>
                <i class="fa-solid fa-play fa-lg"></i>
            </button>
            <!-- Add next, Remove ... -->
            <button class="">
                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
            </button>
        </span>
    </div>
</template>