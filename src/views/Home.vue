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
           <router-link to="/contact">  <v-list-tile-title>CONTACT US</v-list-tile-title>
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
 <v-toolbar-title>STARWARS</v-toolbar-title></span>
    </v-toolbar>
    <v-content>
<br>
<br>
<br>
 <v-jumbotron>
    <v-container fill-height>
      
      <v-layout align-center>
        
        <v-flex>
          <h3 class="display-3">          <img src="@/images/starwar.png"/>
</h3>

    
        </v-flex>
      </v-layout>

    </v-container>

  </v-jumbotron>

          <h3 class="display-3">  </h3>

</v-content>
<v-footer color="black" app>
<span class="yellow--text">&copy; 2017</span>
</v-footer>
</v-app>

   
</template>

<script>
import Choose from '../components/choose.vue';

export default {

  data: () => ({
    drawer: null,
    dropdown_font: ['Yellow', 'Purple', 'Black', 'White'],
    dropdown_icon: [{
        text: 'Sphere',
        callback: () => console.log('Sphere')
      },
      {
        text: 'Tubular',
        callback: () => console.log('Tubular')
      },
      {
        text: 'Box',
        callback: () => console.log('Box')
      }
    ],
    dropdown_edit: [{
        text: 'racing stripes'
      },
      {
        text: 'jet fighter wings'
      },
      {
        text: 'transformer'
      }

    ]

  }),
  props: {
    source: String
  },
  components: {
    'app-choose': Choose
  }
}

</script>

