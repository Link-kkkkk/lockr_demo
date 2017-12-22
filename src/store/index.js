import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  mockData: null,
  message:'',
  sess:null
}

const getters = {
  count: (state) => state.count,
  mockData: (state) => state.mockData,
  message: (state) => state.message,
  sess:(state) => state.sess
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
  },
  sessSave(state, val){
    state.sess = val
    //由于vuex里，保存的状态都是数组，而session和localstorage只支持字符串，所以需要转换：
    JSON.stringify(state.sess);
    window.sessionStorage.setItem("sess",state.sess); 
  },
  sessClear(state){
    state.sess = null
    window.sessionStorage.removeItem("sess")
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
});