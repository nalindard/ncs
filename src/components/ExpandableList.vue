<script setup>
import FeedListItem from './FeedListItem.vue';

const props = defineProps({
    title: String,
    items: Array,
})

</script>

<template>
    <div class="w-full  mb-1 sm:mb-2 md:mb-3 lg:mb-4">
        <details class="h-full bg-blue-500 bg-opacity-50 text-blue-100 border-t border-l border-blue-200 px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-xl transition-all">
            <summary class="appearance-none text-base md:text-lg lg:text-xl font-bold cursor-pointer">{{ title || '#Title' }}</summary>
            <div class="flex flex-wrap justify-between w-full">
                <FeedListItem v-for="item in items"/>
                <!-- <FeedListItem /> -->
                <!-- <FeedListItem /> -->
                <!-- <FeedListItem /> -->
                <!-- <FeedListItem /> -->
                <!-- <FeedListItem /> -->
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