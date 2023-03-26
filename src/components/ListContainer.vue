<script setup>
import ListContainerButton from './ListContainerButton.vue';
import DefaultPage from './list_container_tabs/DefaultPage.vue';
import CurrentSongList from './list_container_tabs/CurrentSongList.vue';
import FavouritesList from './list_container_tabs/FavouritesList.vue';
import SearchResultsList from './list_container_tabs/SearchResultsList.vue';
import UserInfo from './list_container_tabs/UserInfo.vue';
import AudioVisualizer from './list_container_tabs/AudioVisualizer.vue';


import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/UiStore';

const store = useUiStore()
const { getlistContainerTab, getlistContainerTabList } = storeToRefs(store)

</script>

<template>
    <div class="w-full flex-grow py-1 md:py-2 px-1 md:px-2 my-1 md:my-2 rounded-xl relative overflow-clip ">

        <span class="absolute border-t border-l border-blue-200 md:inset-0 md:h-full md:w-16 lg:w-20 border-r flex md:flex-col  
                             bottom-0 right-0 left-0 w-full h-12 z-50
                ">
            <ListContainerButton v-for="tab in getlistContainerTabList" :key="tab.id" :name="tab.name" :icon="tab.icon" />
        </span>
        <span class="absolute border-t border-l border-blue-200 md:top-0 md:right-0 md:h-full md:pl-16 lg:pl-20 flex-grow transition-all
                             top-0 right-0 left-0 w-full h-[92%] overflow-hidden
                ">

                <!-- Default page -->
            <transition appear name="slipe">
            <KeepAlive>
                <DefaultPage v-if="getlistContainerTab === 'defaultPage'" />
            </KeepAlive>
            </transition>

            <!-- Current song list -->
            <transition appear name="slipe">
            <CurrentSongList v-if="getlistContainerTab === 'currentSongList'" />
            </transition>

            <!-- Favourite list -->
            <transition appear name="slipe">
            <FavouritesList v-if="getlistContainerTab === 'favouritesList'" />
            </transition>

            <!-- Search results -->
            <transition appear name="slipe">
            <KeepAlive>
                <SearchResultsList v-if="getlistContainerTab === 'searchResultsList'" />
            </KeepAlive>
            </transition>

            <!-- User info -->
            <transition appear name="slipe">
            <UserInfo v-if="getlistContainerTab === 'userInfo'" />
            </transition>

            <!-- Audio visualizer -->
            <transition appear name="slipe">
            <AudioVisualizer v-if="getlistContainerTab === 'audioVisualizer'" />
            </transition>
        </span>


    </div>
</template>

<style scoped>
.slipe-enter-from{
    opacity: 0;
    transform: scale(0.99);
    transition-delay: 0.4s;
}
.slipe-enter-active{
    transition: all .4s  ease;
}
.slipe-leave-to {
    opacity: 0;
}

.slipe-leave-active {
    transition: all 0.4s ease;
}
</style>