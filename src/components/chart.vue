<template>
  <v-container fluid grid-list-sm>
    <v-layout>
      <v-flex xs12 sm4>
         <app-luke></app-luke>
      </v-flex>

     <v-flex xs12 sm4>
      <app-leia></app-leia>
      </v-flex>
      <v-flex xs12 sm4>
             <app-obi></app-obi>

      </v-flex>
       <v-flex xs12 sm4>
             <app-r2></app-r2>

      </v-flex>
       
    
    </v-layout>
    <v-layout>
      <v-flex xs12 sm4>
         
            <app-darth></app-darth>

      </v-flex>

      <v-flex xs12 sm4>
              <app-storm></app-storm>

 
      </v-flex>

      <v-flex xs12 sm4>
            <app-han></app-han>

      </v-flex>
       <v-flex xs12 sm4>
              <app-dark></app-dark>

      </v-flex>
       </v-layout>
    <v-layout>
      <v-flex xs12 sm4>
         <app-chew></app-chew>
      </v-flex>

      <v-flex xs12 sm4>
        <app-c3></app-c3>
 
      </v-flex>

      <v-flex xs12 sm4>
      <app-boba></app-boba>
      </v-flex>
       <v-flex xs12 sm4>
       <app-yoda></app-yoda>
       
      </v-flex>
       
    
    </v-layout>
  </v-container>
  
       
</template>

<script>
import Luke from './luke.vue';
import Leia from './leia.vue';
import Obi from './obi.vue';
import R2 from './r2.vue';
import Storm from './storm.vue';
import Han from './han.vue';
import Dark from './dark.vue';
import Pick from './pick.vue';
import Chew from './chew.vue';
import C3 from './c3.vue';
import Boba from './boba.vue';
import Yoda from './yoda.vue';
import Darth from './darth.vue';
export default {
      data() {
          return {
              show: false
          }
      },
      props: ['picks'],

        components: {
    'app-pick': Pick,
    'app-luke': Luke,
    'app-obi': Obi,
    'app-r2': R2,
    'app-storm': Storm,
    'app-han': Han,
    'app-dark': Dark,
    'app-leia': Leia,
    'app-chew': Chew,
    'app-c3': C3,
    'app-boba': Boba,
    'app-yoda': Yoda,
    'app-darth': Darth,
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
</style>