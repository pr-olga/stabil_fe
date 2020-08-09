<template>
  <div id="navigation-mobile">
    <div class="nav-icon" @click="closeMenu()"><img src="../../assets/times-solid.svg" alt="" height="30px"></div>
  <ul class="nav navbar">
    <list-transition :duration="duration[0]">
      <router-link to='/matches' class="nav-item" tag="li" active-class="active"><a class="nav-link">Matches</a>
      </router-link>
    </list-transition>
    <list-transition :duration="duration[1]">
      <router-link to='/games' class="nav-item" tag="li" active-class="active"><a class="nav-link">Games</a>
      </router-link>
     </list-transition>
    <list-transition :duration="duration[2]">
      <router-link to='/users' class="nav-item" tag="li" active-class="active"><a class="nav-link">Users</a>
      </router-link>
     </list-transition>
     <list-transition :duration="duration[3]">
      <router-link to='/locations' class="nav-item" tag="li" active-class="active"><a class="nav-link">Locations</a>
      </router-link>
     </list-transition>
  </ul>
  </div>
</template>

<script>
import ListDurationTransition from '@/components/Animations/ListDurationTransition'
export default {
  props: ['showNav'],
  data () {
    return {
      duration: [600, 900, 1200, 1500], // make the stuff dynamically
      openedMobNav: false
    }
  },
  components: {
    listTransition: ListDurationTransition
  },
  methods: {
    closeMenu () {
      this.$emit('closeMenu', this.opened)
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
  transition: 0.5s;

  .navbar {
    flex-direction: column;
    align-items: start;
    margin-top: 20%;

    a {
      color: $secondary;
      font-size: 32px;
    }
  }
}

</style>
