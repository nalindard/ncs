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
    <span class="flex-grow"
    :class="getlistContainerTab === props.name ? 'text-purple-700' : 'text-purple-50'">
        <button @click="changeListContainerTab(props.name)"
        class="w-full h-full hover:bg-purple-200"
            :class="getlistContainerTab === props.name ? 'bg-purple-300' : 'bg-purple-500'">
            <i class="fa-solid" :class="props.icon || 'fa-indent'"></i>
        </button>
    </span>
</template>