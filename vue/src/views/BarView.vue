<template>
  <RouterLink to="/"></RouterLink>
  <div class="container">
    <App></App>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import App from '../components/BarChart.vue'
</script>

<style scoped>
.container {
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin: 2%;
}
</style>