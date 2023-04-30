<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'BarGraph',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['Alive', 'Dead', 'Stump'],
        datasets: [
          {
            label: 'Tree Statuses',
            data: [1, 2, 3],
            backgroundColor: ['#ffc0cb', '#383838', '#003500']
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
      const treeData = await res.json()
      const Alive = treeData.filter((tree) => tree.status === 'Alive')
      this.chartData.datasets[0].data.push(Alive.length)
      const Dead = treeData.filter((tree) => tree.status === 'Dead')
      this.chartData.datasets[0].data.push(Dead.length)
      const Stump = treeData.filter((tree) => tree.status === 'Stump')
      this.chartData.datasets[0].data.push(Stump.length)
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>
