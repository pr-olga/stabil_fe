<template>
  <div id="navigation-mobile">
    <div class="nav-icon" @click="showNav = false"><img src="../../assets/times-solid.svg" alt="" height="30px"></div>
  <ul class="nav navbar">
    <router-link to='/matches' class="nav-item" tag="li" active-class="active"><a class="nav-link">Matches</a>
    </router-link>
    <router-link to='/games' class="nav-item" tag="li" active-class="active"><a class="nav-link">Games</a>
    </router-link>
    <router-link to='/users' class="nav-item" tag="li" active-class="active"><a class="nav-link">Users</a>
    </router-link>
    <router-link to='/locations' class="nav-item" tag="li" active-class="active"><a class="nav-link">Locations</a>
    </router-link>
  </ul>
  </div>
</template>

<script>
export default {
  props: ['showNav']
}
</script>

<style lang="scss">
#navigation-mobile {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: #f5f5fa;

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
