import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSongStore = defineStore('SongStore', () => {
    // State,
    const song = ref(null)
    const songNetworkState = ref(0)
    const songReadyState = ref(0)
    const songDuration = ref(0)
    const songSeekedTime = ref(0)
    const currentTime = ref(0)
    const visualizerData = ref([])

    // Getters,
    const getSong = computed(() => song.value)
    const getSongNetworkState = computed(() => songNetworkState.value)
    const getSongReadyState = computed(() => songReadyState.value)
    const getSongDuration = computed(() => {
        let time = Math.trunc(songDuration.value)
        let m = Math.trunc(time / 60)
        let s = time % 60
        if (m === undefined) m = '00'
        if (s === undefined) s = '00'
        return { time: time, mm: m, ss: s }
    })
    const getSongSeekedTime = computed(() => songSeekedTime.value)
    const getCurrentTime = computed(() => {
        let m = Math.trunc(currentTime.value / 60)
        let s = Math.trunc(currentTime.value % 60)
        if (m < 10) m = '0' + m
        if (s < 10) s = '0' + s
        return { time: currentTime.value, mm: m, ss: s }
    })
    const getVisualizerData = computed(() => visualizerData.value)

    // Actions,
    function changeSong(newSong) {
        // if (newSong.length === 0) {
        // console.log(`Invalid input: ${newSong}`)
        // } else {
        song.value = newSong
        // }
    }
    function changSongNetworkState(state) {
        songNetworkState.value = state
    }
    function changSongReadyState(state) {
        songReadyState.value = state
    }
    function changeSongDuration(duration) {
        songDuration.value = duration
    }
    function changeSongSeekedTime(time) {
        songSeekedTime.value = time
    }
    function changegeCurrentTime(time) {
        currentTime.value = time
    }
    function changeVisualizerData(data) {
        visualizerData.value = data
    }

    // Exports,
    return {
        getSong,
        changeSong,

        getSongNetworkState,
        changSongNetworkState,

        getSongReadyState,
        changSongReadyState,

        getSongDuration,
        changeSongDuration,

        getSongSeekedTime,
        changeSongSeekedTime,

        getCurrentTime,
        changegeCurrentTime,

        // Visualizer,
        getVisualizerData,
        changeVisualizerData,
    }
})
