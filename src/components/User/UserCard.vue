<template>
      <div class="card card-stabil">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text"><slot></slot></p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
     </div>
</template>

<script>
export default {

}
</script>

<style>
.card-stabil {
  margin-bottom: 20px;
}

</style>
