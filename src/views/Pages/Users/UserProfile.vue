<template>
  <div id="user-profile">
    <h1>User Profile</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-2"><img src="../../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image"></div>
        <div class="col-md-10">
              <ul>
                <list-transition :duration="duration[0]">
                  <li class="list-group-item">Profile ID: {{this.user.id}}</li>
                 </list-transition>
                <list-transition :duration="duration[1]">
                  <li class="list-group-item">Name: {{this.user.name}}</li>
                 </list-transition>
                <list-transition :duration="duration[2]">
                  <li class="list-group-item" v-if="this.user.players">Number of games: {{this.user.players.length}}</li>
                </list-transition>
                   <list-transition :duration="duration[3]">
                  <li class="list-group-item">Victories: </li>
                 </list-transition>
                 <list-transition :duration="duration[4]">
                  <li class="list-group-item">Lost: </li>
                </list-transition>
                <list-transition :duration="duration[5]">
                  <li class="list-group-item">Member since: {{this.user.created}}</li>
                </list-transition>
              </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import ListDurationTransition from '@/components/User/ListDurationTransition'

export default {
  data () {
    return {
      user: [],
      duration: [300, 500, 700, 900, 1000, 1100] // make the stuff dynamically
    }
  },
  components: {
    listTransition: ListDurationTransition
  },
  methods: {
    async getUser () {
      try {
        await UserService.getUser(this.$route.params.id).then((values) => {
          this.user = values.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  created () {
    return this.getUser()
  } // Object.keys(this.errors).length
}
</script>

<style lang="scss" scoped>
.user-profile__img {
  height: 150px;
  width: 150px;
}
</style>
