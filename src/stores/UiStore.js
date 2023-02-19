import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('UiStore', () => {
    // State,
    const count = ref(0)
    const listContainerTabList = ref([
        { id: 1, name: 'defaultPage', icon: 'fa-house' },
        { id: 2, name: 'currentSongList', icon: 'fa-circle-play' },
        { id: 3, name: 'favouritesList', icon: 'fa-heart' },
        { id: 4, name: 'searchResultsList', icon: 'fa-magnifying-glass' },
        { id: 5, name: 'userInfo', icon: 'fa-user' },
    ])
    const listContainerTab = ref('defaultPage')
    const showWelcomBanner = ref(true)

    // Getters,
    const doubleCount = computed(() => count.value * 2)
    const getlistContainerTabList = computed(() => listContainerTabList.value)
    const getlistContainerTab = computed(() => listContainerTab.value)
    const getshowWelcomBanner = computed(() => showWelcomBanner.value)

    // Actions,
    function increment() {
        count.value++
        console.log(count.value, 'Count increased')
    }
    function changeListContainerTab(tab) {
        listContainerTab.value = tab
    }
    function toogleWelcomeBanner() {
        showWelcomBanner.value = !showWelcomBanner.value
    }

    // Exports,
    return {
        count,
        doubleCount,
        increment,

        listContainerTab,
        getlistContainerTab,
        changeListContainerTab,
        getlistContainerTabList,

        getshowWelcomBanner,
        toogleWelcomeBanner,
    }
})
