<template>
  <div class="col-md-6">
    <button class="btn faults" :class="dynamicClass" @click="patchPlayers()">
      <template v-if="this.fault !== 'Black' && this.fault !== 'Victory'">
        {{this.value}}
      </template>
      {{this.fault}}
      </button>
  </div>
</template>

<script>
import GameService from '@/services/GameService'

export default {
  props: {
    playerID: {
      type: Number,
      default: 0
    },
    fault: {
      type: String,
      default: 'none'
    },
    value: {
      type: Number,
      default: 0
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
      this.$store.dispatch('patchPlayers', { id: this.playerID, fault: this.faultToLower, value: this.value + 1 })

      if (this.faultToLower === 'victory' || this.faultToLower === 'black') {
        GameService.patchGame(this.$route.params.idGame, { isFinished: true }).then((reponse) => {
          this.$router.push(`/matches/${this.$route.params.id}/games/${this.$route.params.idGame}/finished`)
        })
      }
    }
  }
}
</script>

<style lang="scss">
  .faults:hover {
    box-shadow: none;
  }
</style>
