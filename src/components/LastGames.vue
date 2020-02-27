<template>
  <li class="list-group-item">
    <p class="list__title">#Match {{ strake.id }}</p>
    <p class="list__datum">{{ strake.created }}</p>
    <p><span class="winner">Winner:</span> <b>{{ this.winner }}</b></p>
<!--     <p><button class="btn btn-info">Show Details</button></p> -->
  </li>
</template>

<script>
export default {
  props: ['strake'],
  data () {
    return {
      winner: ''
    }
  },
  created () {
    if (this.strake.player1.victory < this.strake.player2.victory) {
      this.winner = 'Schockolade🍫'
    } else if (this.strake.player1.victory > this.strake.player2.victory) {
      this.winner = 'Birne🍐'
    } else {
      this.winner = 'Freundschaft🤝'
    }
  }
}
</script>

<style lang="scss">
.list-group-item {
    margin-top: 20px;
    padding: 20px!important;
    background-color: #FAFAFA!important;

}

.list-group-item + .list-group-item {
  border-top: 1px solid rgba(0, 0, 0, 0.125)!important;
}

.list {
 &__title{
   font-size: 28px;
   font-weight: 700;
 }

 &__datum {
  margin-top: -18px;
  font-size: 14px;
  opacity: 0.7;
}

}
.winner {
  font-size: 14px;
  opacity: 0.7;
}
</style>
