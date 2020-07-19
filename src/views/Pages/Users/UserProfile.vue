<template>
  <div id="user-profile">
    <h1 class="user-profile__name text-center">{{this.user.name}}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-2"><img src="../../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image">
        <p class="mt-3">
          profile-id: {{this.user.id}}<br>
          <b>playing since: </b> <br>{{this.user.created}}
        </p>
        </div>
        <div class="col-md-10">
              <ul>
                <list-transition :duration="duration[0]">
                  <li class="list-group-item">Amount of Games: {{this.games.length}} <button type="button" class="btn btn-info float-right">detailed info</button></li>
                 </list-transition>
                 <list-transition :duration="duration[1]">
                  <li class="list-group-item">Victories: </li>
                 </list-transition>
                <list-transition :duration="duration[2]">
                  <li class="list-group-item">Lost: </li>
                 </list-transition>
                <list-transition :duration="duration[3]">
                  <li class="list-group-item">Whites: </li>
                 </list-transition>
                 <list-transition :duration="duration[4]">
                  <li class="list-group-item">Blacks: </li>
                </list-transition>
                <list-transition :duration="duration[5]">
                  <li class="list-group-item">more statistics</li>
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
      games: [],
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
          this.games = this.user.players.ids
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
.user-profile{
  &__name {
    font-size: 56px;
  }
  &__img {
    height: 150px;
    width: 150px;
  }
}
</style>
