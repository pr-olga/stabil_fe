<template>
<div id="users">
  <h1>Hello Users!</h1>
  <h2>Create a New User</h2>
  <form @submit.prevent="createMatch">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp"
          placeholder="Name of Player 1">
      </div>
      <button type="submit" class="btn btn-primary">Create an Account</button>
    </form>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
