<template>
  <RouterLink to="/"></RouterLink><DoughnutChart />
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue'
export default {
  name: 'App',
  components: { DoughnutChart }
}
</script>