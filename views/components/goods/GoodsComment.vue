<template>
  <div>
    <cmtbox :id="this.id"></cmtbox>
  </div>
</template>
<script>
import cmtbox from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: {
    cmtbox
  }
};
</script>
<style>
</style>