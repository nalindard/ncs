<script setup>
import PlayerButtonBar from './player_controller_items/PlayerButtonBar.vue';
import SoundBar from './player_controller_items/SoundBar.vue';
import TimeLine from './player_controller_items/TimeLine.vue';

</script>

<template>
    <div
        class="group bg-purple-300 w-full px-4 py-2 flex justify-center items-center flex-col rounded-xl accent-purple-700 text-purple-700 shadow-xl">
        <!-- Time Line-->
        <TimeLine />

        <!-- Volume Slider -->
        <SoundBar />

        <!-- Buttons -->
        <PlayerButtonBar />
    </div>
</template>
