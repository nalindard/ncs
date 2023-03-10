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
        class="bg-purple-200 flex flex-col justify-between items-center pt-5 pb-2 px-2 md:border-l-[17px] border-0 border-purple-700">
        <!-- Welcome -->
        <WelcomeItem v-if="getshowWelcomBanner"/>
        <!-- List -->
        <ListContainer />
        <!-- Visualizer/ Spectrum -->
        <!-- Player -->
        <PlayerController />
    </div>
</template>
