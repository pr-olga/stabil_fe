<template>
<div id="users">
  <h1>Hello Users!</h1>
  <h2>Create a New User</h2>
  <form @submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp"
          placeholder="Olgita Kirsche" v-model="name">
      </div>
      <button type="submit" class="btn btn-primary">Create an Account</button>
    </form>
    <div class="mt-5">
      <h3>Best Users</h3>
      <ul>
        <li v-for="user in bestUsers" :key="user.id">
          <a :href="'users/' + user.id + '/profile'">{{user.id}} - {{ user.name }}</a>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <h3>All Users</h3>
      <ul>
        <li v-for="user in users" :key="user.id">
          <a :href="'users/' + user.id + '/profile'">{{user.id}} - {{ user.name }}</a>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    createUser () {
      this.$store.dispatch('createUser', this.name)
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

<style>

</style>
