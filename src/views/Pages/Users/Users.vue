<template>
<div id="users">
  <h1>Users</h1>
  <div class="row">
    <div class="col-md-6">here you can get a basic overview about the players/users. You see their name, id, amount of victories, and the beginngin date. Every card is linked to single profile whre you can find detailed statistics abut a user. Morerover, there is a subgroup formed according to the amount of the victories <b>Best Users</b>.
    </div>
  </div>
    <div class="row">
    <div class="col-md-6">
   Getting curious and want to get tracked and analyzed your scores?
   <p class="mt-3">
    <modal-form v-if="showModal" @close="showModal = false">
      <form ref="newUser" @submit.prevent="createUser">
        <div class="form-group">
          <input type="text" class="form-control form-control-stabil" id="name" aria-describedby="nameHelp"
            v-model="name" placeholder="username">
          <input type="password" class="form-control form-control-stabil" id="password" aria-describedby="passwordHelp"
            v-model="password" placeholder="password">
        </div>
        <button type="submit" class="btn btn-black-stabil float-right mt-3" @click="$emit('close')">Register</button>
      </form>
    </modal-form>
     <button class="btn btn-danger btn-alert-stabil" @click="showModal = true">Create an account!</button></p>
    </div>
  </div>
    <div class="mt-5">
      <h2 class="headline-h3">Best Players</h2>
      <div class="row">
        <div v-for="user in bestUsers" :key="user.id" class="col-md-4">
            <user-card :user="user" >
              <template v-slot:name>{{ user.name }}</template>
              <template v-slot:id>{{ user.id }}</template>
            </user-card>
        </div>
        </div>
    </div>
    <div class="mt-5">
      <h2  class="headline-h3">All Players</h2>
        <div class="row">
          <div v-for="user in users" :key="user.id" class="col-md-4">
            <user-card :user="user" >
              <template v-slot:name>{{ user.name }}</template>
              <template v-slot:id>{{ user.id }}</template>
            </user-card>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import UserCard from '@/components/User/UserCard'
import Form from '@/components/Modals/Form'
import store from '@/store/index'

export default {
  components: {
    'user-card': UserCard,
    'modal-form': Form
  },
  data () {
    return {
      showModal: false,
      isLoading: false,
      users: [],
      bestUsers: [],
      name: '',
      password: '',
      close: true
    }
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('getUsers').then(() => {
      next(vm => {
        vm.users = store.getters.getUsers
        vm.bestUsers = store.getters.bestUsers
      })
    })
  },
  methods: {
    async createUser (e) {
      await this.name ? this.$store.dispatch('createUser', this.name).then(() => {
        // the promise is faster than store
        setTimeout(() => {
          this.$router.push(`/users/${this.$store.getters.getNewUser}/profile`)
        }, 1000)
      }) : this.name = ''
    }
  }
}
</script>

<style lang="scss">
.headline-h3 {
  margin-bottom: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}

.btn.btn-alert-stabil{
  background-color: #ff284a;
  border-color: #ff284a;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  font-weight: 700;
  font-variant: small-caps;
}

</style>
