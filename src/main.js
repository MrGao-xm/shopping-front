import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.css'
import '@/assets/css/global.css'


// 导入axios
import axios from 'axios';
import { Message } from 'element-ui';
//svg
import '@/svg';
import '@/icons'
import SvgIcon from '@/components/SvgIcon.vue';
Vue.component('SvgIcon', SvgIcon);
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8088/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
// 全局挂载message
Vue.prototype.$message = Message
