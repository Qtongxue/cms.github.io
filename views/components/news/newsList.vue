<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>时间：{{item.add_time}}</span>
              <span>点击次数：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getnewsList();
  },
  methods: {
    getnewsList() {
      this.$http.get("api/getnewslist").then(result => {
        console.log(result);
        if (result.body.status === 0) {
          this.newsList = result.body.message;
        } else {
          Toast("加载列表失败。。。");
        }
      });
    }
  }
};
</script>
<style scoped>
.mui-table-view h1 {
  font-size: 14px;
}
.mui-table-view p {
  display: flex;
  justify-content: space-between;
}
.mui-table-view span {
  font-size: 12px;
}
</style>