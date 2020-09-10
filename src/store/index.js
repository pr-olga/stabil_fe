import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    newUser: 0
  },
  mutations: {
    SET_USERS (state, users) {
      state.users = users
    },
    ADD_USER (state, data) {
      state.users.push(data)
    },
    ADD_NEW_USER (state, id) {
      state.newUser = id
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
            commit('ADD_NEW_USER', resp.data.id)
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
      if (state.newUser === 0) {
        return state.users.length + 1
      }

      return state.newUser
    }
  },
  modules: {
  }
})
