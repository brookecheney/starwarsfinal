<template>
<div>
<img src="@/images/lukeskywalker.jpg"/>
          <div class="fill-height bottom-gradient">
          <button class="luke" @click="show = !show">View More</button>

<br><br>
<transition name="slide" type="animation" appear>
      
<div class="alert alert-info" v-if="show">Luke Skywalker was a Tatooine farmboy
     who rose from humble beginnings to become one of the 
     greatest Jedi the galaxy has ever known. But his solitude would be interrupted – 
      and Luke Skywalker had one final, momentous 
      role to play in the struggle between good and evil.
</div>
</transition>   
</div>

</div>

</template>

<script>
import Pick from './pick.vue';
import Game from './game.vue';
export default {
      data() {
          return {
              show: false,
              close: false
          }
      },
      props: ['picks'],

        components: {
    'app-pick': Pick,
    'app-game': Game,
    },
  

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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




.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {

}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
   opacity: 0;
}

.slide-enter-active {
 
  transition: opacity .2s;
  opacity: 50;
}



.slide-leave{


}


.slide-leave-active {
  animation: slide-out .8s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;

}
</style>