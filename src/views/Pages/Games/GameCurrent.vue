<template>
  <div id="game-current">
    <h1>Current Game: [Number]</h1>
    <div class="row">
      <div class="col-md-5 text-center">
        <h2>{{values[0] ? values[0].name : 0}}</h2>
      </div>
      <div  class="col-md-2 text-center">
        <b>vs</b>
      </div>
       <div class="col-md-5 text-center">
        <h2>{{values[1] ? values[1].name : 0}}</h2>
      </div>
    </div>
    <div class="col-md-12">
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="missing" :value="values[0] ? values[0].missing : 0">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="missing" :value="values[1] ? values[1].missing : 0">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="white" :value="values[0] ? values[0].white : 0">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="white" :value="values[1] ? values[1].white : 0">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="wrong" :value="values[0] ? values[0].wrong : 0">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="wrong" :value="values[1] ? values[1].wrong : 0">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="doubleFault" :value="values[0] ? values[0].doublefault : 0">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="doubleFault" :value="values[1] ? values[1].doublefault : 0">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="line4">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="line4">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="black" :value="values[0] ? values[0].black : 0">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="black" :value="values[1] ? values[1].black : 0">
        </game-button>
      </div>
      <div class="row mt-4 align-center">
        <game-button :playerID="values[0] ? values[0].id : 0" :fault="victory" :value="values[0] ? values[0].victory : 0">
        </game-button>
        <game-button :playerID="values[1] ? values[1].id : 0" :fault="victory" :value="values[1] ? values[1].victory : 0">
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
      player1ID: 0,
      player2ID: 0,
      currentPlayerID: 0,
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
  beforeRouteEnter (to, from, next) {
    GameService.getGame(to.params.idGame).then((values) => {
      next()
    })
  },
  created () {
    try {
      GameService.getGame(this.$route.params.idGame).then((values) => {
        const data = values.data

        this.gameId = data.id
        this.player1ID = data.player1.id
        this.player2ID = data.player2.id

        if (this.$store.getters.getPlayers.length === 0) {
          this.$store.dispatch('setPlayers', [data.player1.id, data.player1.userName])
          this.$store.dispatch('setPlayers', [data.player2.id, data.player2.userName])
        }
      })
    } catch (error) {

    }
  },
  computed: {
    values () {
      return this.$store.getters.getPlayers
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
