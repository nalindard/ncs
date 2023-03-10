<script setup>
import { storeToRefs } from 'pinia'
import { useMusicStore } from '@/stores/MusicStore'
import { useSongStore } from '@/stores/SongStore'
import { ref, watch } from 'vue';

const store = useMusicStore()
const { getPlaying } = storeToRefs(store)
const { tooglePlay } = store

const songStore = useSongStore()
const { getSong } = storeToRefs(songStore)

const emit = defineEmits(['preSong', 'nextSong', 'repeat', 'suffel', 'like', 'add'])

const playBtnDisabled = ref(null)

watch(() => getSong.value, () => playBtnDisabled.value = getSong.value === null ? true : false)

watch(() => getPlaying.value, () => console.log('Song Icon Should change now', getPlaying.value))

const toogle = () => {
    tooglePlay(!getPlaying.value)
}

</script>

<template>
    <div class="bg-purple-200 mt-1 px-4 py-2 rounded-full md:w-8/12 w-full flex justify-evenly items-center scale-75">
        <!-- Like -->
        <button class="bg-purple-50 p-2 rounded-full w-10 aspect-square"><i class="fa-regular fa-heart fa-sm"></i></button>
        <!-- fa-solid -->

        <!-- Repeat -->
        <button class="bg-purple-50 p-2 rounded-full w-10 aspect-square"><i class="fa-solid fa-repeat fa-sm"></i></button>

        <!-- Pre Song -->
        <button @click="emit('preSong')" class="bg-purple-50 p-2 rounded-full w-10 aspect-square"><i
                class="fa-solid fa-caret-left fa-lg"></i></button>

        <!-- Play/Pause -->
        <button class="bg-purple-50 p-2 rounded-full w-16 aspect-square" @click="toogle">
            <!-- :disabled="playBtnDisabled ? 'true' : 'false'" -->
            <i class="fa-solid fa-xl" :class="getPlaying ? 'fa-pause' : 'fa-play'"></i>
        </button>

        <!-- Next Song -->
        <button @click="emit('nextSong')" class="bg-purple-50 p-2 rounded-full w-10 aspect-square"><i
                class="fa-solid fa-caret-right fa-lg"></i></button>

        <!-- Suffel -->
        <button class="bg-purple-50 p-2 rounded-full w-10 aspect-square"><i class="fa-solid fa-shuffle fa-sm"></i></button>

        <!-- Add -->
        <button class="bg-purple-50 p-2 rounded-full w-10 aspect-square"><i class="fa-solid fa-plus fa-sm"></i></button>
    </div>
</template>