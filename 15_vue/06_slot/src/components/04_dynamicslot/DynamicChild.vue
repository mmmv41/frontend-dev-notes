<template>
    <div></div>
</template>

<script setup></script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
}

.north {
    grid-column: 1 / span 2;
    height: 200px;
    background-color: #ff9999;
}

.south {
    grid-column: 1 / span 2;
    height: 200px;
    background-color: #99ccff;
}

.east {
    width: 200px;
    height: 200px;
    background-color: #99ff99;
}

.west {
    width: 200px;
    height: 200px;
    background-color: #ffcc66;
}
</style>
