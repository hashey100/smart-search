import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  /* Sets the base state values */
  state: {
    people: [],
    paginationNumber: 1,
  },
  mutations: {
    /* Mutations which sets the payload value */
    SET_PEOPLE(state, payload) {
      Vue.set(state, 'people', payload);
    },
    SET_PAGINATION_NUMBER(state, payload) {
      Vue.set(state, 'paginationNumber', payload);
    },
  },
  actions: {
    /* Calls a mutation to the SET_PEOPLE data */
    setPeople: ({ commit }, payload) => {
      commit('SET_PEOPLE', payload);
    },
    /* Calls a mutation to the SET_PAGINATION_NUMBER data */
    setPaginationNumber: ({ commit }, payload) => {
      commit('SET_PAGINATION_NUMBER', payload);
    },
  },
  getters: {
    /* Gets the people and pagination number data which is in the store */
    people: (state) => state.people,
    paginationNumber: (state) => state.paginationNumber,
  },
  modules: {
  },
});
