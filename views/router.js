import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
//创建路由对象
export default new VueRouter({
    routes: [
        { path: "/", component: HomeContainer },
        { path: "/home", component: HomeContainer },
        { path: "/menber", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer },

    ],
    linkActiveClass: "mui-active"
})

