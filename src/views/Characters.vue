<template>
 <app-characterHead/>
</template>

<script>
import Chart from '../components/chart.vue';
import Head from '../components/head.vue';
import characterHead from '../components/characterHead.vue';
import getData from '@/api/getData.js'
export default {
components: {
  'app-chart': Chart,
  'app-head' : Head,
  'app-characterHead' : characterHead,
  },
}
  </script>

<style>
.picks {
  font:200;
  color:black;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>