<script setup>
import PlayerButtonBar from './player_controller_items/PlayerButtonBar.vue';
import SoundBar from './player_controller_items/SoundBar.vue';
import TimeLine from './player_controller_items/TimeLine.vue';

import { storeToRefs } from 'pinia'
import { useMusicStore } from '@/stores/MusicStore'
import { useSongStore } from '@/stores/SongStore'
import { ref, watch, toRaw, watchEffect } from 'vue';

const musicStore = useMusicStore()
const { getPlaying, getVolume, getcurrentPlayList, getCurrentPlayListLength, getCurrentSongIndex, } = storeToRefs(musicStore)
const { tooglePlay, changeCurrentSongIndex, } = musicStore

const songStore = useSongStore()
const { getSong, getSongSeekedTime, } = storeToRefs(songStore)
const { changeSong, changeSongDuration, changegeCurrentTime } = songStore

const song = new Audio()
// const song = document.createElement('audio')
let songIndex = +0
let songCount = 0
const songLoading = ref(true)

watch(() => getcurrentPlayList.value, () => updateSongStore())
watch(() => getSong.value, () => songPlay())
watch(() => getPlaying.value, () => getPlaying.value ? song.play() : songPause())
watch(() => getVolume.value, () => song.volume = getVolume.value)
watch(() => getCurrentPlayListLength.value, () => songCount = getCurrentPlayListLength.value)
watch(() => getSongSeekedTime.value, seek)
watch(() => getCurrentSongIndex.value, newSong)

function updateSongStore() {
    // console.log('Song store updated -->', toRaw(getcurrentPlayList.value)[songIndex]);
    changeSong(toRaw(getcurrentPlayList.value)[songIndex])
}
function songPlay() {
    // console.log(getSong.value);
    song.src = getSong.value.download.regular

    // song play shifted to songdetails to fix fetching errors,
    // song.play()
    // vizualise(song)
    song.addEventListener('loadedmetadata', songDetails)
    song.addEventListener("ended", () => songEnded())
    tooglePlay(true)

    // Visualizer,
    // song.setAttribute('id', 'song')
    // song.crossOrigin = 'Anonymous'
    // console.log(song);
    // document.body.appendChild(song)
    // vizualise()
}
function songPause() {
    song.pause()
    tooglePlay(false)
}
function songEnded() {
    tooglePlay(false)
    nextSong()
}
function preSong() {
    if (getCurrentSongIndex.value >= 1) {
        changeCurrentSongIndex(getCurrentSongIndex.value - 1)
        changeSong(toRaw(getcurrentPlayList.value)[getCurrentSongIndex.value])
    } else {
        changeSong(toRaw(getcurrentPlayList.value)[0])
        alert('This is the begining - 😊')
    }
}
function nextSong() {
    if ((songCount - 1) > getCurrentSongIndex.value) {
        changeCurrentSongIndex(getCurrentSongIndex.value + 1)
        changeSong(toRaw(getcurrentPlayList.value)[getCurrentSongIndex.value])
    } else {
        changeCurrentSongIndex(0)
        changeSong(toRaw(getcurrentPlayList.value)[getCurrentSongIndex.value])
        alert('Last song -->');
    }
}
function songDetails() {
    changeSongDuration(song.duration)
    // console.log('😊😊😊😊😊😊😊😊😊😊😊😊');
    // console.log('duration \t --> ', song.duration)
    // console.log('networkState \t --> ', song.networkState)
    // console.log('readyState \t --> ', song.readyState)
    song.play()
}
function seek() {
    song.currentTime = getSongSeekedTime.value
    console.log('Song seeked !')
}
function newSong(){
    console.log(getCurrentSongIndex.value);
    changeSong(toRaw(getcurrentPlayList.value)[getCurrentSongIndex.value])
}


let intervel = setInterval(timeChange, 1000)

function timeChange() {
    if (getPlaying.value) {
        changegeCurrentTime(song.currentTime)
        // console.log(song.currentTime);
    }
}


// Setting up for vizualiser 🎧🎛️🎚️🎵
function vizualise() {
    let song = document.querySelector('#song')
    console.log({ song });
    // song.crossOrigin = '*'
    const ctx = new window.AudioContext()
    const analyzer = ctx.createAnalyser()
    const source = ctx.createMediaElementSource(song)
    source.connect(analyzer)
    source.connect(ctx.destination)
    analyzer.fftSize = 64
    const bufferLength = analyzer.frequencyBinCount

    let dataArray = new Uint8Array(bufferLength)
    let elements = []

    setInterval(() => {
        let arr = []
        analyzer.getByteFrequencyData(dataArray)
        for (let i = 0; i < bufferLength; i++) {
            let item = dataArray[i];
            item = item > 150 ? item / 1.5 : item * 1.5;
            arr[i] = dataArray[i]
            // elements[i].style.height = `${dataArray[i]}px`
        }
        console.log(arr);
    }, 1000);
}


</script>

<template>
    <div
        class="group bg-purple-300 w-full px-4 py-2 flex justify-center items-center flex-col rounded-xl accent-purple-700 text-purple-700 shadow-xl">
        <!-- Time Line-->
        <TimeLine />

        <!-- Volume Slider -->
        <SoundBar class="hidden" />

        <!-- Buttons -->
        <PlayerButtonBar @preSong="preSong" @nextSong="nextSong" />
    </div>
</template>


<!-- video.addEventListener('loadstart', handleEvent);
video.addEventListener('progress', handleEvent);
video.addEventListener('canplay', handleEvent);
video.addEventListener('canplaythrough', handleEvent); -->
<!-- 
    video.addEventListener("timeupdate", (event) => {
  console.log("The currentTime attribute has been updated. Again.");
});
 -->