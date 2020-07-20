import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
  },
  actions: {
    async getUsers () {
      try {
        await UserService.get().then((values) => {
          this.state.users = values.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
