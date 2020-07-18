<template>
  <div id="user-profile">
    <h1>Profile of User</h1>
 {{ this.user.players }}
  <ul class="list-group">
  <li class="list-group-item">Name: {{this.user.name}}</li>
  <li class="list-group-item" v-if="this.user.players">Number of games: {{this.user.players.length}}</li>
  <li class="list-group-item">Victories: </li>
  <li class="list-group-item">Lost: </li>
  <li class="list-group-item">Member since: </li>
</ul>

  </div>

</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      user: []
    }
  },
  methods: {
    async getUser () {
      try {
        await UserService.getUser(this.$route.params.id).then((values) => {
          this.user = values.data
          // console.log(this.user)
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    return this.getUser()
  }
}
</script>

<style>

</style>
