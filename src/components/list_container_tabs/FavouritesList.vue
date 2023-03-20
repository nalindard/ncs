<script setup>
import ListSongCard from './ListSongCard.vue';

</script>

<template>
    <div class="w-full h-full bg-blue-300 bg-opacity-40 text-blue-50">
        <div class="flex justify-between items-center px-2 md:px-4 lg:px-6 py-2 md:py-4">
            <div>
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold"> Favourite song list 💙</h2>
            </div>
            <div class="bg-blue-500 bg-opacity-50 px-1 md:px-3 py-1 md:py-2 rounded-full">
                <p class="italic text-xs font-extralight">Playing  27/80</p>
            </div>
        </div>
        <div class="w-full h-full overflow-y-scroll py-4 px-2">
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <!-- <ListSongCard :song="{}" :number="00"/> -->
        </div>
    </div>
</template>