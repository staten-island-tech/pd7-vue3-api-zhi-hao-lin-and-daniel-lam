<template>
  <RouterLink to="/bar">Click here to see bar chart</RouterLink>
    <div class="chart">
      <Doughnut v-if="loaded" :data="chartData" :options="chartOptions" />
      <button @click="getTreeBoro()">Amount of Trees in Each Borough</button>
      <button @click="getTreeSpecies()">Different Types of Tree Species</button>
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
        treeBoro: false,
        treeSpecies: false,
        chartData: {
          labels: [],
          datasets: [{ data: [] }]
        },
        chartOptions: {
          responsive: true,
          backgroundColor: []
        }
      }
    },
    methods: {
      async getTreeBoro() {
        this.treeBoro = true
        this.treeSpecies = false
        this.loaded = false
        try {
          const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
          const treeData = await res.json()
          //array methods filter trees by borough
          const staten= treeData.filter((treeEl) => treeEl.boroname === 'Staten Island')
          const brooklyn = treeData.filter((treeEl) => treeEl.boroname === 'Brooklyn')
          const queens = treeData.filter((treeEl) => treeEl.boroname === 'Queens')
          const manhattan = treeData.filter((treeEl) => treeEl.boroname === 'Manhattan')
          const bronx = treeData.filter((treeEl) => treeEl.boroname === 'Bronx')
          //display numbers on chart
          this.chartData.datasets[0].data = [staten.length, brooklyn.length, queens.length, manhattan.length, bronx.length]
          this.chartData.labels = ['Staten Island', 'Brooklyn', 'Queens', 'Manhattan', 'Bronx']
          this.chartOptions.backgroundColor = ["#469e34", "#edba1f", "#1e590b","#ba142b","#9adb2a"]
  
          this.loaded = true
        } catch (e) {
          console.error(e)
        }
        console.log(this.chartData)
      },
      async getTreeSpecies() {
        this.treeBoro = false
        this.treeSpecies = true
        this.loaded = false
        try {
          const res = await fetch('https://data.cityofnewyork.us/resource/uvpi-gqnh.json')
          const treeData = await res.json()
          //filter trees by species
          const londonTree = treeData.filter((treeEl) => treeEl.spc_common === "London planetree");
          const honeyTree = treeData.filter((treeEl) => treeEl.spc_common === "honeylocust");
          const americanTree = treeData.filter((treeEl) => treeEl.spc_common === "American linden");
          const redTree = treeData.filter((treeEl) => treeEl.spc_common === "red maple");
          const ginkgoTree = treeData.filter((treeEl) => treeEl.spc_common === "ginkgo");
          const willowTree = treeData.filter((treeEl) => treeEl.spc_common === "willow oak");
          const sycamoreTree = treeData.filter((treeEl) => treeEl.spc_common === "sycamore maple");
          const amurTree = treeData.filter((treeEl) => treeEl.spc_common === "Amur maple");
          const pinTree = treeData.filter((treeEl) => treeEl.spc_common === "pin oak");
          const hedgeTree = treeData.filter((treeEl) => treeEl.spc_common === "hedge maple");
          //end
          this.chartData.datasets[0].data = [londonTree.length, honeyTree.length, americanTree.length, redTree.length, ginkgoTree.length, willowTree.length, sycamoreTree.length, amurTree.length, pinTree.length, hedgeTree.length]
          this.loaded = true
          this.chartData.labels = ['London Planetree', 'Honeylocust', 'American Linden', 'Red Maple', 'Ginkgo', 'Willow Oak', 'Sycamore Maple', 'Amur Maple', 'Pin Oak', 'Hedge Maple']
          this.chartOptions.backgroundColor = ["#469e34", "#edba1f", "#1e590b","#ba142b","#9adb2a","#5C4033","#042b0f", "#ff0357","#98f296","#6dad6c"]
        } catch (e) {
          console.error(e)
        }
        console.log(this.chartData)
      }
    }
  }
  </script>