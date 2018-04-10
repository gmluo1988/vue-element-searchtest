import Vue from 'vue'
import App from './App.vue'

//引入路由配置文件
import router from './router'

//引入ElementUI组件
import ElementUI from 'element-ui'
//引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'

//引入axios
import axios from 'axios'

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
Vue.prototype.$http = axios //其他页面在使用axios的时候直接  this.$http就可以了

//使用ElementUI
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,//为vue对象加载路由配置
  render: h => h(App)
})
