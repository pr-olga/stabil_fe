<template>
  <div id="header">
    <div>
      <ul class="nav navbar">
        <router-link to='/' tag="li" class="nav-item" active-class="active" exact><a class="nav-link">Home</a>
        </router-link>
        <router-link to='/matches' class="nav-item" tag="li" active-class="active"><a class="nav-link">Matches</a>
        </router-link>
        <router-link to='/games' class="nav-item" tag="li" active-class="active"><a class="nav-link">Games</a>
        </router-link>
        <router-link to='/users' class="nav-item" tag="li" active-class="active"><a class="nav-link">Users</a>
        </router-link>
        <router-link to='/locations' class="nav-item" tag="li" active-class="active"><a class="nav-link">Locations</a>
        </router-link>
        <li class="nav-item">
          <button class="btn-navi rotate-on-click"><img
              src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/2x/btw_ic_speeddial_white_24dp_2x.png"
              alt=""/></button>
        </li>
      </ul>
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
  justify-content: flex-end;
}

.active {
  a {
    color: #ff284a;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
}

.nav-link {
  color: #212529;
  font-size: 18px;
  margin-right: 10px;
  transition: 0.3s;

  &:hover {
    color: #ff284a;
  }
}

.btn-navi {
  border: none;
  outline: none !important;
  display: block;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #ff284a;
  text-align: center;
  }

.rotate-on-click:focus {
  animation-name: rotateAnimation;
  animation-duration:1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes rotateAnimation {
  from {
     transition: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

button>img {
  position: relative;
  width: 30px;
  height: 30px;
  -transition: 0.5s;
  transition: 0.5s;
  -transform: rotate(180deg);
  transform: rotate(180deg);
}

</style>
