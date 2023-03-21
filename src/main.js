import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式表
import './assets/css/g.css'

import axios from 'axios'
// axios.defaults.baseURL = '/api'

// //配置请求的根路径
axios.defaults.baseURL ='http://127.0.0.1:7001'

// //每一个vue组件都能直接通过this.$axios发起ajax请求
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//挂载路由导航守卫控制访问权限


new Vue({
  axios,
  router,
  //全局事件总栈
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
