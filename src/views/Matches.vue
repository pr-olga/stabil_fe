<template>
  <div id="matches">
    <h1>Matches</h1>
    <h2>Create a new one</h2>
    <form @submit.prevent="createMatch">
      <div class="form-group">
        <label for="player-1">Player 1</label>
        <select type="text" class="form-control" id="player-1" aria-describedby="emailHelp" @change="excludeFirstPlayer($event)">
          <option value="" disabled>Name of Player 1</option>
          <option v-for="user in users" :key="user.id" :value="user.id" v-show="userDisabled != user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="player-2">Player 2</label>
        <select type="text" class="form-control" id="player-2" aria-describedby="emailHelp" @change="excludeFirstPlayer($event)">
          <option value="" disabled>Name of Player 1</option>
          <option v-for="user in users" :key="user.id" :value="user.id" v-show="userDisabled != user.id">
            {{ user.name }}
          </option>
        </select>      </div>
      <button type="submit" class="btn btn-primary">Start</button>
    </form>

    <div>
      <ul>
        <li v-for="match in matches" :key="match.id">
          {{match.id}}<br>
          {{match.isFinished}}<br>
          {{match.games}}
          </li>
      </ul>

    </div>
  </div>
</template>

<script>
import MatcheService from '@/services/MatcheService'
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      matches: [],
      finished: 'false',
      users: [],
      userDisabled: ''
    }
  },
  methods: {
    async createMatch (e) {
      try {
        await MatcheService.post({ is_finished: 'false' }).then((response) => {
          this.$router.push('/matches/' + response.data.id + '/current')
        })
      } catch (error) {
        console.log(error)
      }
    },
    excludeFirstPlayer (event) {
      this.userDisabled = event.target.value
    }
  },
  created () {
    try {
      const a = MatcheService.get()
      const b = UserService.get()

      a.then((values) => {
        this.matches = values.data
      })

      b.then((values) => {
        this.users = values.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
