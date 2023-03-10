<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import { useMusicStore } from '../../stores/MusicStore';
import ListSongCard from './ListSongCard.vue';

const musicStore = useMusicStore()
const { getcurrentPlayList,getCurrentPlayListLength } = storeToRefs(musicStore)

const songList = ref([])

onMounted(() => {
    console.log('Current playlist mounted   -->');
    songList.value = getcurrentPlayList.value
})

</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50">
        <div class="flex justify-between items-center px-6 py-4">
            <div>
                <h2 class="text-4xl font-extrabold"> Current song list </h2>
            </div>
            <div class="bg-purple-500 bg-opacity-50 px-3 py-2 rounded-full">
                <p class="text-base italic">Playing n/{{ getCurrentPlayListLength }}</p>
            </div>
        </div>
        <div class="w-full h-full overflow-y-scroll py-4 px-2">
            <ListSongCard v-for="(song, index) in songList" :key="song.id" :song="song" :number="index" />
        </div>
    </div>
</template>