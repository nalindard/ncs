<script setup >
import HashTag from './HashTag.vue';

const props = defineProps({
    title: String,
    tagList: Array,
})
const emit = defineEmits(['search'])

const pass = tag => {
    emit('search', { type: props.title, tag: tag })
}

</script>

<template>
    <div class="w-full mb-4">
        <details class="h-full bg-purple-500 bg-opacity-50 text-purple-100 px-4 py-2 rounded-xl"> //open
            <summary class="appearance-none text-xl font-bold cursor-pointer">{{ title || '#Title' }}</summary>
            <div class="flex flex-wrap justify-between w-full">
                <HashTag v-for="tag in tagList" :key="tag" :tag="tag" @tap="pass" />
                <!-- <HashTag /> -->
                <!-- <HashTag /> -->
                <!-- <HashTag /> -->
            </div>
        </details>
    </div>
</template>