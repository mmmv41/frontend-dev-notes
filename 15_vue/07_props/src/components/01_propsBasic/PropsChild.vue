<template>
    <h3>전달받은 props: {{ props.message }}</h3>
</template>

<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        message: String
    })
</script>

<style scoped>
    
</style>