<template>
<v-form>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field v-model="message" outline clearable label="Enter Name here" type="text">
          <v-menu slot="append-outer" style="top: -12px" offset-y>
            <v-btn class="btn" slot="activator" @click="getRandomChar()">
              Get Character
            </v-btn>
            <v-card>
           
            </v-card>
          </v-menu>
        </v-text-field>
        <!-- conditional rendering -->
        <gameResult v-if="gameResultShow" 
                    :name='message' 
                    :randomChar='randomChar'></gameResult>
      </v-flex>
    </v-layout>
    <!-- conditional rendering , Used mapstate to make
     the state from your vuex available to 
    your map -->
     <div v-if="gameResultShow" @click='restart()' class="text-xs-center">
        <v-btn round color="black" dark>Start Over</v-btn>
      </div>
  </v-container>
</v-form>
</template>

<script>
  import gameResult from '@/components/gameResult.vue'
  import { mapState } from 'vuex'
  export default {
    data(){
      return {
        gameResultShow: false,
        message: '',
        randomChar: ''
      }
    },
    components: {
      gameResult
    },
    methods: {
      getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      },
      getRandomChar() {
        this.randomChar = this.characters[this.getRandomInt(10)].name
        this.gameResultShow = true
      },
      restart(){
        this.gameResultShow = false
        this.message = ''
      }
    },
 computed: {
      ...mapState(['characters'])
    }
  }
</script>

<style scoped>
h3 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn {
   
   color:black;
    
}
</style>