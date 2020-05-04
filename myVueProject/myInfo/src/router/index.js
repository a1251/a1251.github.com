import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gate from '@/pages/gatePage/gate.vue'
import mainPage from '@/pages/mainPage.vue'
import chatList from '@/pages/demos/chatList.vue'
import demoList from '@/components/demoList.vue'
import chatDetail from '@/pages/demos/chatDetail.vue'
import myResume from '@/components/myResume.vue'
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
      component: mainPage,
      children: [{
        path: 'demoList',
        name: 'demoList',
        component: () => import(/*webpackChunkNmae: 'demoList'*/ '../components/demoList.vue'),
      },
      {
        path: 'myResume',
        name: 'myResume',
        component: () => import(/*webpackChunkNmae: 'demoList'*/ '../components/myResume.vue'),
      }]
    },
    {
      path: '/chatList',
        name: 'chatList',
        component: chatList
    },
    {
      path: '/chatDetail',
        name: 'chatDetail',
        component: chatDetail
    }
  ],
  // mode: 'history'
})
