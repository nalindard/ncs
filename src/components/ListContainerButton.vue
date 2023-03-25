<script setup>
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/UiStore';

const store = useUiStore()
const { getlistContainerTab } = storeToRefs(store)
const { changeListContainerTab, } = store

const props = defineProps({
    name: String,
    icon: String,
})
</script>

<template>
    <span class="flex-grow bg-opacity-70"
    :class="getlistContainerTab === props.name ? 'text-blue-700' : 'text-blue-50'">
        <button @click="changeListContainerTab(props.name)"
        class="w-full h-full hover:bg-blue-200 bg-opacity-70 transition-all"
            :class="getlistContainerTab === props.name ? 'bg-blue-300' : 'bg-blue-500'">
            <i class="fa-solid scale-75 md:scale-90 lg:scale-100" :class="props.icon || 'fa-indent'"></i>
        </button>
    </span>
</template>