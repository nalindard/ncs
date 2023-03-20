<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import { useMusicStore } from '../../stores/MusicStore';
import ListSongCard from './ListSongCard.vue';

const musicStore = useMusicStore()
const { getcurrentPlayList,getCurrentPlayListLength } = storeToRefs(musicStore)

const songList = ref([])

onMounted(() => {
    songList.value = getcurrentPlayList.value
})

</script>

<template>
    <div class="w-full h-full bg-blue-300 bg-opacity-40 text-blue-50">
        <div class="flex justify-between items-center px-2 md:px-4 lg:px-6 py-2 md:py-4">
            <div>
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-extrabold"> Current song list </h2>
            </div>
            <div class="bg-blue-500 bg-opacity-40 px-1 md:px-3 py-1 md:py-2 rounded-full">
                <p class="italic text-xs font-extralight">Playing n/{{ getCurrentPlayListLength }}</p>
            </div>
        </div>
        <div class="w-full h-full overflow-y-scroll py-4 px-2 pb-24">
            <ListSongCard v-for="(song, index) in songList" :key="song.id" :song="song" :number="index" :from="'currentList'"/>
        </div>
    </div>
</template>