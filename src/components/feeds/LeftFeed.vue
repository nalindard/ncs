<script setup>
import ExpandableTags from '../ExpandableTags.vue';
import UserProfile from '../UserProfile.vue';

// Trying to Implant right feed to here,
import ExpandableList from '../ExpandableList.vue';
import SongInfo from '../SongInfo.vue';

</script>

<template>
    <div class="px-4 py-2 w-96 min-h-screen flex flex-col justify-between lg:relative">
        <!-- Button -->
        <span class="bg-red-500 h-20 w-20 absolute z-5">
            <button></button>
        </span>

        <!-- User -->
        <div class="h-1/4">
            <UserProfile />
        </div>

        <div class="w-full h-1/4 px-2 mb-14 mt-7 hidden">
            <SongInfo />
        </div>

        <div class="h-2/4 flex-grow bg-purple-300 rounded-xl overflow-y-scroll flex flex-col py-4 my-3 px-1">
            <!-- Genre -->
            <ExpandableTags />
            <hr class="mb-4 w-10/12  mx-auto">
            <!-- Mood -->
            <ExpandableTags />
            <hr class="mb-4 w-10/12  mx-auto">
            <!-- Playlist -->
            <ExpandableList />
            <hr class="mb-4 w-10/12  mx-auto">
            <!-- History -->
            <ExpandableList />
        </div>
        <!-- Settings -->
    </div>
</template>

<style scoped></style>
