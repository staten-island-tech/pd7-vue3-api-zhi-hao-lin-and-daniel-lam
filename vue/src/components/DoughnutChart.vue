<template>
  <div class="chart">
    <RouterLink to="/">Back to Main</RouterLink>
    <h1>Trees in Each Borough</h1>
    <Doughnut v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ['Brooklyn', 'Queens', 'Manhattan', 'Bronx', 'Staten Island'],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: ['#FF0000', '#FFFF00', '#0000FF', '#00FF00', '#A020F0']
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
      const treeData = await res.json()
      const red = treeData.filter((tree) => tree.boroname === 'Brooklyn')
      this.chartData.datasets[0].data.push(red.length)
      const yellow = treeData.filter((tree) => tree.boroname === 'Queens')
      this.chartData.datasets[0].data.push(yellow.length)
      const blue = treeData.filter((tree) => tree.boroname === 'Manhattan')
      this.chartData.datasets[0].data.push(blue.length)
      const green = treeData.filter((tree) => tree.boroname === 'Bronx')
      this.chartData.datasets[0].data.push(green.length)
      const purple = treeData.filter((tree) => tree.boroname === 'Staten Island')
      this.chartData.datasets[0].data.push(purple.length)
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartData)
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
  color: rgb(73, 66, 53);
  font-size: 5rem;
}
h1:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>
