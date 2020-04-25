import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  vue: {},
  state: {
    lang: 'zh',
  },
  mutations: {
    setLanguage(state,str){
      state.lang = str;
    }
  },
  actions: {
    changeLanguage({commit},str){
      commit('setLanguage',str)
    }
  }
})
export default store
