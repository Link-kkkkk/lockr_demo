// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "babel-polyfill"

import Router from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'

import App from './App'

Vue.config.productionTip = false

Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: e => e(App)
})
