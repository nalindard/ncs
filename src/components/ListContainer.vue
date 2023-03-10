<script setup>
import ListContainerButton from './ListContainerButton.vue';
import DefaultPage from './list_container_tabs/DefaultPage.vue';
import CurrentSongList from './list_container_tabs/CurrentSongList.vue';
import FavouritesList from './list_container_tabs/FavouritesList.vue';
import SearchResultsList from './list_container_tabs/SearchResultsList.vue';
import UserInfo from './list_container_tabs/UserInfo.vue';

import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/UiStore';

const store = useUiStore()
const { getlistContainerTab, getlistContainerTabList } = storeToRefs(store)

</script>

<template>
    <div class="w-full flex-grow py-2 px-2 my-2 rounded-xl relative overflow-clip ">
        <span class="absolute inset-0 h-full w-16 border-r flex flex-col justify-evenly ">
            <ListContainerButton v-for="tab in getlistContainerTabList" :key="tab.id" :name="tab.name" :icon="tab.icon" />
        </span>
        <span class="absolute top-0 right-0 h-full w-11/12 flex-grow">
            <!-- Default page -->
            <KeepAlive>
                <DefaultPage v-if="getlistContainerTab === 'defaultPage'" />
            </KeepAlive>

            <!-- Current song list -->
            <CurrentSongList v-if="getlistContainerTab === 'currentSongList'" />

            <!-- Favourite list -->
            <FavouritesList v-if="getlistContainerTab === 'favouritesList'" />

            <!-- Search results -->
            <SearchResultsList v-if="getlistContainerTab === 'searchResultsList'" />

            <!-- User info -->
            <UserInfo v-if="getlistContainerTab === 'userInfo'" />
        </span>
    </div>
</template>