<template>
  <div id="game-current">
    <h1>Current Game: </h1>
    <div class="row">
      <div class="col-md-5 text-center">
        <h2>{{this.player1Name}}</h2>
      </div>
      <div  class="col-md-2 text-center">
        <b>vs</b>
      </div>
       <div class="col-md-5 text-center">
        <h2>{{this.player2Name}}</h2>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="missing">
        </game-button>
        <game-button :playerID="player2ID" :fault="missing">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="white">
        </game-button>
        <game-button :playerID="player2ID" :fault="white">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="black">
        </game-button>
        <game-button :playerID="player2ID" :fault="black">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="wrong">
        </game-button>
        <game-button :playerID="player2ID" :fault="wrong">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="doubleFault">
        </game-button>
        <game-button :playerID="player2ID" :fault="doubleFault">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="line4">
        </game-button>
        <game-button :playerID="player2ID" :fault="line4">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="player1ID" :fault="victory">
        </game-button>
        <game-button :playerID="player2ID" :fault="victory">
        </game-button>
      </div>

    </div>
  </div>
</template>

<script>
import GameService from '@/services/GameService'
import GameButtons from '@/components/Game/GameButtons'

export default {
  components: {
    'game-button': GameButtons
  },
  data () {
    return {
      gameId: 0,
      player1ID: 0, // null because of live circle
      player2ID: 0, // null because of live circle
      player1Name: '',
      player2Name: '',
      currentPlayerID: '',
      missing: 'Missing',
      white: 'White',
      black: 'Black',
      wrong: 'Wrong',
      doubleFault: 'DoubleFault',
      line4: 'line',
      line5: 'Line 5',
      line6: 'Line 6',
      victory: 'Victory'
    }
  },
  mounted () {
    try {
      GameService.getGame(this.$route.params.idGame).then((values) => {
        const data = values.data

        this.gameId = data.id
        this.player1ID = data.player1.id
        this.player2ID = data.player2.id
        this.player1Name = data.player1.userName
        this.player2Name = data.player2.userName
      })
    } catch (error) {

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

.f-doublefault {
  background-color: #ff5722!important;
}

.f-line {
  background-color: #259b24!important;
}

.f-victory {
  background-color: #e91e63!important;
}
</style>
