import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  vue: {},
  state: {
    lang: 'zh',
    showBottomNav: true
  },
  mutations: {
    setLanguage(state,str){
      state.lang = str;
    },
    setNavStatus(state,str){
      state.showBottomNav = str;
    }
  },
  actions: {
    changeLanguage({commit},str){
      commit('setLanguage',str)
    },
    changeNavStatus({commit},str){
      commit('setNavStatus',str);
    }
  }
})
export default store
