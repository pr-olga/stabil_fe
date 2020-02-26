<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to StaBill"/>
    <div class="container">
      <div class="col-md-12">
        <ul class="list-group">
          <sb-last-games v-for="strake in strakes" :key="strake.id" :strake="strake"></sb-last-games>
        </ul>
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
