import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import state from './../pages/state.vue'
import binddata from './../pages/bindData.vue'
import sess from './../pages/sessionStore.vue'
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
      path: '/binddata',
      name: 'binddata',
      component: binddata
    },
    {
      path: '/sess',
      name: 'sess',
      component: sess
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
