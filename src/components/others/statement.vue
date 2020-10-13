<template>
  <!--品牌资讯-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li><router-link :to="{ name: 'home' }">首页</router-link></li>
      <li class="active">品牌信息声明</li>
    </ol>

    <div class="bg-white"><img src="../../assets/img/others/starem.jpg" class="banner" alt="" /></div>
  </div>
</template>

<script>
export default {
  computed: {},
  created() {},
  methods: {}
};
</script>

<style scoped>
.bg-white {
  width: 100%;
  height: 100%;
}
.bg-white img {
  width: 100%;
  height: 100%;
}
</style>
