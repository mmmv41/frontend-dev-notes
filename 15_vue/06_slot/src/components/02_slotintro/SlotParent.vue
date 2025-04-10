<template>
    <div class="parentContainer">
        <Child>
            {{ slotData }}
        </Child>
    </div>
</template>


<!-- 다른 vue 파일을 import 할 때는 내가 원하는 이름으로 쓸 수 있다.(feat. export default 이기 때문) -->
<script setup>
    import Child from './SlotChild.vue'
    import {ref} from 'vue';

    // slot은 일반적으로 태그 형태로 전달됨.
    // 보통 상태값, 데이터는 props를 활용.
    const slotData = ref('hello data');
</script>

<style scoped>
    .parentContainer {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid black;
    }
</style>