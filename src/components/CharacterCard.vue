<template>
  <div class="characterCard">
    <span>{{ name }}</span> -
    <span>{{ race }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  race: String
})

</script>

<style lang="scss" scoped>
.characterCard{
  width: 10em;
  height: 5em;
  background-color: #cfa76b;
  margin: 8px;
  color: #444444;
}
</style>