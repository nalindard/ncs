<script setup>
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useSongStore } from '../../stores/SongStore';
import { useMusicStore } from '../../stores/MusicStore';


const songStore = useSongStore()
const { getSongDuration, getCurrentTime } = storeToRefs(songStore)
const { changegeCurrentTime, changeSongSeekedTime } = songStore

const musicStore = useMusicStore()
const { getPlaying } = storeToRefs(musicStore)

const length = ref({})

onMounted(() => length.value = getSongDuration.value)

watch(() => getSongDuration.value, () => length.value = getSongDuration.value)
// watch(() => getPlaying.value, ()=> currentTime.value )


function seek(e) {
    console.log('Song seeked -->', e.target.value)
    changeSongSeekedTime(e.target.value)
}

</script>

<template>
    <div class="flex justify-evenly items-center relative w-full bg-blue-200 bg-opacity-50 px-4 rounded-full">
        <!-- Timer -->
        <h6 class="text-xs md:text-base px-2">{{ getCurrentTime.mm + ':' + getCurrentTime.ss }}</h6>
        <span class="bg-red-700 w-10/12 relative flex items-center">
            <!-- This is the visible timeline -->
            <input type="range" name="timer" min="0" :max="length.time" :value="getCurrentTime.time"
                class="w-full h-1 absolute top-0 right-0 bg-blue-50 bg-opacity-50 rounded-lg appearance-none">

            <!-- This is a invisible replica of above, this use for get the user input 😉 -->
            <input type="range" min="0" :max="length.time"
                class="w-full h-1 absolute top-0 right-0 bg-blue-500 bg-opacity-50 opacity-0 rounded-lg appearance-none cursor-pointer"
                @change="seek">
        </span>
        <h6 class="text-xs md:text-base px-2">{{ length.mm + ':' + length.ss }}</h6>
    </div>
</template>