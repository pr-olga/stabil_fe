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
    <user-form v-if="showModal" @close="showModal = false"></user-form>
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
import CreateUserForm from '@/components/User/CreateUserForm'

export default {
  components: {
    'user-card': UserCard,
    'user-form': CreateUserForm
  },
  data () {
    return {
      showModal: false
    }
  },
  created () {
    this.$store.dispatch('getUsers')
  },
  computed: {
    users () {
      return this.$store.state.users
    },
    bestUsers () {
      return this.$store.getters.bestUsers
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
}

</style>
