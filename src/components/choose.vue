<template>
 <div>
            <v-btn @click="changePhoto" block color="secondary" dark>Block Button</v-btn>

<p>User Name: {{ image }}</p>
     </div>
</template>

<script>




export default {
    data:{
        image: "images/tie.jpg"
    },
data: function() {

     return {
        image: 'max'
      };
    },
    
    methods: {
      changePhoto(){
        this.image = 'hello';
      }
    },
       props: ['image'] 

    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
