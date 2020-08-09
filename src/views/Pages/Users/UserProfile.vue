<template>
  <div id="user-profile">
    <div class="container">
      <div class="row">
        <div class="col-md-2 margin-top--90"><img src="../../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image">
        <p class="mt-3">
          profile-id: {{this.user.id}}<br>
          <b>playing since: </b> <br>{{this.user.created}}
        </p>
        </div>
        <div class="col-md-10">
           <h1 class="user-profile__name text-center">{{this.user.name}}</h1>
              <ul>
                <list-transition :duration="duration[0]">
                  <li class="list-group-item">Amount of Games: {{this.games.length}} <button type="button" class="btn btn-outline-info float-right">details</button></li>
                 </list-transition>
                 <list-transition :duration="duration[1]">
                  <li class="list-group-item">Victories: <b>{{this.victory}}</b></li>
                 </list-transition>
                <list-transition :duration="duration[2]">
                  <li class="list-group-item">Lost: {{this.lost}}</li>
                 </list-transition>
                <list-transition :duration="duration[3]">
                  <li class="list-group-item">Whites: {{this.whites}}</li>
                 </list-transition>
                 <list-transition :duration="duration[4]">
                  <li class="list-group-item">Blacks: {{this.blacks}}</li>
                </list-transition>
                <list-transition :duration="duration[5]">
                  <div class="mt-4 text-center">
                    <button type="button" class="btn btn-outline-info mr-5">more statistics</button>
                    <button type="button" class="btn btn-outline-danger">compare</button>
                  </div>
                </list-transition>
              </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import ListDurationTransition from '@/components/Animations/ListDurationTransition'

export default {
  data () {
    return {
      user: [],
      games: [],
      victory: '',
      lost: '',
      whites: '',
      blacks: '',
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
          this.games = this.user.players[0]
        }).then(() => {
          this.victory = this.games.filter((x) => x.victory != null).length
          this.lost = this.games.length - this.victory
          this.whites = this.games.map(x => x.whites).reduce((a, b) => a + b)
          this.blacks = this.games.map(x => x.blacks).reduce((a, b) => a + b)
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
    padding-top: 5px;
    padding-right: 5px;
    border: 1.5px solid #ff284a;
  }
}

.margin-top--90{
  margin-top: 90px;
}
</style>
