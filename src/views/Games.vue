<template>
  <div id="games">
    <div class="container">
      <h1>Games</h1>
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <ul class="list-group">
            <li class="list-group-item" v-for="game in games" :key="game.id">
             <p class="list__title">#Game: {{game.id}}</p>
              Match id: {{game.matcheId}}<br>
              Player 1: {{game.userFirstName}}<br>
              Player 2: {{game.userSecondName}}<br>
              Finished: {{game.matcheFinished}} <br>
              Winner: winner <br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      games: ''
    }
  },
  created () {
    var me = this
    axios.get('http://localhost:8000/api/games',
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
      .then(
        function (res) {
          me.games = res.data
          console.log(me.games)
        }
      )
      .catch(err => console.log(err))
  }
}

</script>

<style>

</style>
