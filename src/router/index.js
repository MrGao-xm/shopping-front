import Vue from 'vue'
import Router from 'vue-router'
import loginView from '../views/loginView.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: loginView }
  ]
})
 