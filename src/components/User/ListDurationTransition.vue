<template>
  <div id="list-duration-transition">
                <transition name="scale"
              enter-active-class="scaleIn"
              leave-active-class="scaleOut"
              appear
              @before-appear="setDuration"
              @after-appear="cleanUpDuration"
              >
                  <slot></slot>
              </transition>
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 300
    }
  },
  methods: {
    setDuration (el) {
      el.style.animationDuration = `${this.duration}ms`
    },
    cleanUpDuration (el) {
      el.style.animationDuration = ''
    }
  }
}
</script>

<style>
@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes scaleOut {
  from {
     transform: scale(1);
  }
  to {
     transform: scale(0);
  }
}

.scaleIn {
  animation-name: scaleIn;
}

.scaleOut {
  animation-name: scaleOut;
}
</style>
