<template>
<div class="home">
  <section class="row row-stabil--hero">
    <div class="col-md-7">
      <h1 class="header_title">Welcome to Statistics Tracker for Billiard!</h1>
      <p class="header_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio? Soluta aut ad quisquam repudiandae iure vitae ratione nemo nesciunt eos.
      </p>
      <button class="btn btn-danger btn-alert-stabil header_btn">start the journey</button>
    </div>
    <div class="col-md-5">
      <div class="border-stabil">
        <img alt="stabill banner" src="../assets/adult_cropped.jpg" class="home-banner img-fluid">
      </div>
    </div>
  </section>
  <section class="row row-stabil">
    <div class="col-md-7 col-xl-6"></div>
    <div class="col-md-5 col-xl-6">
      <h2 class="h2-stabil">Increase your perfomance</h2>
      <p class="header_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio?
      </p>
      <button class="btn btn-danger btn-alert-stabil btn_section float-right">show journeys</button>
    </div>
  </section>
  <section class="row row-stabil">
    <div class="col-md-5">
      <h2 class="h2-stabil">Document and analyze your results</h2>
      <p class="header_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio?
      </p>
      <button class="btn btn-danger btn-alert-stabil btn_section float-right">show analyses</button>
    </div>
    <div class="col-md-7"></div>
  </section>
  <section class="row row-stabil">
    <div class="col-md-7"></div>
    <div class="col-md-5">
      <h2 class="h2-stabil">Stay up to date</h2>
      <p class="header_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio?
      </p>
      <button class="btn btn-danger btn-alert-stabil btn_section float-right">show news</button>
    </div>
  </section>
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
.header {
  &_title {
    margin-top: 10%;
    margin-left: -4px;
    font-family: Mulish;
    font-weight: 700;
    font-size: 48px;
  }

  &_text {
    margin-top: 30px;
    font-size: 15px;
    line-height: 28px;
  }

  &_btn {
    height: 45px;
    margin-top: 10px;
    margin-left: 0.5px;
  }
}

.btn_section {
   height: 45px;
}

.home-banner {
  position: absolute;
  left: -15px;
  top: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 15px 0px;
}

.border-stabil {
  position: relative;
  height: 335px;
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

h1 {
  font-family: Mulish;
  font-size: 23px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}

h2 {
  font-family: Mulish;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 23px;
}

p {
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}

blockquote {
  font-family: Mulish;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}

pre {
  font-family: Mulish;
  font-size: 11px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
</style>
