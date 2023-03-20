<script setup>
import { ref, watch } from 'vue';
import { useMusicStore } from '@/stores/MusicStore'
import { storeToRefs } from 'pinia'

const store = useMusicStore()
const { getVolume } = storeToRefs(store)
const { changeVolume } = store

const volume = ref(10)

watch(volume, () => changeVolume(volume.value))

</script>

<template>
    <span class="bg-blue-200 bg-opacity-50 rounded-full px-4 py-2 mt-1 items-center flex justify-evenly mx-auto w-8/12 lg:w-3/12">
        <!-- <i class="fa-solid fa-volume-xmark"></i> -->
        <i class="fa-solid fa-volume-off fa-sm scale-75 md:scale-90 lg:scale-100"></i>
        <div class="flex justify-center items-center w-full">
            <input type="range" name="volume" min="0" max="10" v-model="volume"
                class="h-1 w-full bg-blue-50 bg-opacity-50 rounded-lg appearance-none cursor-pointer mx-4">
        </div>
        <i class="fa-solid fa-volume-high fa-sm scale-75 md:scale-90 lg:scale-100"></i>
    </span>
</template>