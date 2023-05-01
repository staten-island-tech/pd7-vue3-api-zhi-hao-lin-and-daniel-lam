<template>
    <RouterLink to="/doughnut">Distribution of Trees in NY</RouterLink>
    <br />
    <RouterLink to="/bar">Condition of Trees in NY</RouterLink>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  export default {
    name: 'ChartCard',
    props: {},
    components: { RouterLink }
  }
  </script>
  