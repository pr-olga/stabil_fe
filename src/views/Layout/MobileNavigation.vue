<template>
  <div id="navigation-mobile">
    <div class="container">
      <div id="header--mobile">
        <router-link to="/">
        <img src="./../../assets/logo--mob.png" alt="mobile logo" class="logo--mobile">
      </router-link>
      <div class="nav-icon" @click="closeMenu()"><img src="../../assets/times-solid.svg" alt="" height="30px"></div>
      </div>
      <ul class="nav navbar">
        <list-transition :duration="duration[0]">
          <router-link to='/matches' class="nav-item" tag="li" active-class="active"><a class="nav-link"
              @click="closeMenu()">Matches</a>
          </router-link>
        </list-transition>
        <list-transition :duration="duration[1]">
          <router-link to='/games' class="nav-item" tag="li" active-class="active"><a class="nav-link"
              @click="closeMenu()">Games</a>
          </router-link>
        </list-transition>
        <list-transition :duration="duration[2]">
          <router-link to='/users' class="nav-item" tag="li" active-class="active"><a class="nav-link"
              @click="closeMenu()">Users</a>
          </router-link>
        </list-transition>
        <list-transition :duration="duration[3]">
          <router-link to='/locations' class="nav-item" tag="li" active-class="active"><a class="nav-link"
              @click="closeMenu()">Locations</a>
          </router-link>
        </list-transition>
      </ul>
    </div>
  </div>
  </template>

<script>
import ListDurationTransition from '@/components/Animations/ListDurationTransition'
export default {
  props: ['showNav'],
  data () {
    return {
      duration: [400, 400, 400, 400], // make the stuff dynamically
      openedMobNav: false
    }
  },
  components: {
    listTransition: ListDurationTransition
  },
  methods: {
    closeMenu (e) {
      setTimeout((e) => {
        this.$emit('closeMenu', this.opened) // TODO: refactor, add cool effect
      }, 300)
    }
  }
}
</script>

<style lang="scss">
#navigation-mobile {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f5f5fa;
  overflow: hidden;
  transition: 1s;

  .navbar {
    flex-direction: column;
    align-items: start;
    margin-top: 20%;
    padding-left: 0;

    .nav-link {
      padding-left: 0;
      color: $secondary;
      font-size: 32px;
    }
  }
}

</style>
