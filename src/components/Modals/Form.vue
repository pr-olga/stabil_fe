<template>
  <transition name="modal" appear>
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      close: true
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  font-size: 16px;

    .form-control:focus{
        border-color: $primary;
        box-shadow: none;
    }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  max-width: 400px;
  min-height: 250px;
  max-height: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-enter,
.modal-leave-active  {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.form-control.form-control-stabil {
  padding: 0;
  padding-left: 5px;
  border: none;
  border-radius: 0;
  border-bottom: solid 1.3px $primary;
  margin-top: 20px;
}

.btn.btn-black-stabil {
  background-color: #282828;
  color: #fff;

  &:hover {
     color: #fff;
     opacity: 0.8;
     transition: all .3s ease;
  }
}
</style>
