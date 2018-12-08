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
 <v-toolbar-title>CHARACTERS</v-toolbar-title></span>
    </v-toolbar>

    <v-footer color="black" app>
      <span class="yellow--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String

    }
  }
</script>
