import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Matches from '../views/Pages/Matches/Matches.vue'
import MatchesCurrent from '../views/Pages/Matches/MatchesCurrent.vue'
import Games from '../views/Pages/Games/Games.vue'
import GameCurrent from '../views/Pages/Games/GameCurrent.vue'
import GameFinished from '../views/Pages/Games/GameFinished.vue'
import Users from '../views/Pages/Users/Users.vue'
import UserProfile from '../views/Pages/Users/UserProfile.vue'
import initProgress from '../progressbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/matches/:id/current',
    name: 'matches-current',
    component: MatchesCurrent
  },
  {
    path: '/matches/:id/games/:idGame/current',
    name: 'game-current',
    component: GameCurrent
  },
  {
    path: '/matches/:id/games/:idGame/finished',
    name: 'game-finished',
    component: GameFinished
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:id/profile',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

initProgress(router)

export default router
