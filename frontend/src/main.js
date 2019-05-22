import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import router from './router'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/css/fontawesome.css"
import { sync } from 'vuex-router-sync'
import store from './store'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  // defaultContainerElement: '#app'
})

sync(store, router)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
