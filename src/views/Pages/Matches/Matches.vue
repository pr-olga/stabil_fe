<template>
  <div id="matches">
    <h1>Matches</h1>
     <div class="row">
      <div class="col-md-6">
        <p class="mt-3">
        <modal-form v-if="showModal" @close="showModal = false">
          <form @submit.prevent="createMatch">
            <div class="form-group">
              <label for="player-1" class="form-label">Player 1</label>
              <input
              type="text"
              class="form-control"
              id="player-1"
              @focus="showUsers = true"
              v-model="firstUser"
              autocomplete="off">
                  <div class="users-suggestions" v-show="filteredUsers.length > 0 && showUsers === true">
                    <ul class="users-suggestions__list">
                      <li
                      class="users-suggestions__list__user"
                      v-for="user in filteredUsers"
                      :key="user.id"
                      :value="user.id"
                      @click.prevent="selectUser('firstUser', user.name)"
                      >
                        {{ user.name }}
                      </li>
                    </ul>
                  </div>
            </div>
            <div class="form-group">
              <label for="player-2" class="form-label">Player 2</label>
              <input
              type="text"
              class="form-control"
              id="player-1"
              @focus="showSecondUsers = true"
              v-model="secondUser"
              autocomplete="off">
                  <div class="users-suggestions" v-show="showSecondUsers === true">
                    <ul class="users-suggestions__list">
                      <li
                      class="users-suggestions__list__user"
                      v-for="user in filteredSecondUsers"
                      :key="user.id"
                      :value="user.id"
                      @click.prevent="selectUser('secondUser', user.name)"
                      >
                        {{ user.name }}
                      </li>
                    </ul>
                  </div>
            </div>
            <button type="submit" class="btn btn-stabil btn-black-stabil float-right mt-2">Start</button>
          </form>
        </modal-form>
        <button class="btn btn-danger btn-alert-stabil" @click="showModal = true">Start a match!</button>
      </p>
    </div>
    </div>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <ul class="list-group">
            <li class="list-group-item list-group-item-st" v-for="match in matches" :key="match.id">
              <p class="list__title">#Match: {{match.id}}</p>
              Match id: {{match.id}}<br>
              Started: {{match.created}}<br>
              Player 1: {{match.userFirstName}}<br>
              Player 2: {{match.userSecondName}}<br>
              Finished: {{match.matchFinished}} <br>
              Games: {{match.games.ids.length}} <br>
              Winner: winner <br>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MatcheService from '@/services/MatcheService'
import Form from '@/components/Modals/Form'
import store from '@/store/index'

export default {
  components: {
    'modal-form': Form
  },
  data () {
    return {
      matches: [],
      users: [],
      firstUser: '',
      secondUser: '',
      showModal: false,
      showUsers: false,
      showSecondUsers: false
    }
  },
  methods: {
    async createMatch (e) {
      try {
        await MatcheService.post({
          userFirst: this.firstUser.id,
          userSecond: this.secondUser.id
        }).then((response) => {
          this.$router.push('/matches/' + response.data.id + '/current')
        })
      } catch (error) {

      }
    },
    excludeFirstPlayer (event) {
      this.userDisabled = event.target.value
    },
    hideFilteredUsers () {
      this.showUsers = false
      this.showSecondUsers = false
    },
    selectUser (userModel, user) {
      userModel === 'firstUser' ? this.firstUser = user : this.secondUser = user
      this.hideFilteredUsers()
    }
  },
  created () {
    try {
      const a = MatcheService.get()

      a.then((values) => {
        this.matches = values.data.sort((a, b) => b.id - a.id)
      })
    } catch (error) {

    }
  },
  beforeRouteEnter (to, from, next) {
    store.dispatch('getUsers').then(() => {
      next(vm => {
        vm.users = store.getters.getUsers
      })
    })
  },
  computed: {
    filteredUsers () {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.firstUser.toLowerCase())
      })
    },
    filteredSecondUsers () {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.secondUser.toLowerCase())
      })
    }
  }
}

</script>

<style lang="scss">
.form-label {
  margin-left: 2px;
  font-weight: 600;
}

.users-suggestions {
  margin-top: 10px;
  background-color: #fff;

  &__list {
    padding-left: 13px;
    list-style: none;

    &__user {
      margin-top: 10px;

      &:hover {
        cursor: pointer;
        color: $primary;
      }
    }

  }
}
</style>
