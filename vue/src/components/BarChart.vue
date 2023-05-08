<template>
  <RouterLink to="/doughnut">Click here to see doughnut chart</RouterLink>
  <br />
  <Bar v-if="showGraph" :data="data" :options="options" />
  <Bar v-if="showGraphs" :data="boroData" :options="options" />
  <button @click="createGraph">Create Graph</button>
  <select type="input" id="input">
    <option>Trees in NY</option>
    <option>Types of Trees</option>
  </select>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
    Bar,
  },
  data() {
    return {
      showGraph: false,
      data: {
        labels: ["London Planetree", "Honeylocust", "American Linden", "Red Maple", "Ginkgo", "Willow Oak", "Sycamore Maple", "Amur Maple", "Pin Oak", "Hedge Maple"],
        datasets: [{ label: "Types of Trees", data: [] }],
      },

      options: {
        responsive: true,
        backgroundColor: ["#469e34", "#edba1f", "#1e590b","#ba142b","#9adb2a","#5C4033","#042b0f", "#ff0357","#98f296","#6dad6c"],
      },
      
      showGraphs: false,
      boroData: {
        labels: ["Staten Island", "Brooklyn", "Queens", "Manhattan", "Bronx"],
        datasets: [{ label: "Trees in NY", data: [] }],
      },
    };
  },
  methods: {
    async createGraph() {
      let res = await fetch(
        "https://data.cityofnewyork.us/resource/uvpi-gqnh.json"
      );
      let treeData = await res.json();
      console.log(treeData);
      let userInput = document.querySelector("#input").value;
      console.log(userInput);//test
      if (userInput === "Types of Trees") {
        this.showGraph = true;
        this.showGraphs = false;
//array methods types of trees
        const london = treeData.filter((tree) => tree.spc_common === "London planetree");
        this.data.datasets[0].data.push(london.length);

        const honey = treeData.filter((tree) => tree.spc_common === "honeylocust");
        this.data.datasets[0].data.push(honey.length);

        const american = treeData.filter((tree) => tree.spc_common === "American linden");
        this.data.datasets[0].data.push(american.length);

        const red = treeData.filter((tree) => tree.spc_common === "red maple");
        this.data.datasets[0].data.push(red.length);

        const ginkgo = treeData.filter((tree) => tree.spc_common === "ginkgo");
        this.data.datasets[0].data.push(ginkgo.length);

        const willow = treeData.filter((tree) => tree.spc_common === "willow oak");
        this.data.datasets[0].data.push(willow.length);

        const sycamore = treeData.filter((tree) => tree.spc_common === "sycamore maple");
        this.data.datasets[0].data.push(sycamore.length);

        const amur = treeData.filter((tree) => tree.spc_common === "Amur maple");
        this.data.datasets[0].data.push(amur.length);

        const pin = treeData.filter((tree) => tree.spc_common === "pin oak");
        this.data.datasets[0].data.push(pin.length);

        const hedge = treeData.filter((tree) => tree.spc_common === "hedge maple");
        this.data.datasets[0].data.push(hedge.length);
      //end of "types of trees" 

      } else if (userInput === "Trees in NY") {
        this.showGraph = false;
        this.showGraphs = true;

        const si = treeData.filter((tree) => tree.boroname === "Staten Island");
        this.boroData.datasets[0].data.push(si.length);

        const bk = treeData.filter((tree) => tree.boroname === "Brooklyn");
        this.boroData.datasets[0].data.push(bk.length);

        const qns = treeData.filter((tree) => tree.boroname === "Queens");
        this.boroData.datasets[0].data.push(qns.length);

        const man = treeData.filter((tree) => tree.boroname === "Manhattan");
        this.boroData.datasets[0].data.push(man.length);

        const bx = treeData.filter((tree) => tree.boroname === "Bronx");
        this.boroData.datasets[0].data.push(bx.length);
      }
    },
  },
};
</script>