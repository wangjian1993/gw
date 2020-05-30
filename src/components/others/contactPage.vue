<template>
  <div class="main">
    <div class="map">
      <el-amap vid="amapDemo" :center="center" :zoom="zoom" class="amap-warper">
        <el-amap-info-window :position="currentWindow.position" :content="currentWindow.content">
        </el-amap-info-window>
        <el-amap-circle :center="circle.center" :radius="circle.radius" :stroke-weight="circle.strokeWeight" :fill-color="circle.fillColor" :fill-opacity="circle.fillOpacity" :stroke-color="circle.strokeColor">
        </el-amap-circle>
        <el-amap-circle-marker :center="circlePoint.center" :radius="circlePoint.radius" :fill-color="circlePoint.fillColor" :fill-opacity="circlePoint.fillOpacity" :stroke-color="circlePoint.strokeColor">
        </el-amap-circle-marker>
      </el-amap>

      <img class="map-img" src="../../assets/img/others/com-info.png">
    </div>

    <div class="container" style="margin-top:50px;">
      <div class="bg-white">

        <div class="row">

          <div class="grid-info">
            <p>品牌代理</p>
            <ul>
              <li>
                联系人：胡先生
              </li>
              <li>
                手机/微信：13632613137
              </li>
              <li>
                邮箱：huwei@booyue.com.cn
              </li>
            </ul>
          </div>

          <div class="grid-info">
            <p>媒体合作</p>
            <ul>
              <li>
                联系人：林女士
              </li>
              <li>
                手机/微信：18696655888
              </li>
              <li>
                邮箱：linyuhan@booyue.com.cn
              </li>
            </ul>
          </div>

        </div>

        <div class="row">

          <div class="grid-info">
            <p>硬件内容合作</p>
            <ul>
              <li>
                如名师、app、课程合作、早教机构/幼儿园等
              </li>
              <li>
                联系人：杨女士
              </li>
              <li>
                手机/微信：13728490694
              </li>
              <li>
                邮箱：yangqianhui@booyue.com.cn
              </li>
            </ul>
          </div>

          <div class="grid-info">
            <p>软件内容合作</p>
            <ul>
              <li>
                如音视频专辑、课程、主播、原创内容授权等
              </li>
              <li>
                联系人：叶女士
              </li>
              <li>
                手机/微信：13699889644
              </li>
              <li>
                邮箱：yerui@booyue.com.cn
              </li>
            </ul>
          </div>

        </div>

        <div class="row">

          <div class="grid-info">
            <p>硬件定制合作</p>
            <ul>
              <li>
                如产品定制、礼品定制、产品合作等
              </li>
              <li>
                联系人：胡先生
              </li>
              <li>
                手机/微信：13632613137
              </li>
              <li>
                邮箱：huwei@booyue.com.cn
              </li>
            </ul>
          </div>

          <!-- <div class="grid-info">
            <p>售后服务</p>
            <ul>
              <li>
                电话：4000-585-959
              </li>
              <li>
                <a href="tencent://message/?uin=1301576369">QQ客服①：1301576369</a>
                <a href="tencent://message/?uin=1301576369" class="bubble"></a>
              </li>
              <li>
                <a href="tencent://message/?uin=2909988422">QQ客服②：2909988422</a>
                <a href="tencent://message/?uin=2909988422" class="bubble"></a>
              </li>
              <li>
                <a href="tencent://message/?uin=1900680283">QQ客服③：1900680283</a>
                <a href="tencent://message/?uin=1900680283" class="bubble"></a>
              </li>
            </ul>
          </div>
 -->
        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {

  data() {
    return {
      zoom: 18,
      center: [113.956535, 22.538131],

      currentWindow: {
        position: [113.957635, 22.538131],
        content: '我在长虹大厦附近>'
      },
      circlePoint: {
        center: [113.957635, 22.538131],
        radius: 10,
        fillOpacity: 1,
        strokeColor: 'rgba(255,255,255,1)',
        fillColor: 'rgba(22,147,255,1)'

      },
      circle: {
        center: [113.957635, 22.538131],
        radius: 25,
        strokeWeight: 1,
        fillOpacity: 0.5,
        strokeColor: 'rgba(22,147,255,1)',
        fillColor: 'rgba(255,255,255,1)'
      }

    }
  }

}
</script>

<style scoped>
.main {
  color: #000;
  font-size: 16px;
  padding-bottom: 50px;
}
.map {
  position: relative;
  height: 600px;
}
.amap-warper {
  height: 100%;
}
.map-img {
  position: absolute;
  top: 25%;
  left: 10%;
}
.grid-info {
  float: left;
  width: 25%;
  margin: 40px 12.5%;
}
.grid-info > p {
  font-size: 18px;
  color: #e60012;
  margin: 24px 0;
}
ul {
  list-style-type: none;
  padding-left: 0;
  display: block;
  white-space: nowrap;
}
ul > li {
  position: relative;
  font-size: 16px;
  margin-bottom: 12px;
  clear: both;
  color: #575757;
}
a {
  color: #575757;
}
.bubble {
  position: absolute;
  background: url(../../assets/img/others/bubble.gif);
  width: 25px;
  height: 24px;
  top: 0;
  left: 200px;
}
</style>
