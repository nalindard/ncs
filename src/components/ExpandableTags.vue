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
    <div class="w-full  mb-1 sm:mb-2 md:mb-3 lg:mb-4">
        <details class="h-full bg-blue-500 border-t border-l border-blue-200 bg-opacity-50 text-blue-100 px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-xl"> <!--open -->
            <summary class="appearance-none text-base md:text-lg lg:text-xl font-bold cursor-pointer">{{ title || '#Title' }}</summary>
            <div class="flex flex-wrap justify-between w-full">
                <HashTag v-for="tag in tagList" :key="tag" :tag="tag" @tap="pass" />
                <!-- <HashTag /> -->
                <!-- <HashTag /> -->
                <!-- <HashTag /> -->
            </div>
        </details>
    </div>
</template>