<template>
  <div id="app">
    <stabil-header></stabil-header>
    <div>
      <button class="btn-navi"><img src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png" alt="" @click="showMenu"/></button>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
.navbar-brand {
  font-family: 'Monoton';
}

.btn-navi{
  border: none;
  outline: none!important;
  display: block;
  position: fixed;
  padding: 0;
  z-index: 98;
  top: 10px;
  right: 0;
  margin: 10px 10px 0 0;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #FF1177;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  text-align: center;
  &:active {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
  //box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.3);

  img {
     -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  }
}
}

button>img {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  width: 30px;
  height: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.navi {
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 0;
  z-index: 97;
  width: 100%;
  height: 100%;
  color: #fff;

}
</style>
