<script setup>
import { ref, watch, onMounted } from 'vue'
import SongCard from '../SongCard.vue';
import PagePagination from '../PagePagination.vue'
import LeftFeedShowButton from './LeftFeedShowButton.vue';
import LoadingAnimation2 from '../LoadingAnimation2.vue';


import { storeToRefs } from 'pinia';
import { useMusicStore } from '../../stores/MusicStore';

const musicStore = useMusicStore()
const { defaultSongListLoading, getDefaultSongListLoading, getdefaultSongList, } = storeToRefs(musicStore)
const { updatedefaultSongList, } = musicStore

const songList = ref([])

onMounted(() => {
    updatedefaultSongList(1)
})

watch(() => getDefaultSongListLoading.value, () => {
    if (getDefaultSongListLoading.value === false) {
        songList.value = getdefaultSongList.value
        // console.log(songList.value);
    }
})

function updateList(pageNum) {
    songList.value = []
    updatedefaultSongList(pageNum)
}

</script>

<template>
    <!-- <h2  class="text-7xl uppercase">loading</h2> -->

    <div class="w-full h-full bg-transparent text-blue-50">
        <!-- Head -->
        <div class="flex justify-between items-center px-2 md:px-4 lg:px-6 py-2 md:py-4">
            <div class="flex-grow">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold"> Default Page </h2>
            </div>
                <PagePagination @page-change="updateList" />
        </div>
        <LeftFeedShowButton class="absolute top-2 right-64 hidden" />
        <!-- Body -->
        <div class="w-full h-full flex flex-wrap items-start overflow-y-scroll pb-24">
            <div v-if="songList == 0" class="w-full h-full grid place-items-center scale-50 md:scale-75 lg:scale-90">
                <LoadingAnimation2 />
            </div>
            <SongCard v-else v-for="song in songList" :data="song" :key="song.id" />
        </div>
    </div>
</template>