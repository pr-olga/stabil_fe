<template>
  <div id="game-finished">
      <h1>Well done</h1>
    <h2>Start a New Game?</h2>
    <div class="mt-5">
      <button class="btn btn-danger mr-5" @click="finishMatch()">No, finish the match</button>
      <button class="btn btn-info" @click="startNewGame()">Yes</button>
    </div>
  </div>
</template>

<script>
import GameService from '@/services/GameService'
import MatcheService from '@/services/MatcheService'

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

      }
    },
    async finishMatch () {
      try {
        await MatcheService.patchMatch(this.matchId, { isFinished: true }).then((reponse) => {
          this.$router.push('/matches')
        })
      } catch (error) {

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
