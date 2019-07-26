<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="datail(item.id)">
      <img :src="item.img_url" alt />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore()" v-if="flag">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodsList: [],
      flag: true
    };
  },
  created() {
    this.getgoods();
  },
  methods: {
    getgoods() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          console.log(result.body);
          if (result.body.status == 0) {
            // this.goodsList = result.body.message
            this.goodsList = this.goodsList.concat(result.body.message);
          }
          if (result.body.message.length < 10) {
            this.flag = false;
          }
          // console.log(this.goodsList);
        });
    },
    getMore() {
      this.pageindex++;
      this.getgoods();
    },
    datail(id) {
      this.$router.push({ name: "goodsInfo", params: { id: id } });
    }
  }
};
</script>
<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-list .goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 293px;
}
.goods-list .goods-item img {
  width: 100%;
}
.goods-list .goods-item .title {
  font-size: 14px;
}
.goods-list .goods-item .info {
  background-color: #eee;
}
.goods-list .goods-item .info p {
  margin: 0;
  padding: 5px;
}
.goods-list .goods-item .info .price .old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}
.goods-list .goods-item .info .price .now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}
.goods-list .goods-item .info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>