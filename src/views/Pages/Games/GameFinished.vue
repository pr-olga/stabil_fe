<template>
  <div id="game-finished">
      <h1>Well done</h1>
    <h2>Start a New Game?</h2>
    <div class="mt-5">
      <button class="btn btn-danger mr-5">No, finish the match</button>
      <button class="btn btn-info" @click="startNewGame()">Yes</button>
    </div>
  </div>
</template>

<script>
import GameService from '@/services/GameService'
export default {
  data () {
    return {
      matchId: ''
    }
  },
  methods: {
    async startNewGame () {
      try {
        await GameService.post({ matche: this.matchId }).then((response) => {
          this.$router.push(`/matches/${this.matchId}/games/${response.data.id}/current`)
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    this.matchId = this.$route.params.id
  }

}
</script>

<style>

</style>
