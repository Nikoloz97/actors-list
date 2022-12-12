import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ActorNamesArray: [ ]
  },
  getters: {
  },
  mutations: {
    ADD_TO_ACTOR_NAMES_ARRAY(state, name) {
      state.ActorNamesArray.push(name);
    },
  },
  actions: {
  },
  modules: {
  }
} )
