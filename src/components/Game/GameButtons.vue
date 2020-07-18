<template>
<div id="fault-buttons">
  <div class="row mt-5 align-center">
    <div class="col-md-6">
      <h3>{{ name }}</h3>
    </div>
  </div>
  <div class="row mt-4 align-center">
    <div class="col-md-6">
      <button class="btn faults f-missing">Missing</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: [
    names
  ]
}
</script>

<style>

</style>
