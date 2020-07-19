<template>
  <div class="col-md-6">
    <button class="btn faults" :class="dynamicClass" @click="patchPlayers()">{{this.fault}}</button>
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
  data () {
    return {
      currentVal: 0,
      faultToLower: this.fault.toLowerCase(),
      dynamicClass: 'f-' + this.fault.toLowerCase()
    }
  },
  // TODO: refactor: must be rewrited
  // TODO: fix: doubleFault and line
  methods: {
    async patchPlayers (fault) {
      try {
        await PlayerService.getPlayer(this.playerID).then((values) => {
          this.currentVal = values.data[this.faultToLower]
        }).then(() => {
          PlayerService.patch(this.playerID, {
            [this.faultToLower]: this.currentVal + 1
          }).then((response) => {
            console.log(response)
          })
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
