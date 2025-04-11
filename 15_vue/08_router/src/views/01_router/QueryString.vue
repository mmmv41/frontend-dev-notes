<template>
    <div>
        <h1>QueryString</h1>
        <h2>넘어온 query string 값 = {{ currentRoute.query }}</h2>  
    </div>
</template>

<script setup>
    import {useRoute} from 'vue-router';

    const currentRoute = useRoute();
</script>   

<style scoped>

</style>