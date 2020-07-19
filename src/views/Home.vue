<template>
  <div class="home text-center">
    <div class="neon-wrapper">
      <h1 class="home__title">STABIL</h1>
    </div>
    <img alt="stabill banner" src="../assets/adult_cropped.jpg" class="home-banner img-fluid">
    <div class="container ">
          <div class="row justify-content-md-center">
      <div class="col-md-8">
        <ul class="list-group">
          <sb-last-games v-for="strake in strakes" :key="strake.id" :strake="strake"></sb-last-games>
        </ul>
      </div>
    </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LastGames from '@/components/LastGames.vue'
import data from '@/data/strake.json'

export default {
  name: 'Home',
  data () {
    return {
      strakes: data
    }
  },
  components: {
    sbLastGames: LastGames
  }
}

</script>
<style lang="scss" scoped>
@font-face {
  font-family: neon;
  src: url(../assets/fonts/hellodenverdisplayregular_v1.6.ttf);
}

.home__title{
  //margin: 20px 0;
  display: inline-block;
  padding: 1rem;
  color: #ffd8d8;
  background-color: #282828;
  font-family: neon;
  font-size: 7rem;
  text-shadow:
  .1vw 0vw   0vw #f25757, .2vw 0vw   0vw #f25757, .2vw 0vw   0vw #f25757,
  .1vw 0vw   1vw #e50b0b, .2vw 0vw   1vw #e50b0b, .4vw 0vw   5vw #e50b0b;

}

.home-banner{
  max-height: 450px;
}

</style>
