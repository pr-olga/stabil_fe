import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService'
import PlayerService from '@/services/PlayerService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    newUser: 0,
    players: []
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
    },
    SET_PLAYERS (state, data) {
      state.players.push(data)
    },
    PATCH_PLAYER (state, data) {
      state.players.map(pl => {
        if (pl.id === data.id) {
          pl[data.fault] = data.value
        }
      })
    },
    DESTROY_PLAYERS (state) {
      state.players = []
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
    },
    setPlayers ({ commit }, payload) {
      try {
        PlayerService.getPlayer(payload[0])
          .then((resp) => {
            resp.data.name = payload[1]
            commit('SET_PLAYERS', resp.data)
          })
      } catch (error) {

      }
    },
    patchPlayers ({ commit }, payload) {
      try {
        PlayerService.patch(payload.id, { [payload.fault]: payload.value })
          .then(() => {
            commit('PATCH_PLAYER', payload)
          })
      } catch (error) {

      }
    },
    destroyPlayers ({ commit }) {
      commit('DESTROY_PLAYERS')
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
    getPlayers (state) {
      return state.players
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
