<template>
  <div>
    <CharacterCard v-for="character in characters" :key="character.id" :name="character.name" :race="character.race" />
  </div>
</template>

<script setup>
import { getAllCharacters } from '@/services/characters.js'
import { onMounted, ref } from 'vue'
import CharacterCard from '@/components/CharacterCard.vue';

const characters = ref([])

onMounted(async () => {
  try {
    characters.value = await getAllCharacters()
  } catch (error) {
    console.log(error)
  }
})

</script>

<style lang="scss" scoped>

</style>