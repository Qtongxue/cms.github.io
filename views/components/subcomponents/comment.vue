<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入要说的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComments">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      msg: "",
      comments: []
    };
  },
  created() {
    this.getComments();
  },
  props: ["id"],
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          console.log(result.body);
          if (result.body.status === 0) {
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComments() {
      this.$http
        .post("api/postcomment/" + this.id, { content: this.msg.trim() })
        .then(result => {
          if (result.body.status === 0) {
            let info = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg
            };
            this.comments.unshift(info);
            this.msg = "";
          }
        });
    }
  }
};
</script>
<style scoped>
.cmt-container h3 {
  text-align: center;
  font-size: 18px;
}
.cmt-container textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-container .cmt-list {
  margin: 5px 0;
}
.cmt-container .cmt-item {
  font-size: 13px;
}
.cmt-container .cmt-title {
  line-height: 30px;
  background-color: #ccc;
}
.cmt-container .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>
