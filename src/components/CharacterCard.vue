<template>
  <div class="characterCard">
    {{ name }} - {{ race }}
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
  width: 8em;
  height: 4em;
  background-color: #cfa76b;
}
</style>