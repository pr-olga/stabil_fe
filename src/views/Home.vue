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
<style lang="scss">
h1 { font-family: Muli; font-size: 23px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; } h3 { font-family: Muli; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; } p { font-family: Muli; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; } blockquote { font-family: Muli; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; } pre { font-family: Muli; font-size: 11px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }
</style>
