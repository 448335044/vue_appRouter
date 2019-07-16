/**
 * Created by BO on 2019/6/26.
 */
import Vue from 'vue'
import App from './App.vue'

/*导入mui样式表*/
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
/*引入mint  注册成标签（全局）*/
import { Header ,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

/*1.1导入路由的包*/
import VueRouter from 'vue-router'
/*1.2 安装路由*/
Vue.use(VueRouter)

/*1.3 导入自己的router。js路由模块*/
import router from './router.js'

/*2.1 导入resource*/
import VueSourse from 'vue-resource'
/*2.2 安装resource*/
Vue.use(VueSourse)


new Vue({
  el:"#app",
  components:{
    App
  },
  template:'<App/>',
  /*render: c => c(App)*/
  /*1.4 挂载路由对象到VM实例上*/
  router
})
