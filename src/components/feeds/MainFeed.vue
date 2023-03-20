<script setup>
import PlayerController from '../PlayerController.vue';
import WelcomeItem from '../WelcomeItem.vue';
import ListContainer from '../ListContainer.vue';

import { storeToRefs } from 'pinia';
import { useUiStore } from '../../stores/UiStore';

const store = useUiStore()
const { getshowWelcomBanner } = storeToRefs(store)

</script>

<template>
    <div
        class="flex flex-col justify-between items-center pt-1 sm:pt-2 pb-1 sm:pb-2 px-1 sm:px-2 md:border-l-[17px] border-0 border-blue-700">
        <!-- Welcome -->
        <WelcomeItem v-if="getshowWelcomBanner"/>
        <!-- List -->
        <ListContainer />
        <!-- Visualizer/ Spectrum -->
        <!-- Player -->
        <PlayerController />
    </div>
</template>
