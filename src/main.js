import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/base.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
// ----------------axios的处理--------------
import axios from 'axios'
// 配置基础路径
axios.defaults.baseURL = 'http://localhost:3000'
// 把axios加到vue原型上
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
