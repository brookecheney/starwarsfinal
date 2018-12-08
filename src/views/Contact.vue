<template>
<div>
<app-header></app-header>
</div>

</template>





<script>
import Header from '../components/header.vue';
import Form from '../components/form.vue';
import Footer from '../components/footer.vue';

export default {
    components: {

      'app-form' : Form,
      'app-header' : Header,
      'app-footer' : Footer,

  
  }
}


</script>