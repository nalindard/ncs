<script setup >
import HashTag from './HashTag.vue';

</script>

<template>
    <div class="w-full mb-4">
        <details class="h-full bg-purple-500 bg-opacity-50 text-purple-100 px-4 py-2 rounded-xl" open>
            <summary class="appearance-none text-xl font-bold cursor-pointer">Genre or Mood</summary>
            <div class="flex flex-wrap justify-between w-full">
                <HashTag />
                <HashTag />
                <HashTag />
                <HashTag />
            </div>
        </details>
    </div>
</template>