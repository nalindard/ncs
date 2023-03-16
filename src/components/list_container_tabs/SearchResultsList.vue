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
const feedFresh = ref(true)

const search = (string) => {
    searchMusic(string)
}
const tagSearch = (obj) => {
    // console.log(obj);
    if (obj.type === 'Genre') searchGenere(obj.tag)
    if (obj.type === 'Mood') searchMood(obj.tag)
    feedFresh.value = false
}


// Search music,
async function searchMusic(songName) {
    songs.value = []
    songs.value = await fetchFromAPI(`search/${songName}`)
    feedFresh.value = false
}
async function searchGenere(genre) {
    songs.value = []
    songs.value = await fetchFromAPI(`genre/${genre}/1`)
}
async function searchMood(mood) {
    songs.value = []
    songs.value = await fetchFromAPI(`mood/${mood}/1`)
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
            <ExpandableTags :title="'Genre'" :tag-list="getGenreList" @search="tagSearch" />
            <ExpandableTags :title="'Mood'" :tag-list="getMoodList" @search="tagSearch" />
            <hr class="mb-4 w-full  mx-auto">
            <!-- {{ songs }} -->
            <ListSongCard v-for="song, index in songs" :song="toRaw(song)" :number="index" :from="'searchList'" />
            <h2 v-if="songs == 0 && !feedFresh" class="text-7xl uppercase">loading</h2>
        </div>
    </div>
</template>