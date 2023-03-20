<script setup>
import ExpandableList from '../ExpandableList.vue';
import UserProfile from '../UserProfile.vue';
</script>

<template>
    <div class="w-full h-full bg-blue-300 bg-opacity-40 text-blue-50 px-2 md:px-4">
        <div class="h-full w-full overflow-y-scroll pb-24">
            <!-- User Profile -->
            <div class="h-48 sm:h-56 w-full mb-7 mt-2 border-blue-200">
                <UserProfile />
            </div>
            <hr class="mb-4 w-full  mx-auto border-blue-200">

            <!-- Playlists & History -->
            <ExpandableList :title="'Play List'" :items="[1]" />
            <ExpandableList :title="'History'" :items="[1]" />
            <hr class="mb-4 w-full  mx-auto">
        </div>
    </div>
</template>