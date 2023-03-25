<script setup>
import { storeToRefs } from 'pinia'
import { useMusicStore } from '@/stores/MusicStore'
import { useSongStore } from '@/stores/SongStore'
import { ref, watch } from 'vue';

const store = useMusicStore()
const { getPlaying } = storeToRefs(store)
const { tooglePlay } = store

const songStore = useSongStore()
const { getSong, getRepeat, getSuffle, getBuffering } = storeToRefs(songStore)
const { changeRepeat, changeSuffle, } = songStore

const emit = defineEmits(['preSong', 'nextSong', 'repeat', 'suffel', 'like', 'add'])

const playBtnDisabled = ref(null)

watch(() => getSong.value, () => playBtnDisabled.value = getSong.value === null ? true : false)

watch(() => getPlaying.value, () => console.log('Song Icon Should change now', getPlaying.value))

const toogle = () => {
    tooglePlay(!getPlaying.value)
}

</script>

<template>
        <div class="bg-blue-200 bg-opacity-40 mt-1 px-1 md:px-2 lg:px-3 py-0 lg:py-1 rounded-full w-full sm:w-10/12 md:w-8/12 flex justify-evenly items-center">
            <!-- Like -->
            <button class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-10 scale-75 md:scale-90 lg:scale-95 aspect-square hidden md:block ">
                <i class="fa-regular fa-heart fa-sm"></i></button>
            <!-- fa-solid -->

            <!-- Repeat -->
            <button @click="changeRepeat(!getRepeat)" class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-10 scale-75 md:scale-90 lg:scale-95 aspect-square"
                :class="getRepeat ? 'bg-blue-500 bg-opacity-50 text-blue-50' : ''">
                <i class="fa-solid fa-repeat fa-sm"></i></button>

            <!-- Pre Song -->
            <button @click="emit('preSong')" class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-10 scale-75 md:scale-90 lg:scale-95 aspect-square"><i
                    class="fa-solid fa-caret-left fa-lg"></i></button>

            <!-- Play/Pause -->
            <button class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-14 aspect-square scale-75 md:scale-90 lg:scale-95" @click="toogle" :disabled="getSong === null">
                <!-- :disabled="playBtnDisabled ? 'true' : 'false'" -->
                <i v-if="getBuffering" class="fas fa-circle-notch fa-spin fa-xl"></i>
                <i v-else class="fa-solid fa-xl" :class="getPlaying ? 'fa-pause' : 'fa-play'"></i>
            </button>

            <!-- Next Song -->
            <button @click="emit('nextSong')" class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-10 scale-75 md:scale-90 lg:scale-95 aspect-square"><i
                    class="fa-solid fa-caret-right fa-lg"></i></button>

            <!-- Suffel -->
            <button @click="changeSuffle(!getSuffle)" class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-10 scale-75 md:scale-90 lg:scale-95 aspect-square"
                :class="getSuffle ? 'bg-blue-500 bg-opacity-50 text-blue-50' : ''">
                <i class="fa-solid fa-shuffle fa-sm"></i></button>

            <!-- Add -->
            <button class="bg-blue-200 hover:bg-blue-400 hover:scale-105 transition-all bg-opacity-50 p-1 rounded-full w-10 scale-75 md:scale-90 lg:scale-95 aspect-square hidden md:block ">
                <i class="fa-solid fa-plus fa-sm"></i></button>
        </div>
</template>