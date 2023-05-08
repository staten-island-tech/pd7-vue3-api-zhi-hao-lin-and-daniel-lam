<template>
  <RouterLink to="/doughnut">Doughnut Chart</RouterLink>
  <br />
  <RouterLink to="/bar">Bar Chart</RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'ChartCard',
  props: {},
  components: { RouterLink }
}
</script>

<style scoped></style>