<template>
<div id="users">
  <h1>Hello Users!</h1>
  <h2>Create a New User</h2>
  <form ref="newUser" @submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp"
          placeholder="Olgita Kirsche" v-model="name">
      </div>
      <button type="submit" class="btn btn-primary">Create an Account</button>
    </form>
    <div class="mt-5">
      <h3 class="headline-h3">Best Users</h3>
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
      <h3  class="headline-h3">All Users</h3>
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

export default {
  components: {
    'user-card': UserCard
  },
  data () {
    return {
      name: ''
    }
  },
  methods: {
    createUser () {
      this.name ? this.$store.dispatch('createUser', this.name) : this.name = ''
      this.name = ''
    }
  },
  mounted () {
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

</style>
