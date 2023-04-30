<template>
    <RouterLink to="/bar" id="link">Tree Statuses</RouterLink>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  export default {
    name: 'statusCard',
    props: {},
    components: { RouterLink }
  }
  </script>
  