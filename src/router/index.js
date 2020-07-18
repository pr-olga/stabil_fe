import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Matches from '../views/Pages/Matches/Matches.vue'
import MatchesCurrent from '../views/Pages/Matches/MatchesCurrent.vue'
import Games from '../views/Games.vue'
import GameCurrent from '../components/Game/GameCurrent.vue'
import Users from '../views/Users.vue'
import UserProfile from '../components/User/UserProfile.vue'

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
    path: '/matches/:id/games/:id/current',
    name: 'matches-current',
    component: GameCurrent
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

export default router
