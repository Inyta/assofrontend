import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        JwtToken: ''
    },
    getters: {
        getStateJwtToken: function (state) {
            return state.JwtToken
        }
    },
    mutations: {
        SET_TOKEN(state, jwt) {
            state.JwtToken = jwt;
        },
        CLEAR_TOKEN(state) {
            state.JwtToken = '';
        }
    },
    actions: {
        setToken(context,jwt) {
            context.commit("SET_TOKEN",jwt);
        },
        clearToken(context) {
            context.commit("CLEAR_TOKEN");
        }
    },
    modules: {}
})
