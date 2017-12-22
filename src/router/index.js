import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import state from './../pages/state.vue'
import binddata from './../pages/bindData.vue'
import sess from './../pages/sessionStore.vue'
import lockr from './../pages/lockrLocalStorage.vue'

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path:'/',
      redirect:'/lockr',
      component: lockr
    },
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
      path: '/lockr',
      name: 'lockr',
      component: lockr
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
