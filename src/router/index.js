import Vue from 'vue'
import Router from 'vue-router'
import loginView from '../views/loginView.vue'
import Home from '../views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: loginView },
    { path: '/home', component: Home }
  ]
})
 