<template>
<div>
<img src="@/images/princessleia.jpg"/>
          <div class="fill-height bottom-gradient">
          <button class="luke" @click="show = !show">View More</button>

<br><br>

<transition name="slide" type="animation" appear>
<div class="alert alert-info" v-if="show">Princess Leia Organa 
    was one of the Rebel Alliance’s greatest leaders, 
    fearless on the battlefield and dedicated to ending the tyranny of the Empire. Daughter of Padmé Amidala and Anakin Skywalker, sister of Luke Skywalker, and with a soft spot for scoundrels, Leia ranks among the galaxy’s great heroes. But life under the New Republic has not been easy for Leia. Sidelined by a new generation of political leaders, she struck out on her own to oppose the First Order as founder of the Resistance. These setbacks in her political career 
    have been accompanied by more personal losses.</div>
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