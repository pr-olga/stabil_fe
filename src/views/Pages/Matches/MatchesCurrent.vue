<template>
  <div id="matches-current">
    <h1>Current Match</h1>
    <h2>Start a New Game?</h2>
    <div class="mt-5">
      <button class="btn btn-danger mr-5">No</button>
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

      }
    }
  },
  created () {
    this.matchId = this.$route.params.id
  }

}
</script>

<style scoped>
button.btn {
  width: 150px!important;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}
</style>
