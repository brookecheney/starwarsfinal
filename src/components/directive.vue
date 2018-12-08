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
 <v-toolbar-title>Choose your Character</v-toolbar-title></span>
    </v-toolbar>
    <hr><span>
        </span>
  <br>
  <br>
    <div class="container">
<p v-highlight:background.delayed="'yellow'">Which STAR WARS character are YOU</p>
<app-game></app-game>
</div>
<br>

    <v-footer color="black" app>
      <span class="yellow--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Game from './game.vue';
 export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String

    },
components: {

  'app-game' : Game,
  }
 }
  
</script>


<style>
p {
    font-weight: 20px;
    font-size: 30px;
    width: 600px;
    height: 50px;
    background-color: lightgray;
    padding: 6px;
    display: inline-block;
    margin: 10px 2px;
    box-sizing: content-box;
    cursor: pointer;
    text-align: center;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
h2 {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


</style>