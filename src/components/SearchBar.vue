<script setup>
import { ref } from 'vue';

const input = ref('')
const emit = defineEmits(['submit'])

</script>

<template>
    <!-- <div class="w-full bg-purple-700 rounded-full flex justify-center items-center text-purple-50 p-1"> -->
    <form @submit.prevent="emit('submit', input)"
        class="w-full bg-purple-700 rounded-full flex justify-center items-center text-purple-50 p-1">
        <input type="search" class="flex-grow py-2 pl-4 rounded-full appearance-none text-black bg-purple-500"
            placeholder="Search songs..." v-model="input">
        <button type="submit">
            <i class="fa-solid fa-magnifying-glass px-3 py-2"></i>
        </button>
    </form>
    <!-- </div> -->
</template>