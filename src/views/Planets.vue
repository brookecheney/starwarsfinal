<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="">

          <v-list-tile-action>
            <v-icon>home</v-icon>
           
          </v-list-tile-action>
          <v-list-tile-content>
            
             <router-link to="/"> <v-list-tile-title>HOME</v-list-tile-title>
</router-link> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
        <v-icon>gavel</v-icon>

          </v-list-tile-action>
          <v-list-tile-content>
           <router-link to="/planets">  <v-list-tile-title>PLANETS</v-list-tile-title>
          </router-link> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           <router-link to="/characters">  <v-list-tile-title>CHARACTERS</v-list-tile-title>
          </router-link> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           <router-link to="/Contact">  <v-list-tile-title>CONTACT US</v-list-tile-title>
          </router-link> 
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
           <router-link to="/Color">  <v-list-tile-title>CHOOSE UR CHARACTER</v-list-tile-title>
          </router-link> 
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="black" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
           <span class="yellow--text">
 <v-toolbar-title>PLANETS</v-toolbar-title></span>
    </v-toolbar>
    <hr>
         <v-flex>
          <h3 class="display-3">    
</h3>

    
        </v-flex>
        <br>
    <v-content>
  
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
      <img src="@/images/alderaan.jpg"/>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{planets[0].name}}</div>
            <span class="grey--text">Population: {{planets[0].population}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <!-- <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn> -->
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Alderaan, located in the Core Worlds, was a terrestrial planet covered with mountains. During the waning decades of the Galactic Republic, it was ruled by Queen Breha Organa and represented in the Galactic Senate by her husband, Senator Bail Organa.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  
    </v-content>
     <v-content>
  
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
    <img src="@/images/yavin.jpg"/>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{planets[1].name}}</div>
            <span class="grey--text">Population: {{planets[1].population}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Yavin 4 was the jungle-covered fourth moon in orbit around the red gas giant Yavin. Prior to and during the Galactic Civil War, it hosted the headquarters of the Alliance to Restore the Republic, a group of resistance fighters that opposed the dominant Galactic Empire.[2] Following a major battle that took place around Yavin,[5] the Alliance relocated its headquarters to Hoth.[12]
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  
    </v-content>
 
    
    <v-content>
  
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
      <img src="@/images/hoth.png"/>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{planets[2].name}}</div>
            <span class="grey--text">Population: {{planets[2].population}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Hoth is the sixth planet in the remote system of the same name, and was the site of the Rebel Alliance's Echo Base. It is a world of snow and ice, surrounded by numerous moons, and home to deadly creatures like the wampa.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  
    </v-content>
    <v-content>
  
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
      <img src="@/images/dagobah.jpg"/>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{planets[3].name}}</div>
            <span class="grey--text">Population: {{planets[3].population}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Dagobah was a planet in the Dagobah system, and one of the purest places in the galaxy within the Force. A remote world of swamps and forests, it served as a refuge for Jedi Grand Master Yoda during his exile after the destruction of the Jedi Order. Luke Skywalker received advanced training in the ways of the Force under Jedi Master Yoda on Dagobah, and it was later the place of Yoda's death and transformation into the Force.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
  
    </v-content>
    <v-footer color="black" app>
      <span class="yellow--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
 import { mapState } from 'vuex'
  export default {
    data: () => ({
      drawer: null,
      show: false
    }),
   
    props: {
      source: String
    },


    computed: {
      ...mapState(['planets'])
    }
   
  }
  import { starships } from '../assets/starships'
 
</script>




