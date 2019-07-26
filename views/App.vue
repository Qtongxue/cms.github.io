<template>
  <div>
    <!-- 顶部header部分 -->
    <mt-header fixed title="黑马程序员"></mt-header>
    <div class="container">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <!-- 路由部分 -->
    <!-- 底部footer部分 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/menber" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge" >0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>
.container {
  padding: 40px 0 50px 0;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
/* .mui-bar-tab .mui-tab-item-zq.mui-active {
color: #007aff;
}
.mui-bar-tab .mui-tab-item-zq {
display: table-cell;
overflow: hidden;
width: 1%;
height: 50px;
text-align: center;
vertical-align: middle;
white-space: nowrap;
text-overflow: ellipsis;
color: #929292;
}
.mui-bar-tab .mui-tab-item-zq .mui-icon {
top: 3px;
width: 24px;
height: 24px;
padding-top: 0;
padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zq .mui-icon~ .mui-tab-label {
font-size: 11px;
display: block;
overflow: hidden;
text-overflow: ellipsis;
} */

</style>