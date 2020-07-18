<template>
  <div id="game-current">
    <h1>Current Game</h1>
    <div class="col-md-12">

      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-missing">Missing</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-missing">Missing</button>
        </div>
      </div>
      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-white">White</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-white">White</button>
        </div>
      </div>
      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-black">Black</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-black">Black</button>
        </div>
      </div>
      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-wrong">Wrong</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-wrong">Wrong</button>
        </div>
      </div>
      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-double">Double</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-double">Double</button>
        </div>
      </div>
      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-line">Line</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-line">Line</button>
        </div>
      </div>
      <div class="row mt-4 align-center">
        <div class="col-md-6">
          <button class="btn faults f-wrong">Victory</button>
        </div>
        <div class="col-md-6">
          <button class="btn faults f-wrong">Victory</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import PlayerService from '@/services/PlayerService'

export default {
  data () {
    return {
      player1ID: '',
      player2ID: '',
      currentPlayerID: '',
      missing: '',
      white: '',
      black: '',
      wrong: '',
      doubleFault: '',
      line4: '',
      line5: '',
      line6: '',
      victory: ''
    }
  },
  methods: {
    async startNewGame ($id) {
      try {
        await PlayerService.patch(this.$route.params.id, {
          matche: this.matchId

        }).then((response) => {

        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

.align-center {
  text-align: center;
}

.faults {
  width: 240px;
  height: 68px;
  border-radius: 24px!important;
  font-size: 22px!important;
  font-weight: bold!important;
  color: #fff!important;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}

.f-white {
  background-color: #5677fc!important;
}

.f-missing {
  background-color: #00bcd4!important;
}

.f-black {
  background-color: #212831!important;
}

.f-wrong {
  background-color: #e91e63!important;
}

.f-double {
  background-color: #ff5722!important;
}

.f-line {
  background-color: #259b24!important;
}
</style>
