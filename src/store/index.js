import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    JwtToken: '',
    userName: ''
  },
  getters: {
    getStateJwtToken: function (state) {
      return state.JwtToken
    },
    getUserName: function (state) {
      return state.userName
    }
  },
  mutations: {
    SET_TOKEN(state, jwt) {
      state.JwtToken = jwt;
    },
    CLEAR_TOKEN(state) {
      state.JwtToken = '';
    },
    SET_NAME(state, userName) {
      state.userName = userName;
    }
  },
  actions: {
    setToken(context, jwt) {
      context.commit("SET_TOKEN", jwt);
    },
    clearToken(context) {
      context.commit("CLEAR_TOKEN");
    },
    setUserName(context, userName) {
      context.commit("SET_NAME", userName);
    }
  },
  modules: {},

})
