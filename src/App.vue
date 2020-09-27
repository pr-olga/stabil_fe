<template>
  <div id="app">
    <mobile-navigation v-if="showNav" :showNav=showNav @closeMenu="showNav = $event"></mobile-navigation>
    <div class="container">
      <div class="nav-icon" v-if="mobileView" @click="showNav = true">
      <img src="./assets/bars-solid.svg" alt="" height="30px" ></div>
    </div>
    <stabil-header v-if="!mobileView"></stabil-header>
    <main class="container main-container-st">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>
<script>
import Header from '@/views/Layout/Header'
import MobileNavigation from '@/views/Layout/MobileNavigation'

export default {
  data () {
    return {
      mobileView: false,
      showNav: false
    }
  },
  components: {
    stabilHeader: Header,
    mobileNavigation: MobileNavigation
  },
  methods: {
    handleView () {
      this.mobileView = window.innerWidth <= 992
    }
  },
  created () {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
}
</script>

<style lang="scss">
.nav-icon {
 text-align: right;
 margin-top: 20px;
}

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
