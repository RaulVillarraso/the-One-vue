<template>
  <div class="w-40 h-20 bg-ring-light text-gray-900 m-2 rounded-lg border-2 border-solid border-ring-golden flex flex-col items-center justify-center">
    <p class="font-bold text-xl">{{ name }}</p>
    <p>{{ race }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  race: String
})

</script>

<style scoped>

</style>