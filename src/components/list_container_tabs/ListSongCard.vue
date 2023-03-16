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
    <div class="bg-purple-400 w-full px-4 py-2 mb-2 rounded-md shadow-md flex">
        <!-- Number -->
        <span class="w-1/12 m-auto text-center">
            <h2 class="text-2xl font-bold">{{ number > 10 ? number : '0' + number }}</h2>
        </span>
        <!-- Thumbnail -->
        <span class="w-2/12 m-auto">
            <img :src="song.coverUrl" alt="song-thumbnail" class="w-16 rounded-md">
        </span>
        <!-- Name & Artist -->
        <span class="flex-grow m-auto">
            <h2 class="text-2xl font-bold">{{ song.name || 'No name yet' }}</h2>
            <h4 class="text-lg">{{ song.artists[0].name || 'No artist yet' }}</h4>
        </span>
        <!-- Sub menu -->
        <SongCardSubMenu :number="number" :song="song" v-if="from === 'currentList'"/>
        <SearchCardSubMenu :number="number" :song="song" v-if="from === 'searchList'"/>
    </div>
</template>