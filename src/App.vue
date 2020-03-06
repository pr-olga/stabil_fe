<template>
  <div id="app">
    <stabil-header></stabil-header>
    <div class="container">
      <router-view/>
    </div>
</div>
</template>
<script>
import Header from '@/views/Layout/Header'

export default {
  data () {
    return {
      activeMenu: false
    }
  },
  methods: {
    showMenu () {
      this.activeMenu = !this.activeMenu
    }
  },
  components: {
    stabilHeader: Header
  }
}
</script>

<style lang="scss">
</style>
