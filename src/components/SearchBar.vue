<script setup>
import { ref } from 'vue';

const input = ref('')
const emit = defineEmits(['submit'])

</script>

<template>
    <!-- <div class="w-full bg-blue-700 bg-opacity-40 rounded-full flex justify-center items-center text-blue-50 p-1"> -->
    <form @submit.prevent="emit('submit', input)"
        class="w-full bg-blue-700 bg-opacity-40 rounded-full flex justify-center items-center text-blue-50 px-1 py-1 border-t border-l border-blue-200">
        <input type="search" class="flex-grow py-1 pl-2 md:pl-4 rounded-full appearance-none text-blue-50 bg-transparent w-10/12 text-xs sm:text-sm md:text-base "
            placeholder="Search songs..." v-model="input">
        <button type="submit" class="w-2/12 md:w-1/12">
            <i class="fa-solid fa-magnifying-glass px-2 md:px-3 py-1 scale-90"></i>
        </button>
    </form>
    <!-- </div> -->
</template>