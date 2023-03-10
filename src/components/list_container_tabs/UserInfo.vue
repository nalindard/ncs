<script setup>
import ExpandableList from '../ExpandableList.vue';
import UserProfile from '../UserProfile.vue';
</script>

<template>
    <div class="w-full h-full bg-purple-300 text-purple-50 px-4">
        <div class="py-7">
            <h2 class="text-3xl font-extrabold"> User info </h2>
        </div>
        <div class="h-full overflow-y-scroll pb-24">
            <hr class="mb-4 w-full  mx-auto">
            <!-- User Profile -->
            <div class="h-56 w-96 mb-7">
                <UserProfile />
            </div>
            <hr class="mb-4 w-full  mx-auto">

            <!-- Playlists & History -->
            <ExpandableList />
            <ExpandableList />
            <hr class="mb-4 w-full  mx-auto">
        </div>
    </div>
</template>