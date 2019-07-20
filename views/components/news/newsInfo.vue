<template>
  <div class="newsinfo-container">
    <div class="mui-media-body">
      <h1>{{newsInfo.title}}</h1>
      <p class="mui-ellipsis">
        <span>时间：{{newsInfo.add_time | dateFormat}}</span>
        <span>点击次数：{{newsInfo.click}}次</span>
      </p>
      <hr />
    </div>
    <div v-html="newsInfo.content" class="content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import comment from  "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.getnews();
  },
  methods: {
    getnews() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        console.log(result);
        if (result.body.status === 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("失败");
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style>
.newsinfo-container {
  padding: 0 4px;
}
.newsinfo-container h1 {
  font-size: 16px;
  text-align: center;
  margin: 15px 0;
  color: red;
}
.newsinfo-container .mui-ellipsis {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.newsinfo-container .content img {
  width: 100%;
}
</style>