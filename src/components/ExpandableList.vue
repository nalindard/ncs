<script setup>
import FeedListItem from './FeedListItem.vue';

</script>

<template>
    <div class="w-full mb-4">
        <details class="h-full bg-purple-500 bg-opacity-50 text-purple-100 px-4 py-2 rounded-xl">
            <summary class="appearance-none text-xl font-bold cursor-pointer">Play List or History</summary>
            <div class="flex flex-wrap justify-between w-full">
                <FeedListItem />
                <FeedListItem />
                <FeedListItem />
                <FeedListItem />
                <FeedListItem />
                <FeedListItem />
            </div>
        </details>
    </div>
</template>

<style>
::-webkit-details-marker {
    color: red;
    background: red;
}
</style>