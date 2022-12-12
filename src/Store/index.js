import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Actor objects that starred in movies with Cage and Reeves (contain Name, movieTitle)
    ActorObjectsArray: []
  },
  getters: {
  },
  mutations: {
    ADD_TO_ACTOR_OBJ_ARRAY(state, actorObj) {
      state.ActorNamesArray.push(actorObj);
    },
  },
  actions: {
  },
  modules: {
  }
} )
