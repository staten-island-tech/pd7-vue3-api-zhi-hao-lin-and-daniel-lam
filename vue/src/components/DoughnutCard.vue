<template>
  <RouterLink to="/doughnut" id="link">Trees in NY</RouterLink>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  export default {
      name: "DoughnutCard",
      props: {},
      components: { RouterLink }
  }
  </script>
