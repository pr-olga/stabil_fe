<template>
    <recycle-scroller page-mode :items="users" :item-size="120" key-field="id" v-slot="{ item }" :buffer="500">
      <a :href="'users/' + item.id + '/profile'" class="card-user-link">
        <div class="card card-stabil">
          <div class="card-body">
            <div class="card-body__maininfo">
              <div class="card-body__maininfo__img">
                <img src="../../assets/profile_placeholder_cropped.jpg" class="rounded-circle user-profile__img" alt="Circle image">
              </div>
              <div class="card-body__maininfo__text">
                <h5 class="card-title card-title-stabil">{{item.name}}</h5>
                <p class="card-text card-text-stabil">#{{item.id}} <small class="text-muted">{{item.victories ? item.victories : 'playing'}}
                  </small></p>
              </div>
            </div>
          </div>
      </div>
      </a>
      </recycle-scroller>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

export default {
  props: {
    users: {
      type: Array
    }
  },
  components: {
    'recycle-scroller': RecycleScroller
  }
}
</script>

<style lang="scss">
.card-user-link {
  &:hover{
    text-decoration: none;
  }
}

.card {
  border: none!important;
}

.card-stabil {
  border-radius: 25px!important;
  margin-bottom: 30px;
  box-shadow: 0 0.2rem 0.5rem rgba(103,110,144,.2), 0 0 0 0.1rem rgba(103,110,144,.05);

  &:hover{
    img {
      transform: scale(1.2);
      transition: .35s cubic-bezier(.215,.61,.355,1);
      will-change: transform;
    }
  }
}

.card-body__maininfo {
  display: flex;
  flex-direction: row;

  &__text{
    margin-top: 5px;
    margin-left: 20px;
    color: #ff284a;

    .card-title-stabil {
      font-size: 18px;
    }

    .card-text-stabil {
      font-size: 14px;
    }

  }
}

.card-title-stabil {
  margin-bottom: 0;
}

.user-profile{
  &__img {
    height: 60px;
    width: 60px;
    padding-top: 5px;
    padding-right: 5px;
    border: 1.5px solid #ff284a;
    transition: .35s cubic-bezier(.215,.61,.355,1);
  }
}

.vue-recycle-scroller__item-wrapper {
  overflow: inherit;
}

.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view {
  width: 100%;
  max-width: 500px;
}

.vue-recycle-scroller.ready .vue-recycle-scroller__item-view {
  right: 0;
  margin: auto
}

</style>
