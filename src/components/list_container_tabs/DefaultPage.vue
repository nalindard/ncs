<script setup>
import { ref, watch, onMounted } from 'vue'
import SongCard from '../SongCard.vue';
import PagePagination from '../PagePagination.vue'
import LeftFeedShowButton from './LeftFeedShowButton.vue';


import { storeToRefs } from 'pinia';
import { useMusicStore } from '../../stores/MusicStore';

const musicStore = useMusicStore()
const { defaultSongListLoading, getDefaultSongListLoading, getdefaultSongList, } = storeToRefs(musicStore)
const { updatedefaultSongList, } = musicStore

onMounted(() => {
    updatedefaultSongList(1)
})

const songList = ref([])

watch(() => getDefaultSongListLoading.value, () => {
    if (getDefaultSongListLoading.value === false) {
        songList.value = getdefaultSongList.value

        // console.log(songList.value);
    }
})

</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50">
        <!-- Head -->
        <div class="flex justify-between items-center px-6 py-4">
            <div class="flex-grow">
                <h2 class="text-4xl font-extrabold"> Default Page </h2>
            </div>
            <PagePagination />
        </div>
        <LeftFeedShowButton class="absolute top-2 right-64"/>
        <!-- Body -->
        <div class="w-full h-full flex flex-wrap items-start overflow-y-scroll pb-24">
            <SongCard v-for="song in songList" :data="song" :key="song.id" />
        </div>
    </div>
</template>