<template>
    <div>
        <app-directive></app-directive>
    </div>
</template>



<script>
import Head from '../components/head.vue';
import Directive from '../components/directive.vue';
import Footer from '../components/footer.vue';
import Game from '../components/game.vue';
export default {
    components: {

  'app-head': Head,
  'app-directive': Directive,
  'app-footer': Footer,
  'app-game' : Game,
  },

  data() {
      return{
          text: 'Hello There!'
      }
      },
      filters: {
            toUppercase(value) {
                return value.toUpperCase();

            }
      }
  



}


</script>