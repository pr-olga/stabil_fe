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
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img alt="stabill banner" src="../assets/adult_cropped.jpg" class="home-banner img-fluid flip-image">
              <img src="../assets/icon-hand.svg" alt="" class="img-hand animation-onload">
            </div>
            <div class="flip-box-back">
              <p>JOKE.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Part 1 -->
  <section-stabil>
    <template v-slot:header>Increase your perfomance</template>
    <template v-slot:description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio?</template>
    <template v-slot:btn>show journeys</template>
  </section-stabil>

  <!-- Part 2 -->
  <section-stabil :textOnLeft="textOnLeft">
    <template v-slot:header>Document and analyze your results</template>
    <template v-slot:description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio?</template>
    <template v-slot:btn>show news</template>
  </section-stabil>

  <!-- Part 3 -->
  <section-stabil>
    <template v-slot:header>Stay up to date</template>
    <template v-slot:description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam consequatur temporibus quo magni necessitatibus harum quasi asperiores distinctio?</template>
    <template v-slot:btn>show news</template>
  </section-stabil>
</div>
</template>

<script>
import Section from '@/components/Home/Section'

export default {
  name: 'Home',
  data () {
    return {
      textOnLeft: true
    }
  },
  components: {
    sectionStabil: Section
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;

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
    float: right;
    height: 45px;
    margin-top: 10px;
    margin-left: 0.5px;
  }
}

@media (min-width: 768px) {
  .header_btn {
    float: none;
  }
}

.home-banner {
  position: absolute;
  left: -15px;
  top: 15px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 15px 0px;
}

.border-stabil {
  position: relative;
  margin-top: 30px;
  height: 335px;
  max-height: 100%;
  border: 3px solid $primary;
}

@media (min-width: 768px) {
  .border-stabil {
    margin-top: 0;
  }
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

/* Animated image*/

.flip-box {
  background-color: transparent;
  width: 100%;
  max-width: 437px;
  height: 100%;
  max-height: 308px;
  perspective: 1000px;
}

.flip-box-inner {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-back {
  margin-left: -15px;
  margin-top: 15px;
  background-color: $primary;
  color: white;
  transform: rotateY(180deg);
  box-shadow: none;

  p {
    font-size: 38px;
    font-weight: 700;
    width: 100px;
    height: 30px;
    margin-top: 30%;
    margin-left: auto;
    margin-right: auto;
  }
}

/* Animation  floating hand*/
.img-hand {
  position: absolute;
  bottom: 0;
  /* margin-left: -35px; */
  right: 15px;
  height: 50px;
}

@keyframes floating {

  0%,
  to {
    transform: translate(0);
  }

  50% {
    transform: translate(0%, 15%);
  }
}

.animation-onload {
  animation-name: floating;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}
</style>
