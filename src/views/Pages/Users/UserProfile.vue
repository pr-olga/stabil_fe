<template>
  <div id="user-profile">
    <h1>Profile of User</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-2"><img src="../../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image"></div>
        <div class="col-md-10">
          <ul class="list-group">
            <li class="list-group-item">Profile ID: {{this.user.id}}</li>
            <li class="list-group-item">Name: {{this.user.name}}</li>
            <li class="list-group-item" v-if="this.user.players">Number of games: {{this.user.players.length}}</li>
            <li class="list-group-item">Victories: </li>
            <li class="list-group-item">Lost: </li>
            <li class="list-group-item">Member since: {{this.user.created}}</li>
          </ul>
        </div>
      </div>
    </div>
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
          console.log(this.user)
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

<style lang="scss" scoped>
.user-profile__img {
  height: 150px;
  width: 150px;
}
</style>
