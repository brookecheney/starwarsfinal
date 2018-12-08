import Vue from "vue";
import Vuex from "vuex";
import getData from '@/api/getData.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    planets: []
  },
  mutations: {
      SET_CHARACTERS(state, characters) {
        state.characters = characters
      },
      SET_PLANETS(state, planets) {
        state.planets = planets
      }
  },
  actions: {
    fetchCharacters({commit}) {
      getData.getCharacters()
      .then(response => {
        commit('SET_CHARACTERS', response.data.results)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    },
    fetchPlanets({commit}) {
      getData.getPlanets()
      .then(response => {
        commit('SET_PLANETS', response.data.results)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  }
});
