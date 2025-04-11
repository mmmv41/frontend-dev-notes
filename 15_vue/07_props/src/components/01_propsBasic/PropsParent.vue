<!-- 
    Props와 Slot 의 차이
    - Props : 부모가 자식에게 데이터 전달 시 사용
    - Slot : 부모가 자식에게 태그를 전달 시 사용

    - Props 는 readonly 의 개념 -> 자식 컴포넌트에서 수정해도 부모에 영향 주면 x
    (안티 패턴 방지) 
-->

<template>
    <div :class="{container:true, dark:darkState}">
        <!-- 
            원하는 이름으로 부모 컴포넌트의 데이터를 전달할 수 있다.
            (일반적으로 같은 이름을 사용 -> 유지보수 측명) 
        -->
        <PropsChild :message="message"/>

        <!-- props는 아니지만, 직접 사용자 정의형 이벤트인 toggle을 물려줌 -->
        <DarkMode @toggle="toggleDarkMode"/>

        <ReadProps :readValue="readValue"/>
    </div>
</template>

<script setup>
    import PropsChild from './PropsChild.vue';
    import DarkMode from './DarkMode.vue';
    import ReadProps from './ReadProps.vue';

    import {ref} from 'vue';
    
    const message = ref('hello');
    const darkState = ref(false);
    const readValue = ref('Vue는 재밌다')

    function toggleDarkMode() {
        darkState.value = !darkState.value;
    }

</script>

<style scoped>
        .container{
        border: 1px solid;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .dark{
        background-color: black;
        color: white;
    }
</style>