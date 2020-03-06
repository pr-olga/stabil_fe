<template>
  <div id="games">
    <div class="container">
      <h1>Games</h1>
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <ul class="list-group">
            <li class="list-group-item" v-for="(index, game) in games" :key="game.id">
             <p class="list__title">#Game: {{index.id}}</p>
              Match finished: {{index.matche.isFinished}}<br>
              Players:
              <ul>
                <li v-for="data in index.players" :key="data.id">{{data.name}}<br>
                  {{data.victory}}
                </li>
              </ul>
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
  async created () {
    var me = this
    await axios.get('http://localhost:8000/api/games',
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
      .then(
        function (res) {
          me.games = res.data
        }
      )
      .catch(err => console.log(err))
  }
}

</script>

<style>

</style>
