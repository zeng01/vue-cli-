import Vue from 'vue'
import App from './App.vue'
import baseCss from './assets/css/base.css'
import  find from './components/find.vue'
import  myMusic from './components/myMusic.vue'
import  friend from './components/friend.vue'
import  shopping from './components/shopping.vue'
import  musician from './components/musician.vue'
import  download from './components/download.vue'
// 导入vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 1. 定义或者导入组件

// 2. 定义路由
const routes = [
 {path:'/find',component:find},  
 {path:'/myMusic',component:myMusic},
 {path:'/friend',component:friend},
 {path:'/shopping',component:shopping},
 {path:'/musician',component:musician},
 {path:'/download',component:download}
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


Vue.config.productionTip = false

// 实例化Vue
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
