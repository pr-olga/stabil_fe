<template>
  <li class="list-group-item">
    <p>Match: {{ strake.id }}</p>
    <p>Datum: {{ strake.created }}</p>
    <p>Winner: 'undefined'</p>
    <p><button class="btn btn-info">Show Details</button></p>
  </li>
</template>

<script>
export default {
  props: ['strake']
}
</script>

<style>

</style>
