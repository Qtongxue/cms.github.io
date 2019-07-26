<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperlist" :key="item.id">
        <img :src="item.img" alt :class="{'full':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["swiperlist", "isfull"]
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
img {
  height: 100%;
}
.full {
  width: 100%;
}
.mint-swipe-item{
    text-align: center
}
</style>
