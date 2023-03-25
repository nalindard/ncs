<template>
    <span id="anime">
        <div class="loader"></div>
        <div class="loader-2"></div>
    </span>
</template>

<style scoped>
#anime {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    /*   position: relative; */
    justify-content: center;
    background-color: rgba(0, 23, 234, 0.44);
    align-items: center;
    /* transform: rotate(45deg); */
}

.loader,
.loader-2 {
    border-radius: 50%;
    width: 72%;
    /* height: 50%; */
    aspect-ratio: 1;
    -webkit-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite alternate;
    background-color: rgba(255, 255, 255, 0.57);
    opacity: .9;
}

.loader-2 {
    background-color: rgba(0, 0, 255, 0.442);
    animation: spin 4s linear infinite alternate;
    animation-delay: 2s;
}


@keyframes spin {
    0% {
        transform: scale(100%);
    }

    100% {
        transform: scale(140%);
    }
}

@keyframes spin-2 {
    0% {
        transform: scale(140%);
    }

    100% {
        transform: scale(100%);
    }
}
</style>