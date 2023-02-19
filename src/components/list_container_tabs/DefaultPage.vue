<script setup>
import SongCard from '../SongCard.vue';
import PagePagination from '../PagePagination.vue'

</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50">
        <div class="flex justify-between items-center px-6 py-4">
            <div>
                <h2 class="text-4xl font-extrabold"> Default Page </h2>
            </div>
            <PagePagination />
        </div>
        <div class="w-full h-full flex flex-wrap justify-evenly items-start overflow-y-scroll pb-24">
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
            <SongCard />
        </div>
    </div>
</template>