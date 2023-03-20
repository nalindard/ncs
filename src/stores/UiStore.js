import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
    // State,
    const listContainerTabList = ref([
        { id: 1, name: 'defaultPage', icon: 'fa-house' },
        { id: 2, name: 'currentSongList', icon: 'fa-circle-play' },
        { id: 3, name: 'favouritesList', icon: 'fa-heart' },
        { id: 4, name: 'searchResultsList', icon: 'fa-magnifying-glass' },
        { id: 5, name: 'userInfo', icon: 'fa-user' },
        { id: 6, name: 'audioVisualizer', icon: 'fa-sliders' },
    ])
    const listContainerTab = ref('defaultPage')
    const showWelcomBanner = ref(true)
    const showLeftFeed = ref(false)
    const genreList = [
        'Bass',
        'Chill',
        'DrumBass',
        'Drumstep',
        'Dubstep',
        'EDM',
        'Electronic',
        'FutureHouse',
        'Hardstyle',
        'House',
        'Indie',
        'MelodicDubstep',
        'Unknown',
        'Trap',
        'GlitchHop',
        'Phonk',
        'FutureBass',
        'BassHouse',
    ]
    const moodList = [
        'Angry',
        'Dark',
        'Dreamy',
        'Epic',
        'Euphoric',
        'Energetic',
        'Fear',
        'Funny',
        'Glamorous',
        'Gloomy',
        'Happy',
        'Hopeful',
        'LaidBack',
        'Mysterious',
        'Peaceful',
        'Quirky',
        'Relaxing',
        'Restless',
        'Romantic',
        'Sad',
        'Scary',
        'Sexy',
        'Suspense',
        'Weird',
    ]

    // Getters,
    const getlistContainerTabList = computed(() => listContainerTabList.value)
    const getlistContainerTab = computed(() => listContainerTab.value)
    const getshowWelcomBanner = computed(() => showWelcomBanner.value)
    const getShowLeftFeed = computed(() => showLeftFeed.value)
    const getGenreList = computed(() => genreList)
    const getMoodList = computed(() => moodList)

    // Actions,
    function changeListContainerTab(tab) {
        listContainerTab.value = tab
    }
    function toogleWelcomeBanner() {
        showWelcomBanner.value = !showWelcomBanner.value
    }
    function toogleLeftFeed(bool) {
        showLeftFeed.value = bool
    }

    // Exports,
    return {
        listContainerTab,
        getlistContainerTab,
        changeListContainerTab,
        getlistContainerTabList,

        getshowWelcomBanner,
        toogleWelcomeBanner,

        getShowLeftFeed,
        toogleLeftFeed,

        getGenreList,
        getMoodList,
    }
})
