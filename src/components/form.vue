<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field :value="userData.name" @input="userData.email = $event.target.value" v-model.lazy="userData.name"
        :rules="nameRules" :counter="10" label="Name" required></v-text-field>
      <v-text-field v-model.lazy="userData.email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-textarea v-model="userData.message" outline name="input-7-4" label="Message" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></v-textarea>
      <v-btn :disabled="!valid" @click.prevent="submitted">
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
    <hr>

    <div class="container" v-if="isSubmitted">
      <h2>We will send this information to our Boss</h2>
      <p class="para"> Name: {{ userData.name }}</p>
      <p class="para"> Email: {{ userData.email }}</p>
      <p class="para"> Message :{{ userData.message }}</p>
    </div>

  </v-container>
</template>

<script>
import Formtwo from '../components/formtwo.vue';
import Switch from '../components/switch.vue';
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    name: '',
    userData: {
      name: '',
      email: '',
      message: '',
    },
    isSubmitted: '',
  }),
  methods: {
    submitted() {
      this.isSubmitted = true;
    },
    clear() {
      this.userData.name = '';
      this.userData.email = '';
      this.userData.message = '';
    }
  },

  components: {
    'app-formtwo': Formtwo,
    appSwitch: Switch,

  },

}
</script>

<style>

.para {
color: black;
background-color: #f9f9f9;
font-size: 20px;
}
</style>