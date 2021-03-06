import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import ScrollAnimation from './directives/scrollanimationball'
// import '@/plugins/echarts'

Vue.directive('scrollAnimation', ScrollAnimation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
