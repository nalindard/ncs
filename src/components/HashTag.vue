<script setup>
const props = defineProps({
        tag: String,
})
const emit = defineEmits(['tap'])
</script>

<template>
        <span @click="emit('tap', tag)"
                class="inline-block bg-purple-500 py-2 px-4 flex-grow rounded-full my-1 mx-4 text-center">
                #{{ tag || '#TagName' }}</span>
</template>