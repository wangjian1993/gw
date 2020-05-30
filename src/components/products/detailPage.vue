<template>
  <!--产品详情-->
  <div class="container" style="padding:50px 0;">
    <div class="row">
      <ol class="breadcrumb">
        <li class="active">产品详情</li>
        <!-- <li>
          <router-link :to="{name: 'productReport', query: { type: type, name: name }}">试用报告</router-link>
        </li> -->
        <li v-if="isShowDownload">
          <router-link :to="{name: 'productDownload', query: { type: type, name: name }}">专属资源下载</router-link>
        </li>
      </ol>
    </div>

    <div class="content">
      <img v-for="(item, index) in proDetailList" :key="index" v-lazy="item.uri" alt="">
      <!-- <el-image v-for="(item, index) in proDetailList" :key="index" :src="item.uri" lazy></el-image> -->
       <!-- <div class="demo-image__lazy">
        <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: '',
      type: '',
       urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
    }
  },
  computed: {
    ...mapGetters([
      'proDetailList'
    ]),
    isShowDownload() {
      return this.type <= 6;
    }
  },
  created() {
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
  },
  mounted() {

    this.$nextTick(() => {
      this.$store.dispatch('getProductDetailByName', this.name);
    });
  },
}
</script>


<style scoped>
.content {
  position: relative;
  width: 100%;
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
  padding-bottom: 50px;
  text-align: center;
  font-size: 0;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li > a {
  color: #575757;
}
.breadcrumb > .active {
  color: #e60012;
}
.breadcrumb > li + li:before {
  content: "|\A0";
}
ol {
  float: right;
  margin-top: 0;
  margin-bottom: 10px;
}
</style>

