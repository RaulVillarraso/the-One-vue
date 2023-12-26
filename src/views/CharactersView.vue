<template>
  <div class="mt-44 h-screen">
    <div class="flex flex-wrap h-full">
      <CharacterCard v-for="character in characters" :key="character.id" :name="character.name" :race="character.race" />
    </div>
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

<style scoped>
.characterList{
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
</style>