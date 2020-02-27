<template>
  <div class="home">
    <HelloWorld msg="Welcome    to StaBill"/>
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
import HelloWorld from '@/components/HelloWorld.vue'
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
    HelloWorld,
    sbLastGames: LastGames
  }
}

</script>
<style lang="scss">
.home-banner{
  max-height: 450px;
}

</style>
