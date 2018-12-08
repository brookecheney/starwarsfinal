<template>
<div>
<img src="@/images/darthmaul.jpg"/>
          <div class="fill-height bottom-gradient">
          <button class="luke" @click="show = !show">View More</button>

<br><br>

<transition name="slide" type="animation" appear>
<div class="alert alert-info" v-if="show">A deadly, agile Sith Lord trained by the evil Darth Sidious, Darth Maul was a formidable warrior and scheming mastermind. He wielded an intimidating double-bladed lightsaber and fought with a menacing ferocity. Though he fell in battle against Obi-Wan Kenobi, the Zabrak from Dathomir would prove to be much harder to destroy than originally believed.</div>
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