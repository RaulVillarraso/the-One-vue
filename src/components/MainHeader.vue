<template>
    <header class="mainHeader bg-ring-dark-green w-screen h-24 p-6 flex items-center justify-between absolute top-0 left-0 text-white">
      <h1 class="font-cinzel text-2xl"><router-link to="/">The One Project</router-link></h1>
      <div class="border-2 border-solid border-ring-golden bg-ring-green text-white">
        <router-link to="/characters" class="text-xl font-cinzel" >Characters</router-link>
      </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>