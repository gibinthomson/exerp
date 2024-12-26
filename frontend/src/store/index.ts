import { createStore } from "vuex";

export default createStore({
  state: {
    placeLocation: {},
  },
  getters: {
    getPlaceLocation(state) {
      return state.placeLocation;
    },
  },
  mutations: {
    setPlaceLocation(state, placeLocation): void {
      state.placeLocation = placeLocation;
    },
  },
  actions: {
    updatePlaceLocation({ commit }, placeLocation) {
      commit("setPlaceLocation", placeLocation);
    },
  },
  modules: {},
});
