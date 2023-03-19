import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { fetchFromAPI } from '../helpers/fetchFrom'

export const useMusicStore = defineStore('MusicStore', () => {
    // State,
    const playing = ref(false)
    const volume = ref(1.0)
    const defaultSongList = ref([])
    const defaultSongListLoading = ref(true)
    const currentPlayList = ref([])
    const currentPlayListLength = ref(0)
    const favouriteSongList = ref([])
    const currentSongIndex = ref(0)

    // Getters,
    const getPlaying = computed(() => playing.value)
    const getVolume = computed(() => volume.value)
    const getdefaultSongList = computed(() => defaultSongList.value)
    const getDefaultSongListLoading = computed(
        () => defaultSongListLoading.value
    )
    const getcurrentPlayList = computed(() => currentPlayList.value)
    const getCurrentPlayListLength = computed(() => currentPlayListLength.value)
    const getfavouriteSongList = computed(() => favouriteSongList.value)
    const getCurrentSongIndex = computed(() => currentSongIndex.value)

    // Actions,
    function tooglePlay(bool) {
        playing.value = bool
    }
    function changeVolume(value) {
        if (value >= 0 && value <= 10) {
            volume.value = value / 10
        } else {
            console.log(`Invalid input:${value}`)
        }
    }
    async function updatedefaultSongList(pageNum) {
        defaultSongListLoading.value = true
        const songs = await fetchFromAPI(`library/${pageNum}`, {})
        defaultSongList.value = songs
        defaultSongListLoading.value = false
        // console.log(defaultSongList.value)
    }
    function updateCurrentPlayList(song) {
        currentPlayList.value = [song]
        playListLength()
        // console.log('runned this -->', [song]);
        // console.log(currentPlayList.value);
    }
    function addToCurrentPlayList(song) {
        if (currentPlayList.value.length === 0) {
            updateCurrentPlayList(song)
            playListLength()
        } else {
            currentPlayList.value.push(song)
            playListLength()
            // console.log('A song added', song, currentPlayList.value)
        }
    }
    // Replace current playlist
    function playListLength() {
        currentPlayListLength.value = currentPlayList.value.length
        console.log('Length fixed --> ', currentPlayListLength.value)
    }
    function changeCurrentSongIndex(index) {
        currentSongIndex.value = index
        console.log(`Current song changed: ${index}`)
    }

    // Exports,
    return {
        playing,
        getPlaying,
        tooglePlay,

        getVolume,
        changeVolume,

        defaultSongListLoading,
        getDefaultSongListLoading,
        getdefaultSongList,
        updatedefaultSongList,

        getcurrentPlayList,
        getCurrentPlayListLength,
        updateCurrentPlayList,
        addToCurrentPlayList,

        getCurrentSongIndex,
        changeCurrentSongIndex,
    }
})
