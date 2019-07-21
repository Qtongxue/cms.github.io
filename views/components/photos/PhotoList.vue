<template>
  <div class="mui-content">
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            v-for="item in cates"
            :key="item.id"
            :class="['mui-control-item',item.id ===0 ? 'mui-active' : '']"
            to="#item2mobile"
            data-wid="tab-top-subpage-2.html"
            @click.prevent="getImgList(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photolist">
      <li v-for="item in list" :key="item.id">
        <router-link :to="'/home/photoInfo/'+item.id">
          <img v-lazy="item.img_url" />
          <div class="photoInfo">
            <h1>{{item.title}}</h1>
            <p>{{item.zhaiyao}}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui-master/dist/js/mui.js";
export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getALlCategory();
    this.getImgList(0);
  },
  methods: {
    getALlCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status == 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
          // console.log(this.cates);
          this.$nextTick(() => {
            mui(".mui-scroll-wrapper").scroll({
              deceleration: 0.0005
            });
          });
          // setTimeout(() => {
          //   mui(".mui-scroll-wrapper").scroll({
          //     deceleration: 0.0005
          //   });
          // }, 50);
        }
      });
    },
    getImgList(cateId) {
      this.$http.get("api/getimages/" + cateId).then(result => {
        // console.log(result);
        if (result.body.status == 0) {
          this.list = result.body.message;
        }
      });
    }
  },
  mounted() {
    mui("nav").on("tap", "a", function() {
      mui.openWindow({ url: this.href });
    });
  }
};
</script>
<style>
* {
  touch-action: pan-y;
}
li {
  list-style: none;
}
.photolist {
  margin: 0;
  padding: 0;
}
.photolist li {
  background-color: #ccc;
  box-shadow: 0 0 9px #999;
  margin: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
}
.photolist img {
  width: 100%;
  vertical-align: middle;
}
.photoInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  max-height: 90px;
}
.photoInfo h1 {
  color: #eee;
  font-size: 14px;
}
.photoInfo p {
  font-size: 12px;
  color: #eee;
  margin: 0;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>