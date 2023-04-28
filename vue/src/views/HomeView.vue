<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const squirrel = ref('')
async function getSquirrel() {
  let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  let data = await res.json()
  squirrel.values = data.results
}
onMounted(() => {
  getSquirrel()
})
</script>

<style scoped></style>
