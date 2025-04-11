<template>
    <div>
        <h1>Home</h1>
        <button @click="changeRouter">router 경로 변경</button>
    </div> 
</template>

<script setup>

    /* useRouter를 활용한 라우팅 */
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function changeRouter() {
        router.push('/pathvariable/2');
    }
</script>

<style scoped>

</style>