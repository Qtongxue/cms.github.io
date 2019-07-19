//入口文键
import Vue from 'vue'

//手动安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import './lib/mui-master/dist/css/mui.min.css'

import './lib/mui-master/examples/hello-mui/css/icons-extra.css'

//按需导入mint-ui中的组件
import { Header, Swipe, SwipeItem } from "mint-ui"
Vue.component(Header.name, Header)
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入APP根组件
import app from "./App.vue"

//导入路由
import router from './router.js'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
