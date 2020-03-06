<template>
  <div id="matches">
    <h1>Matches</h1>
    <h2>Create a new one</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Player 1</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Name of Player 1">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Player 2</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name of Player 2" aria-describedby="emailHelp">
      </div>
      <button type="submit" class="btn btn-primary">Start</button>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
