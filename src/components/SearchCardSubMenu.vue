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
    <span class="w-2/12 m-auto text-center flex justify-evenly relative">
        <!-- {{ getSong.id }} -->
        <!-- Like -->
        <button @click="">
            <i class="fa-regular fa-heart fa-lg"></i>
        </button>
        <!-- Play / Pause now -->
        <button @click="updateCurrentPlayList(song)">
            <i class="fa-solid fa-lg" :class="isThePlayingSong ? 'fa-pause' : 'fa-play'"></i>
        </button>
        <!-- Append -->
        <button @click="addToCurrentPlayList(song)">
            <i class="fa-solid fa-plus fa-lg"></i>
        </button>
        <!-- Download -->
        <button >
            <a :href="song.download.regular" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-arrow-down fa-lg"></i>
            </a>
        </button>
        <!-- Add next, Remove ... -->
        <button class="">
            <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
        </button>
    </span>
</template>