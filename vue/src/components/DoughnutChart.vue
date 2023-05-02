<template>
  <div class="chart">
    <RouterLink to="/">Back to Main</RouterLink>
    <h1>Types of Trees</h1>
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
        labels: [
          'London planetree',
          'honeylocust',
          'American linden',
          'red maple',
          'ginkgo',
          'willow oak',
          'sycamore maple',
          'Amur maple',
          'pin oak',
          'hedge maple'
        ],
        datasets: [{ data: [] }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        backgroundColor: [
          '#963a2f',
          '#d58258',
          '#ecb984',
          '#fffee9',
          '#a8a676',
          '#c37367',
          '#e8d3a3',
          '#ffa633',
          '#5d6f66',
          '#e77e9b'
        ]
      }
    }
  },
  async mounted() {
    try {
      const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
      const treeData = await res.json()
      const red = treeData.filter((tree) => tree.spc_common === 'London planetree')
      this.chartData.datasets[0].data.push(red.length)
      const yellow = treeData.filter((tree) => tree.spc_common === 'honeylocust')
      this.chartData.datasets[0].data.push(yellow.length)
      const blue = treeData.filter((tree) => tree.spc_common === 'American linden')
      this.chartData.datasets[0].data.push(blue.length)
      const green = treeData.filter((tree) => tree.spc_common === 'red maple')
      this.chartData.datasets[0].data.push(green.length)
      const purple = treeData.filter((tree) => tree.spc_common === 'ginkgo')
      this.chartData.datasets[0].data.push(purple.length)
      const orange = treeData.filter((tree) => tree.spc_common === 'willow oak')
      this.chartData.datasets[0].data.push(orange.length)
      const pink = treeData.filter((tree) => tree.spc_common === 'sycamore maple')
      this.chartData.datasets[0].data.push(pink.length)
      const brown = treeData.filter((tree) => tree.spc_common === 'Amur maple')
      this.chartData.datasets[0].data.push(brown.length)
      const black = treeData.filter((tree) => tree.spc_common === 'pin oak')
      this.chartData.datasets[0].data.push(black.length)
      const grey = treeData.filter((tree) => tree.spc_common === 'hedge maple')
      this.chartData.datasets[0].data.push(grey.length)
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
  font-size: 2.55rem;
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
