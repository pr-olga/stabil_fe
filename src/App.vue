<template>
  <div id="app">
    <stabil-header></stabil-header>
    <main class="container mb-5">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </main>
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
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
