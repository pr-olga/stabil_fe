<template>
  <div class="home">
<div class="row">
<div class="col-md-6"> <h1 class="header_title">Welcome to Statistics Tracker for Billiard!</h1>
<button class="btn btn-danger btn-alert-stabil">Start to track!</button>
</div>
<div class="col-md-6">
  <div class="border-stabil">
<img alt="stabill banner" src="../assets/adult_cropped.jpg" class="home-banner img-fluid">
  </div>
  </div>
</div>
<!--     <div class="container ">
          <div class="row justify-content-md-center">
      <div class="col-md-8">
        <ul class="list-group">
          <sb-last-games v-for="strake in strakes" :key="strake.id" :strake="strake"></sb-last-games>
        </ul>
      </div>
    </div>
        </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
/* import LastGames from '@/components/LastGames.vue' */
import data from '@/data/strake.json'

export default {
  name: 'Home',
  data () {
    return {
      strakes: data
    }
  }
  /*  components: {
    sbLastGames: LastGames
  } */
}

</script>
<style lang="scss">

.header_title {
  margin-top: 10%;
  font-family: Mulish;
  font-weight: 700;
  font-size: 48px;
}

.home-banner {
  position: absolute;
  left: -15px;
  top: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 15px 0px;
}

.border-stabil {
  position: relative;
  height: 375px;
  max-height: 100%;
  border: 3px solid $primary;
}
@keyframes floating {

  0%,
  to {
    transform: translate(0) scale(1);
  }

  50% {
    transform: translate(7%, -11%) scale(1.02);
  }
}

.animation-onload {
    animation-name: floating;
    animation-duration: 7s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
}

h1 { font-family: Mulish; font-size: 23px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; } h2 { font-family: Mulish; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; } p { font-family: Mulish; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; } blockquote { font-family: Mulish; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; } pre { font-family: Mulish; font-size: 11px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }
</style>
