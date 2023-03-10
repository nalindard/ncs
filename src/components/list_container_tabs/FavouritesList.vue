<script setup>
import ListSongCard from './ListSongCard.vue';

</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50">
        <div class="flex justify-between items-center px-6 py-4">
            <div>
                <h2 class="text-4xl font-extrabold"> Favourite song list 💜</h2>
            </div>
            <div class="bg-purple-500 bg-opacity-50 px-3 py-2 rounded-full">
                <p class="text-base italic">Playing  27/80</p>
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