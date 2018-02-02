import Vue from 'vue'
import App from './App.vue'

//引入路由配置文件
import router from './router'

//引入ElementUI组件
import ElementUI from 'element-ui'
//引入ElementUI样式
import 'element-ui/lib/theme-chalk/index.css'

//使用ElementUI
Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,//为vue对象加载路由配置
  render: h => h(App)
})
