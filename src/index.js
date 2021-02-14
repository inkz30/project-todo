import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'
import routes from './route/route'
import http from './http/http'

const router = new VueRouter({
  routes
})

Vue.use(Vuex)
Vue.use(VueRouter)

Vue.prototype.http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#vp-app')