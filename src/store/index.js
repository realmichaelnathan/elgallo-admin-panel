import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    logged_in_user: localStorage.getItem('logged_in_user') || null,
  },
  getters: {

  },
  mutations: {
    SET_TOKEN(state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    SET_USER(state, user) {
      localStorage.setItem('logged_in_user', user)
      state.logged_in_user = user
    },
    LOG_OUT(state) {
      state.logged_in_user = null
      state.token = null
      localStorage.removeItem('logged_in_user')
      localStorage.removeItem('token')
    }
  },
  actions: {
    login(context, data) {
      context.commit('SET_TOKEN', data.token)
      context.commit('SET_USER', data.user)
    },
    logout(context) {
      context.commit('LOG_OUT')
    }
  },
  modules: {
  }
})
