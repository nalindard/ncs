<script setup>
import ExpandableList from '../ExpandableList.vue';
import SearchBar from '../SearchBar.vue';
import SongInfo from '../SongInfo.vue';


</script>

<template>
    <div class="px-4 py-2 pt-6 flex flex-col justify-between items-center max-w-[20rem] relative">
        <!-- Search -->
        <SearchBar />
        <hr class="border-purple-400 w-11/12 border my-4 ">
        <div class="w-full flex-grow">
            <!-- Playlist -->
            <ExpandableList />
            <!-- History -->
            <ExpandableList />
        </div>
        <!-- Song Info -->
        <SongInfo />
    </div>
</template>

<style scoped>

</style>
