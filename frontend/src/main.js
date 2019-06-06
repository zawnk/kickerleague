import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import router from './router'
// import 'buefy/dist/buefy.css'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/css/fontawesome.css"
import { sync } from 'vuex-router-sync'
import * as VeeValidate from 'vee-validate'
import store from './store'

Vue.config.productionTip = false

Vue.use(VeeValidate)

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

sync(store, router)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
