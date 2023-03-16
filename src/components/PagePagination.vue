<script setup>
import { ref } from 'vue';

const emit = defineEmits(['pageChange'])

const page = ref(1)

const prePage = () => {
    if (page.value > 1) {
        page.value = page.value - 1
        emit('pageChange', page.value)
    } else {
        emit('pageChange', page.value)
    }
}
const nextPage = () => {
    page.value = page.value + 1
    emit('pageChange', page.value)

}

</script>

<template>
    <div>
        <ol class="flex justify-center gap-1 text-xs font-medium">
            <button @click="prePage"
                class="flex h-8 w-8 items-center justify-center rounded border border-gray-100 disabled:hidden"
                :disabled="page < 2 ? true : false">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="block h-8 w-8 rounded border border-gray-100 text-center leading-8">
                {{ page }}
            </button>
            <button @click="nextPage"
                class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </ol>

    </div>
</template>