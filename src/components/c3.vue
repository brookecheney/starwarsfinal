<template>
<div>
<img src="@/images/c3po.jpg"/>
          <div class="fill-height bottom-gradient">
          <button class="luke" @click="show = !show">View More</button>

<br><br>

<transition name="slide" type="animation" appear>
<div class="alert alert-info" v-if="show">C-3PO is a droid 
  programmed for etiquette and protocol, built by the heroic 
  Jedi Anakin Skywalker, and a constant companion to astromech 
  R2-D2. Over the years, he was involved in some of the galaxy’s 
  most defining moments and thrilling battles -- and is fluent in 
  more than seven million forms of communication. In the years 
  after the Empire’s defeat C-3PO served Leia Organa, becoming 
  the head of a Resistance spy ring aimed at undermining the
   First Order.</div>
</transition>   </div>
</div>

</template>

<script>
import Pick from './pick.vue';
export default {
      data() {
          return {
              show: false
          }
      },
      props: ['picks'],

        components: {
    'app-pick': Pick
    },
  

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-leave-active {
  animation: slide-out .8s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;

}
.picks {
  font:200;
  color:white;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: wh;

}
.luke {
    font-weight: 1rem;
    background-color: black;
    height: 20px;
    width: 130px;
      font-family: "Avenir", Helvetica, Arial, sans-serif;

  font-size: 14px;
  color:white;
   -moz-osx-font-smoothing: grayscale;
  text-align: center;

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