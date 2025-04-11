<template>
  <div :class="layoutClass">
    <Header v-if="showHeader" />
    <main v-if="showMain">
      <router-view />
    </main>
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'

const route = useRoute()

const layoutType = computed(() => route.meta.layout || 'default')

const layoutClass = computed(() => {
  if (layoutType.value === 'landing') return 'layout landing-bg'
  if (layoutType.value === 'mainpage') return 'layout light-rounded'
  if (layoutType.value === 'mypage') return 'layout black'
  return 'layout default'
})

const showHeader = computed(() => layoutType.value !== 'none')
const showFooter = computed(() => layoutType.value !== 'none')
const showMain = computed(() => layoutType.value !== 'landing')
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.landing-bg {
  background-color: #000;
  color: white;
}

.light-rounded {
  background-color: #f2f2f2;
  border-radius: 20px;
  margin: 0 auto;
  padding: 2rem;
  max-width: 1400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
}

.black {
  background-color: #000;
  color: white;
  flex-grow: 1;
}

.default {
  background-color: white;
  color: black;
  flex-grow: 1;
}

main {
  flex-grow: 1;
}
</style>
