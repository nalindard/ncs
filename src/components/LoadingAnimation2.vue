<script setup>
</script>

<template>
    <div class="parent">
        <div class="child"></div>
    </div>
</template>

<style scoped>
.parent {
    width: 400px;
    aspect-ratio: 1;
    /* background-color: rgb(45, 45, 45); */
    background-color: transparent;
    animation: rotation ease-out 2.7s infinite;
    box-shadow: inset 0 0 40px 12px rgba(255, 255, 255, 0.789);
}

.child {
    width: 100px;
    aspect-ratio: 1;
    background-color: rgb(254, 240, 255);
    border-radius: 50%;
    animation: cycle ease-in 1.7s infinite;
    box-shadow: inset 0 0 8px 7px rgb(194, 204, 255);
}

@keyframes rotation {
    0% {
        transform: rotate(0);
        border-radius: 10%;
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
        border-radius: 40%;
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
        border-radius: 10%;
    }
}

@keyframes cycle {

    0%,
    100% {
        transform: translateX(150%) translateY(0%);
    }

    25% {
        transform: translateX(0%) translateY(150%) scaleY(1.2);
    }

    50% {
        transform: translateX(150%) translateY(300%) scaleX(1.2);
    }

    75% {
        transform: translateX(300%) translateY(150%) scaleY(1.2);
    }
}</style>