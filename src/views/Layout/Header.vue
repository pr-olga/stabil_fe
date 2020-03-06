<template>
  <div id="header">
    <div>
      <ul class="nav navbar  nav-pills">
        <router-link to='/' tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Home</a>
        </router-link>
        <router-link to='/matches' class="nav-item" tag="li" active-class="active"><a class="nav-link">Matches</a>
        </router-link>
        <router-link to='/games' class="nav-item" tag="li" active-class="active"><a class="nav-link">Games</a>
        </router-link>
        <router-link to='/players' class="nav-item" tag="li" active-class="active"><a class="nav-link">Players</a>
        </router-link>
        <router-link to='/locations' class="nav-item" tag="li" active-class="active"><a class="nav-link">Locations</a>
        </router-link>
      </ul>
    </div>

    <div>
      <button class="btn-navi"><img
          src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
          alt="" /></button>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style lang="scss" scoped>
.navbar {
  padding: 2rem;
  justify-content: start;
}

.active {
  a {
    color: #fff;
    background-color: #ff1177;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  }
}

.nav-link {
  color: #212529;
}

.btn-navi {
  border: none;
  outline: none !important;
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
  background-color: #ff1177;
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

</style>
