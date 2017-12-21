import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  mockData: null,
  message:''
}

const mutations = {
  add(state, num) {
    state.count += num;
  },
  reduce(state, num) {
    state.count -= num;
  },
  mockDataSave(state, val){
    state.mockData = val
  },
  messageSave(state, val){
    state.message = val
  }
}

export default new Vuex.Store({
  state,
  mutations,
});