<script setup>
const props = defineProps({
        tag: String,
})
const emit = defineEmits(['tap'])
</script>

<template>
        <transition appear name="slipe">
        <span @click="emit('tap', tag)"
                class="inline-block bg-blue-500 bg-opacity-25 border border-t border-l border-blue-200 shadow shadow-blue-400 py-1 sm:py-2 px-2 sm:px-4 flex-grow rounded-full my-1 mx-1 sm:mx-2 md:mx-3 lg:mx-4 text-center text-xs sm:text-sm md:text-base">
                <strong class="text-blue-50">#</strong>{{ tag || '#TagName' }}</span>
        </transition>
</template>

<style scoped>
.slipe-enter-from{
  opacity: 0;
  transform: scale(0.99);
}
.slipe-enter-active{
    transition: all .6s  ease;
}
</style>