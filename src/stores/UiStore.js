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
    ])
    const listContainerTab = ref('defaultPage')
    const showWelcomBanner = ref(false)
    const showLeftFeed = ref(false)

    // Getters,
    const getlistContainerTabList = computed(() => listContainerTabList.value)
    const getlistContainerTab = computed(() => listContainerTab.value)
    const getshowWelcomBanner = computed(() => showWelcomBanner.value)
    const getShowLeftFeed = computed(() => showLeftFeed.value)

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
    }
})
