<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <div id="app">
    <MainHeader />
    <RouterView />
    <MainFooter />
  </div>
</template>

<style>

</style>
