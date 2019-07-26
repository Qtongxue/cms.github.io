import VueRouter from "vue-router";

//导入对应的路由组件
import HomeContainer from "./components/HomeContainer.vue";
import MemberContainer from "./components/MemberContainer.vue";
import ShopcarContainer from "./components/ShopcarContainer.vue";
import SearchContainer from "./components/SearchContainer.vue";
import newsList from "./components/news/newsList.vue";
import newsInfo from "./components/news/newsInfo.vue";
import PhotoList from "./components/photos/PhotoList.vue";
import PhotoInfo from "./components/photos/PhotoInfo.vue";
import GoodsList from "./components/goods/GoodsList.vue";
import GoodsInfo from "./components/goods/GoodsInfo.vue";
import GoodsDesc from "./components/goods/GoodsDesc.vue";
import GoodsComment from "./components/goods/GoodsComment.vue"

//创建路由对象
export default new VueRouter({
  routes: [
    { path: "/", component: HomeContainer },
    { path: "/home", component: HomeContainer },
    { path: "/menber", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer },
    { path: "/home/newsList", component: newsList },
    { path: "/home/newsInfo/:id", component: newsInfo },
    { path: "/home/photoList", component: PhotoList },
    { path: "/home/photoInfo/:id", component: PhotoInfo },
    { path: "/home/goodsList", component: GoodsList },
    { path: "/home/goodsInfo/:id", component: GoodsInfo,name:"goodsInfo"},
    { path: "/home/goodsDesc/:id", component: GoodsDesc,name:"goodsdesc"},
    { path: "/home/goodsComment/:id", component: GoodsComment,name:"goodscomment"}


  ],
  linkActiveClass: "mui-active"
});
