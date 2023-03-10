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
    <span class="bg-purple-200 rounded-full px-4 py-2 mt-1 items-center flex justify-evenly">
        <!-- <i class="fa-solid fa-volume-xmark"></i> -->
        <i class="fa-solid fa-volume-off fa-sm"></i>
        <div class="bg-black flex justify-center items-center w-8/12">
            <input type="range" name="volume" min="0" max="10" v-model="volume"
                class="h-2 bg-purple-50 rounded-lg appearance-none cursor-pointer mx-4">
        </div>
        <i class="fa-solid fa-volume-high fa-sm"></i>
    </span>
</template>