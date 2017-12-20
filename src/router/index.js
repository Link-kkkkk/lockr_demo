import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import state from './../pages/state.vue'
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/state',
      name: 'state',
      component: state
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
