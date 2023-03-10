<script setup>
import { useUiStore } from '../../stores/UiStore';
import { storeToRefs } from 'pinia';

const uiStore = useUiStore()
const { getShowLeftFeed } = storeToRefs(uiStore)
const { toogleLeftFeed } = uiStore

</script>

<template>
    <div class="bg-purple-500 bg-opacity-50 h-12 w-12 absolute z-50 rounded-full"
        :class="getShowLeftFeed ? 'hidden' : ''">
        <button class="w-full h-full grid items-center text-purple-50" @click="toogleLeftFeed(true)">
            <i class="fa-solid fa-bars-staggered"></i>
        </button>
    </div>
</template>