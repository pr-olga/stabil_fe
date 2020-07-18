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
      <ul>
        <li v-for="user in users" :key="user.id">
          <a :href="'users/' + user.id + '/profile'">{{user.id}} - {{ user.name }}</a>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      users: '',
      name: ''
    }
  },
  methods: {
    async createUser () {
      try {
        await UserService.post({ name: this.name })
        this.getUsers()
      } catch (error) {
        console.log(error)
      }
    },
    async getUsers () {
      try {
        await UserService.get().then((values) => {
          this.users = values.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    return this.getUsers()
  }
}
</script>

<style>

</style>
