<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr />

    <!-- 缩略图区域 -->
    <vue-preview :slides="list"></vue-preview>

    <!-- 内容 -->
    <div v-html="photoinfo.content" class="content"></div>
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
import mui from "../../lib/mui-master/dist/js/mui.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: [],
      list: []
    };
  },
  created() {
    this.getimageInfo();
    this.getThumbs();
  },
  mounted() {
    mui("nav").on("tap", "a", function() {
      mui.openWindow({ url: this.href });
    });
  },
  methods: {
    getimageInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status == 0) {
          console.log(result);
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        console.log(result);
        if (result.body.status == 0) {
          this.list = result.body.message;
          this.list.forEach(item => {
            item.w = 600;
            item.h = 400;
            item.msrc = item.src;
          });
        }
      });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style>
.photoinfo-container {
  padding: 3px;
}
.photoinfo-container h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.photoinfo-container .subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.photoinfo-container .content {
  font-size: 13px;
  line-height: 30px;
  text-indent: 2em;
  margin: 0 3px;
}
.my-gallery {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
figure {
  margin: 0 5px;
  width: 30%;
  overflow: hidden;
  border-radius: 10px;
}
figure img {
  width: 100%;
}
</style>