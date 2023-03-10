<script setup>
import ListSongCard from './ListSongCard.vue';
import ExpandableTags from '../ExpandableTags.vue';
import ExpandableList from '../ExpandableList.vue';

// Trying to Implant right feed to here,
import SearchBar from '../SearchBar.vue';

</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50">
        <div class="flex justify-between items-center px-6 py-4">
            <div>
                <h2 class="text-4xl font-extrabold"> Search results </h2>
            </div>
            <div class="bg-purple-500 bg-opacity-50 px-3 py-2 rounded-full">
                <p class="text-base italic">Playing  27/80</p>
            </div>
        </div>
        <!-- Search -->
        <div class="mx-2 my-2">
            <SearchBar />
        </div>
        <div class="w-full h-full overflow-y-scroll py-4 px-2">
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <!-- <ListSongCard :song="{}" :number="00"/> -->
            <ExpandableTags />
            <ExpandableTags />
            <hr class="mb-4 w-full  mx-auto">
        </div>
    </div>
</template>