import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    newUser: []
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    },
    ADD_USER (state, data) {
      state.users.push(data)
      state.newUser = data
    }
  },
  actions: {
    async getUsers ({ commit }) {
      try {
        await UserService.get().then((values) => {
          const users = values.data
          commit('SET_USERS', users)
        })
      } catch (error) {

      }
    },
    createUser ({ commit }, payload) {
      try {
        UserService.post({ name: payload })
          .then((resp) => {
            commit('ADD_USER', resp.data)
          })
      } catch (error) {

      }
    }
  },
  getters: {
    bestUsers: state => {
      const numberOfPlayers = state.users.filter((user) => user.players.some(({ victory }) => !!victory))
      const bestUsers = []
      numberOfPlayers.forEach(e => {
        const victories = e.players.filter((x) => x.victory != null).length
        bestUsers[e.id] = {
          id: e.id,
          name: e.name,
          victories: victories
        }
      })

      return bestUsers.filter(bestUser => !!bestUser).sort((a, b) => b.victories - a.victories)
    },
    getUsers (state) {
      return state.users
    },
    getNewUser (state) {
      return state.newUser
    }
  },
  modules: {
  }
})
