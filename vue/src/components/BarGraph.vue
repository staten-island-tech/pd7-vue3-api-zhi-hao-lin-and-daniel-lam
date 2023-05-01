<template>
  <header>
      <RouterLink to="/">Back to Main</RouterLink>
  </header>
  <Bar v-if="showGraph" :data="data" :options="options" />
</template>

<script>
import {
  Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'vue-chartjs'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: ['Alive','Stump','Dead'],
        datasets: [{ data: [] }]
      },
      options: {
        responsive: true,
        backgroundColor: ['#963a2f', '#d58258', '#ecb984']
      }
    }
  },
  async mounted() {
    let res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
    let treeStatus = await res.json()
    console.log(treeStatus)
    const alive = treeStatus.filter((treeEl) => treeEl.status === 'Alive')
    this.data.datasets[0].data.push(alive.length)
    console.log(alive.length)
    const stump = treeStatus.filter((treeEl) => treeEl.status === 'Stump')
    this.data.datasets[0].data.push(gray.length)
    console.log(stump.length)
    const dead = treeStatus.filter((treeEl) => treeEl.status === 'Dead')
    this.data.datasets[0].data.push(dead.length)
    console.log(dead.length)
  }
}
</script>