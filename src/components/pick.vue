<template>
<div class="pick">
<slot></slot>

    </div>
</template>

<script>
export default {
    props: ['picks']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pick {
  font:200;
  color:black;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
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