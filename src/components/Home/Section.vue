<template>
  <section class="row row-stabil">
    <div class="col-md-7 col-xl-6" v-if="!textOnLeft"></div>
    <div class="col-md-5 col-xl-6">
      <h2 class="h2-stabil"><slot name="header"></slot></h2>
      <div class="ball-container">
        <p class="animated-ball" v-scrollAnimation></p>
      </div>
      <p class="header_text">
        <slot name="description"></slot>
      </p>
      <button class="btn btn-danger btn-alert-stabil btn_section float-right"><slot name="btn"></slot></button>
    </div>
    <div class="col-md-7 col-xl-6" v-if="textOnLeft"></div>
  </section>
</template>

<script>
export default {
  props: ['textOnLeft']
}
</script>

<style lang="scss">
.btn_section {
  height: 47px;
}

/* Animated line*/
.ball-container {
  height: 15px;
}

.animated-ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-top: -5px;
  background-color: $primary;
}

@keyframes rolling {

  0%,
  to {
    border-radius: 50%;
    width: 15px;
    transform: translate(0);
  }

  30% {
    border-radius: 0%;
    height: 2px;
  }

  100% {
    width: 100%;
    height: 2px;
    border-radius: 0%;
    transform: translate(10%);
  }
}

.animation-onroal {
  animation-name: rolling;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0.4s;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
}

</style>
