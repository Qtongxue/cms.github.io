//入口文键
import Vue from 'vue'

//手动安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = "http://www.liulongbin.top:3005"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import './lib/mui-master/dist/css/mui.min.css'

import './lib/mui-master/examples/hello-mui/css/icons-extra.css'

//按需导入mint-ui中的组件
// import { Header, Swipe, SwipeItem, Button ,Lazyload } from "mint-ui"
// Vue.component(Header.name, Header)
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
//导入APP根组件
import app from "./App.vue"

//过滤器
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:SS") {
    return moment(dataStr).format(pattern)
})

//缩略图
import vuePreview from "vue-preview"
Vue.use(vuePreview)

//导入路由
import router from './router.js'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
