<template>
  <div id="games">
    <div class="container">
      <h1>Games</h1>
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <ul class="list-group">
            <li class="list-group-item list-group-item-st" v-for="game in games" :key="game.id">
             <p class="list__title">#Game: {{game.id}}</p>
              Match id: {{game.matcheId}}<br>
              Player 1: {{game.userFirstName}}<br>
              Player 2: {{game.userSecondName}}<br>
              Game Finished: {{game.gameFinished}} <br>
              Match Finished: {{game.matcheFinished}} <br>
              Winner: winner <br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameService from '@/services/GameService'

export default {
  data () {
    return {
      games: ''
    }
  },
  created () {
    try {
      const games = GameService.get()

      games.then((values) => {
        this.games = values.data.sort((a, b) => b.id - a.id)
      })
    } catch (error) {
      console.log(error)
    }
  }
}

</script>

<style>

</style>
