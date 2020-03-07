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
          {{user.id}} - {{ user.name }}
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
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    try {
      const a = UserService.get()
      a.then((values) => {
        this.users = values.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
