import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ActorNamesArray: []
  },
  getters: {
  },
  mutations: {
    ADD_CAGE_ID(state, Id) {
      state.CageId = Id;
    },
    ADD_REEVES_ID(state, Id) {
      state.ReevesId = Id;
    },
    ADD_TO_CAGE_ACTOR_IDS_ARRAY(state, Id) {
      state.CageActorIdsArray.push(Id);
    },
    ADD_TO_REEVES_ACTOR_IDS_ARRAY(state, Id) {
      state.ReevesActorIdsArray.push(Id);
    },
    ADD_TO_ACTOR_NAMES_ARRAY(state, name) {
      state.ActorNamesArray.push(name);
    },
    REMOVE_DUPLICATES_IN_CAGE_IDS_ARRAY(state, array) {
      state.CageActorIdsArray = [...new Set(array)]
    },
    REMOVE_DUPLICATES_IN_REEVES_IDS_ARRAY(state, array) {
      state.ReevesActorIdsArray = [...new Set(array)]
    },
    CREATE_REEVES_CAGE_ACTORS_IDS_ARRAY(state, array) {
      state.ReevesCageActorIdsArray = array;
    }
  },
  actions: {
  },
  modules: {
  }
} )
