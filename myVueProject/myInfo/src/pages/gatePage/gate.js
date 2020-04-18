import Vue from 'vue'
import router from '@/router'
import app from './gate.vue'

new Vue({
  el:"#gate",
  router,

  render:(h) => {
   app
  }
}).$mount('#gate')
