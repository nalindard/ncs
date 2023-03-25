<script setup>
import SearchCardSubMenu from '../SearchCardSubMenu.vue';
import SongCardSubMenu from '../SongCardSubMenu.vue';
import { storeToRefs } from 'pinia'
import { useMusicStore } from '@/stores/MusicStore'

const props = defineProps({
    number: Number,
    song: Object,
    from: String,
})

</script>

<template>
    <div class="bg-blue-400 bg-opacity-25 hover:bg-opacity-50 hover:scale-[101%] transition-all border-t border-l border-blue-200 w-full px-1 md:px-4 py-1 md:py-2 mb-2 rounded-md shadow-md shadow-blue-400 flex">
        <!-- Number -->
        <span class="w-1/12 m-auto text-center">
            <h2 class="text-sm md:text-2xl font-bold">{{ number > 8 ? (number + 1) : '0' + (number + 1) }}</h2>
        </span>
        <!-- Thumbnail -->
        <span class="m-auto">
            <img :src="song.coverUrl" alt="song-thumbnail" class="w-9 sm:w-16 rounded-md">
        </span>
        <!-- Name & Artist -->
        <span class="w-4/12 m-auto flex-grow pl-1 sm:pl-2 md:pl-4">
            <h2 class="text-xs sm:text-base md:text-2xl font-bold song-info">{{ song.name || 'No name yet' }}</h2>
            <h4 class="text-xs italic sm:text-lg song-info">{{ song.artists[0].name || 'No artist yet' }}</h4>
        </span>
        <!-- Sub menu -->
        <SongCardSubMenu :number="number" :song="song" v-if="from === 'currentList'"/>
        <SearchCardSubMenu :number="number" :song="song" v-if="from === 'searchList'"/>
    </div>
</template>

<style scoped>
.song-info {
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>