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

const actions = {
  add ({ commit }) {
    return commit('add')
  },
  reduce ({ commit }) {
    return commit('reduce')
  },
  mockDataSave ({ commit }, data) {
    return commit('mockDataSave',data)
  },
  messageSave ({ commit }) {
    return commit('messageSave')
  },
  sessSave ({ commit }, sess) {
    return commit('sessSave', sess)
  },
  sessClear ({ commit }) {
    return commit('sessClear')
  },
  clearAll ({ commit }) {
    return commit('clearAll')
  }
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
  },
  clearAll(state){
    state.sess = null
    state.message = null
    window.sessionStorage.clear()
    window.localStorage.clear()
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,

  // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
  // 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  // strict: process.env.NODE_ENV !== 'production'
});