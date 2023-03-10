<script setup>
import { storeToRefs } from 'pinia';
import { useSongStore } from '@/stores/SongStore'
import { useMusicStore } from '../stores/MusicStore';
import { toRaw } from 'vue';
import SongCardSubMenu from './SongCardSubMenu.vue';


const props = defineProps({
    data: Object
})

const songStore = useSongStore()
const { } = storeToRefs(songStore)
const { changeSong, } = songStore

const musicStore = useMusicStore()
const { } = storeToRefs(musicStore)
const { updateCurrentPlayList, addToCurrentPlayList } = musicStore


</script>

<template>
    <div class="flex flex-col 2xl:w-2/12 lg:w-3/12 md:w-4/12 sm:w-2/4 py-2 px-2 mb-2 ">
        <div class="border p-1 bg-purple-500 hover:scale-105 ">
            <span class="relative group  overflow-hidden song-img grid place-items-center">
                <img :src="props.data.coverUrl" alt="song-thumbnail">
                <span
                    class="bg-purple-500 bg-opacity-50 backdrop-blur-sm absolute w-full opacity-0 group-hover:opacity-100 inset-0 flex justify-center items-center">
                    <button class="rounded-full py-2 px-4 bg-purple-500" @click="addToCurrentPlayList(toRaw(props.data))">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </span>
            </span>
            <span class="song-info">
                <h2 class="text-2xl font-bold song-info">{{ props.data.name }}</h2>
                <h4 class="text-base italic song-info">{{ props.data.artists[0].name }}</h4>
            </span>
            <span class="w-full rounded flex gap-2 text-purple-50">
                <!-- <button @click="changeSong(props.data)" class="flex-grow bg-purple-400 p-2 rounded hover:bg-purple-200"> -->
                <button @click="updateCurrentPlayList(toRaw(props.data))"
                    class="flex-grow bg-purple-400 p-2 rounded hover:bg-purple-200">
                    Play
                    <!-- {{ props.data.download.regular }} -->
                </button>
                <button class="flex-grow bg-purple-400 p-2 rounded hover:bg-purple-200">
                    Download
                </button>
            </span>
            <!-- {{ props.data}} -->
        </div>
    </div>
</template>

<style scoped>
.song-img {
    transition: 1s;
}

.song-info {
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>