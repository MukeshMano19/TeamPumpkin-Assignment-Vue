import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        user: {},
        token: {}
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token
            state.user = payload.user
            state.isLoggedIn = true
        },
        logOut(state) {
            state.isLoggedIn = false
            state.user = {}
            state.token = {}
        }
    },
    actions: {},
    modules: {}
})