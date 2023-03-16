<script setup>
import ListSongCard from './ListSongCard.vue';
import ExpandableTags from '../ExpandableTags.vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '../../stores/UiStore';
import { fetchFromAPI } from '@/helpers/fetchFrom'
import { ref, toRaw } from 'vue';

// Trying to Implant right feed to here,
import SearchBar from '../SearchBar.vue';

const uiStore = useUiStore()
const { getGenreList, getMoodList, } = storeToRefs(uiStore)

const songs = ref([])

const search = (string) => {
    searchMusic(string)
}


// Search music,
async function searchMusic(songName) {
    songs.value = await fetchFromAPI(`search/${songName}`)
}

</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50">
        <div class="flex justify-between items-center px-6 py-4">
            <div>
                <h2 class="text-4xl font-extrabold"> Search results </h2>
            </div>
            <div class="bg-purple-500 bg-opacity-50 px-3 py-2 rounded-full">
                <p class="text-base italic">{{ songs.length }} songs</p>
            </div>
        </div>
        <!-- Search -->
        <div class="mx-2 my-2">
            <SearchBar @submit="search" />
        </div>
        <div class="w-full h-full overflow-y-scroll py-4 px-2 pb-40">
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <ExpandableTags :title="'Genre'" :tag-list="getGenreList" />
            <ExpandableTags :title="'Mood'" :tag-list="getMoodList" />
            <hr class="mb-4 w-full  mx-auto">
            <!-- {{ songs }} -->
            <ListSongCard v-for="song,index in songs" :song="toRaw(song) " :number="(index++)" :from="'searchList'"/>
        </div>
    </div>
</template>