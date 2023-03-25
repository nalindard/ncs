<script setup>
import { storeToRefs } from 'pinia'
import { useMusicStore } from '@/stores/MusicStore'
import { useSongStore } from '@/stores/SongStore'
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    number: Number,
    song: Object
})

const songStore = useSongStore()
const { getSong, } = storeToRefs(songStore)

const musicStore = useMusicStore()
const { getPlaying, } = storeToRefs(musicStore)
const { tooglePlay, changeCurrentSongIndex,updateCurrentPlayList,addToCurrentPlayList } = musicStore

const isThePlayingSong = ref(false)

// onMounted(() => {
//     if (props.song.id === getSong?.value.id) isThePlayingSong.value = true
// })
watch(() => getSong.value, () => { if (props.song.id === getSong.value.id) isThePlayingSong.value = true })

// function handlePlay() {
//     // tooglePlay(!getPlaying)
//     // changeCurrentSongIndex(props.number)
//     console.log(props.song);
// }

</script>

<template>
    <span class="w-5/12 sm:w-4/12 md:w-3/12 lg:w-2/12 m-auto text-center flex justify-evenly relative border-t border-l border-blue-200 py-1 sm:py-2 md:py-4 rounded-full">
        <!-- {{ getSong.id }} -->
        <!-- Like -->
        <button @click="" class="scale-[60%] md:scale-105 lg:scale-125 hover:scale-125 hover:hover:text-cyan-400 transition-all">
            <i class="fa-regular fa-heart fa-lg"></i>
        </button>
        <!-- Play / Pause now -->
        <button @click="updateCurrentPlayList(song)" class="scale-[60%] md:scale-105 lg:scale-125 hover:scale-125 hover:hover:text-cyan-400 transition-all">
            <i class="fa-solid fa-lg" :class="isThePlayingSong ? 'fa-pause' : 'fa-play'"></i>
        </button>
        <!-- Append -->
        <button @click="addToCurrentPlayList(song)" class="scale-[60%] md:scale-105 lg:scale-125 hover:scale-125 hover:hover:text-cyan-400 transition-all">
            <i class="fa-solid fa-plus fa-lg"></i>
        </button>
        <!-- Download -->
        <button  class="scale-[60%] md:scale-105 lg:scale-125 hover:scale-125 hover:hover:text-cyan-400 transition-all">
            <a :href="song.download.regular" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-down fa-lg"></i>
            </a>
        </button>
        <!-- Add next, Remove ... -->
        <button class="scale-[60%] md:scale-105 lg:scale-125 hover:scale-125 hover:hover:text-cyan-400 transition-all">
            <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
        </button>
    </span>
</template>

