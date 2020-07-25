import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    }
  },
  actions: {
    getUsers ({ commit }) {
      try {
        UserService.get().then((values) => {
          const users = values.data
          commit('SET_USERS', users)
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    bestUsers: state => {
      return state.users.filter((user) => user.players[0])
    }
  },
  modules: {
  }
})
