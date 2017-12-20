import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let jsonData = {
  type: 'vuexData'
};

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count += 1;
    },
    reduce(state) {
      state.count -= 1;
    }
  }
});