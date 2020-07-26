<template>
<!--  <transition name="modal" appear>
  <div class="modal-stabil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="showModal && close" @close="close = true">
  <form ref="newUser" @submit.prevent="createUser">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp"
          placeholder="Olgita Kirsche" v-model="name">
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
 </transition> -->

  <transition name="modal" appear>
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <form ref="newUser" @submit.prevent="createUser">
            <div class="form-group">
              <input type="text" class="form-control form-control-stabil" id="name" aria-describedby="nameHelp"
                v-model="name" placeholder="username">
              <input type="text" class="form-control form-control-stabil" id="password" aria-describedby="passwordHelp"
                v-model="password" placeholder="password">
            </div>
            <button type="submit" class="btn btn-black-stabil float-right mt-3" @click="$emit('close')">Register</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      close: true
    }
  },
  methods: {
    createUser () {
      this.name ? this.$store.dispatch('createUser', this.name) : this.name = ''
      this.name = ''
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  max-width: 400px;
  height: 250px;
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
  border-bottom: solid 1.3px #ff284a;
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
