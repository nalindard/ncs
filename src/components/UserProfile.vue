<script setup>
</script>

<template>
    <div class="bg-blue-400 bg-opacity-50 w-full max-w-[20rem] h-full rounded-2xl shadow-lg overflow-hidden relative">
        <!-- Blured background -->
        <span
            class="
        absolute top-0 left-0 scale-110 bg-center bg-cover blur-lg
        bg-[url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80')] w-full h-full"></span>
        <!-- User profile -->
        <div class="absolute top-0 left-0 w-full h-full bg-opacity-25 bg-blue-400 p-2 flex justify-start items-end">
            <div class="flex flex-col items-left justify-between w-full h-full">
                <img class="inline-block h-5/12 w-5/12 rounded-full"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="Image Description" />
                <div class="mt-1">
                    <h3
                        class="font-semibold text-blue-900 bg-blue-400 bg-opacity-40 px-2 rounded-full">
                        Maria Wanner</h3>
                    <p class="text-sm font-medium text-blue-100 bg-blue-700 bg-opacity-40 px-2 rounded-full mt-1">
                        maria@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</template>
