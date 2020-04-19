import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gate from '@/pages/gatePage/gate.vue'
import mainPage from '@/pages/mainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/gate',
      name: 'gate',
      component: gate,
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
