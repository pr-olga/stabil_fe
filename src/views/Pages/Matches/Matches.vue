<template>
  <div id="matches">
    <h1>Matches</h1>
    <h2>Create a new one</h2>
    <form @submit.prevent="createMatch">
      <div class="form-group">
        <label for="player-1">Player 1</label>
        <select type="text" class="form-control" id="player-1" aria-describedby="emailHelp" @change="excludeFirstPlayer($event)" v-model="firstUser">
          <option value="" disabled>Name of Player 1</option>
          <option v-for="user in users" :key="user.id" :value="user.id" v-show="userDisabled != user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="player-2">Player 2</label>
        <select type="text" class="form-control" id="player-2" aria-describedby="emailHelp" @change="excludeFirstPlayer($event)" v-model="secondUser">
          <option value="" disabled>Name of Player 1</option>
          <option v-for="user in users" :key="user.id" :value="user.id" v-show="userDisabled != user.id">
            {{ user.name }}
          </option>
        </select>      </div>
      <button type="submit" class="btn btn-info">Start</button>
    </form>

    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <ul class="list-group">
            <li class="list-group-item list-group-item-st" v-for="match in matches" :key="match.id">
             <p class="list__title">#Match: {{match.id}}</p>
              Match id: {{match.id}}<br>
              Started: {{match.created}}<br>
              Player 1: {{match.userFirstName}}<br>
              Player 2: {{match.userSecondName}}<br>
              Finished: {{match.matchFinished}} <br>
              Games: {{match.games.ids.length}} <br>
              Winner: winner <br>
            </li>
          </ul>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import MatcheService from '@/services/MatcheService'
import store from '@/store/index'

export default {
  data () {
    return {
      matches: [],
      test: [],
      users: [],
      userDisabled: '',
      firstUser: '',
      secondUser: ''
    }
  },
  methods: {
    async createMatch (e) {
      try {
        await MatcheService.post({ userFirst: this.firstUser, userSecond: this.secondUser }).then((response) => {
          this.$router.push('/matches/' + response.data.id + '/current')
        })
      } catch (error) {

      }
    },
    excludeFirstPlayer (event) {
      this.userDisabled = event.target.value
    }
  },
  created () {
    try {
      const a = MatcheService.get()

      a.then((values) => {
        this.matches = values.data.sort((a, b) => b.id - a.id)
      })
    } catch (error) {

    }
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('getUsers').then(() => {
      next(vm => {
        vm.users = store.getters.getUsers
      })
    })
  }
}
</script>

<style>

</style>
