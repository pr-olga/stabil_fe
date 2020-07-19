<template>
  <div class="col-md-6">
    <button class="btn faults f-missing" @click="patchPlayers()">{{this.fault}}</button>
  </div>
</template>

<script>
import PlayerService from '@/services/PlayerService'

export default {
  props: {
    playerID: {
      type: Number,
      default: 0
    },
    fault: {
      type: String,
      default: 'none'
    }
  },
  methods: {
    async patchPlayers (fault) {
      try {
        const fault = this.fault.toLowerCase()
        await PlayerService.patch(this.playerID, {
          [fault]: 1
        }).then((response) => {
          console.log(response)
        })
      } catch (error) {
        console.log(error)
      }
    },
    getPlayer () {
      console.log(this.player1ID)
    }
  }
}
</script>

<style>

</style>
