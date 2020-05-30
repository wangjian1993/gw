<<<<<<< HEAD
<template>
  <!--内容详情-->
  <div style="position:relative;">
    <div class="container" style="padding-top:50px;">
      <div class="content-top bg-white">
        <div class="title-type clear" :class="{ active: index === contentData.titleId }" v-for="(item, index) in conTitleList" :key="index" @click="onTypeChange(index)">
          <img v-lazy="item.uri" alt="" />
          <p>{{ item.txt }}内容</p>
        </div>
      </div>

      <div class="content">
        <div class="row">
          <div class="nav">
            <div class="left">{{ conTitleList[contentData.titleId].txt }}类型</div>

            <div class="mid">
              <ul>
                <li :class="{ active: contentData.tagId === index }" v-for="(item, index) in curTagList" :key="index" @click="onTagChange(index)">{{ item.txt }}</li>
              </ul>
            </div>

            <div class="right" v-if="contentData.tagId != 7">
              <ul>
                <li :class="{ active: contentData.sortId === index }" v-for="(item, index) in conSortList" :key="index" @click="onSortChange(index)">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row" v-if="conResList.length > 0 && contentData.tagId != 7">
          <div class="album-icon" :class="{ clearFix: index % 5 === 0 }" v-for="(item, index) in loopPage" :key="index">
            <div class="album-img" :class="albumAutoH" @click="onPlayAlbum(conResList[index + ptrList[pageList.curPage - 1]].albumId)">
              <img v-lazy="conResList[index + ptrList[pageList.curPage - 1]].uri" :key="conResList[index + ptrList[pageList.curPage - 1]].uri" class="banner" alt="" />
              <img src="../../assets/img/content/cover_play.png" class="cover" alt="" />
            </div>
            <p class="album-sub-1">{{ conResList[index + ptrList[pageList.curPage - 1]].title }}</p>
            <p class="album-sub-2">{{ conResList[index + ptrList[pageList.curPage - 1]].song }}</p>
          </div>
        </div>
        <div class="click-content" v-else>
          <div class="album-icon" :class="{ clearFix: index % 5 === 0 }" v-for="(item, index) in booksList" :key="index">
            <div class="album-img" :class="albumAutoH" @click="booksDown(index)">
              <img v-lazy="booksImg(item.id)" :key="booksImg(item.id)" class="banner" alt="" />
              <img src="../../assets/img/content/cover_play.png" class="cover" alt="" />
            </div>
            <p class="album-sub-1">{{ item.name }}</p>
            <p class="album-sub-2">{{ item.count }}</p>
          </div>
        </div>
        <div class="row" v-if="contentData.tagId != 7">
          <pagination style="text-align:center;" v-model="pageList" :curPage="pageList.curPage" :pageItem="pageList.pageItem" :totalPage="pageList.totalPage"></pagination>
        </div>
        <el-dialog :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
          <div class="books-content">
            <div class="books-content-top">
              <div class="books-img">
                <img :src="booksImg(actionList.id)" alt="" />
                <img src="../../assets/img/content/guangpan.png" alt="" />
              </div>
              <div class="books-title">
                <p>{{ actionList.name }}</p>
                <p>{{ actionList.count }}</p>
                <p>简介:{{ actionList.introduce }}</p>
              </div>
            </div>
            <div class="books-down">
              <p>下载地址</p>
              <p @click="downUrl(actionList.down, actionList.code)">{{ actionList.down }}</p>
            </div>
            <div class="books-list">
              <p>绘本列表</p>
              <ul>
                <li v-for="(item, index) in actionList.list">
                  <span>{{ index + 1 }}</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>

    <audio-player :posSty="posSty"></audio-player>

    <div class="qr">
      <img src="../../assets/img/content/wx-qr.png" alt="" />
      <p>想要批量下载？</p>
      <p>用APP来体验吧</p>
      <p>面向0-6岁孩子</p>
      <p>提供教育资源服务</p>
    </div>
  </div>
</template>

<script>
import Pagination from '../ui/pagination';
import AudioPlayer from '../ui/mp3player';
import { mapGetters } from 'vuex';
import books from '../../assets/content.json';

export default {
  components: {
    Pagination,
    AudioPlayer
  },
  data() {
    return {
      posSty: {
        top: '300px',
        left: '0'
      },
      // 分页
      pageList: {
        curPage: 1,
        pageItem: 10,
        totalPage: 13
      },
      perPage: 20,
      extra: 0,
      ptrList: [],
      booksList: [],

      // 导航tag
      curTagList: [],
      actionList: {
        down: '',
        name: '',
        introduce: '',
        count: '',
        list: ''
      },
      actionIndex: 0,

      preAlbumId: 1028,
      dialogVisible: false
    };
  },
  created() {
    this.booksList = books.books;
    if (this.conResList.length === 0) {
      this.reqData(0, { titleId: 0, tagId: 0, sortId: 0 }, { tagId: 0, sortId: 0 });
    }
    // tag
    this.curTagList = this.contentData.titleId === 0 ? this.conAudioTagList : this.conVideoTagList;
  },
  watch: {
    contentData() {
      this.curTagList = this.contentData.titleId === 0 ? this.conAudioTagList : this.conVideoTagList;
    }
  },
  computed: {
    ...mapGetters([
      'contentData',
      'conResList',

      /*************** */
      'conTitleList',
      'conAudioTagList',
      'conVideoTagList',
      'conSortList'
    ]),
    loopPage() {
      // 分页
      this.ptrList = [];
      let pLen = this.conResList.length;
      let len = Math.ceil(pLen / this.perPage);
      for (let i = 0; i < len; ++i) {
        this.ptrList.push(i * this.perPage);
      }
      this.extra = pLen % this.perPage;
      this.pageList.totalPage = len;

      let tmp = this.extra;
      if (tmp === 0) {
        tmp = this.perPage;
      }
      return this.pageList.curPage != this.pageList.totalPage ? this.perPage : tmp;
    },
    albumAutoH() {
      return {
        'album-img-audio-height': this.contentData.titleId === 0,
        'album-img-video-height': this.contentData.titleId === 1
      };
    }
  },
  methods: {
    booksImg(id) {
      // return require('../../assets/img/books/' + (index + 1) + '.jpg');
      return 'http://cloud.alilo.com.cn/down/books/' + id + '.jpg';
    },
    handleClose(done) {
      this.dialogVisible = !this.dialogVisible;
    },
    downUrl(url, code) {
      let self = this;
      let downUrl = url.split('（');
      console.log(downUrl);
      console.log(code);
      self.$copyText(code).then(
        res => {
          self.$message({
            message: '提取码复制成功',
            type: 'success'
          });
        },
        err => {}
      );
      setTimeout(function() {
        // self.dialogVisible = !self.dialogVisible;
        window.open(downUrl[0].trim(), '_blank');
      }, 1000);
    },
    booksDown(index) {
      this.dialogVisible = true;
      this.actionIndex = index;
      let data = this.booksList[index];
      try {
        data.list = data.list.split(',');
      } catch (e) {
        //TODO handle the exception
      }
      this.actionList = data;
    },
    onTypeChange(index) {
      if (this.contentData.titleId === index) {
        return;
      }
      console.log("点击====")
      this.reqData(index, { titleId: index, tagId: 0, sortId: 0 }, { tagId: 0, sortId: 0 });
    },
    onTagChange(index) {
      if (this.contentData.tagId === index) {
        return;
      }
      let _titleId = this.contentData.titleId;

      this.reqData(_titleId, { titleId: _titleId, tagId: index, sortId: 0 }, { tagId: index, sortId: 0 });
    },
    onSortChange(index) {
      if (this.contentData.sortId === index) {
        return;
      }
      let _titleId = this.contentData.titleId;
      let _tagId = this.contentData.tagId;

      this.reqData(_titleId, { titleId: _titleId, tagId: _tagId, sortId: index }, { tagId: _tagId, sortId: index });
    },
    onPlayAlbum(id) {
      if (this.contentData.titleId === 0) {
        if (this.preAlbumId === id) {
          return;
        }
        this.preAlbumId = id;
        this.stop();
        this.$store.dispatch('getAudioAlbumList', id).then(() => {
          this.play();
        });
      } else {
        // window.open('/static/video.html?v_id=' + id + '&episode=0', '_blank');// dev
        window.open('static/video.html?v_id=' + id + '&episode=0', '_blank'); // pro
      }
    },
    stop() {
      this.pause();
      this.$store.dispatch('updateTime', { currentTime: 0, duration: 0 });
      this.$store.dispatch('changeSong', { model: 0, songNum: 1 });
    },
    pause() {
      this.$store.dispatch('setIsPlaying', false);
    },
    play() {
      this.$store.dispatch('setIsPlaying', true);
    },
    // 请求store
    reqData(reqId, stateData, listData) {
      this.pageList.curPage = 1;

      this.$store.dispatch('setContentData', stateData);

      if (reqId === 0) {
        this.$store.dispatch('getConAudioList', listData);
      } else {
        this.$store.dispatch('getConVideoList', listData);
      }
    }
  }
};
</script>

<style scoped>
.content-top {
  width: 100%;
  height: 250px;
  margin-bottom: 50px;
}
.content {
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
  padding-bottom: 50px;
}
.title-type {
  float: left;
  text-align: center;
  margin: 20px 350px;
  cursor: pointer;
}
.title-type:first-child {
  margin-right: 98px;
}
.title-type:last-child {
  margin-left: 98px;
}
.title-type p {
  margin-top: 14px;
  margin-bottom: 0;
  font-size: 18px;
  color: #404040;
}
.content-top > .active p {
  color: #e60012;
}
.nav {
  float: left;
  width: 100%;
  margin-bottom: 10px;
}
.nav > .left {
  float: left;
  font-size: 24px;
  color: #404040;
}
.nav > .mid {
  float: left;
}
.nav > .mid > ul {
  margin-left: 32px;
}
.nav > .mid > ul > li {
  height: 28px;
  line-height: 28px;
  margin: 5px 10px;
  padding: 0 10px;
  text-align: center;
  border-radius: 12px;
}
.nav > .mid > ul > .active {
  color: #fff;
  background: #e60012;
  border: 1px solid #e60012;
}
.nav > .right {
  float: right;
}
.nav > .right > ul > li {
  width: 60px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #f6f6f6;
}
.nav > .right > ul > .active {
  color: #e60012;
  border: 1px solid #e60012;
}
.nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.nav ul > li {
  float: left;
  color: #575757;
  font-size: 16px;
  line-height: 36px;
  cursor: pointer;
}
.album-icon {
  position: relative;
  float: left;
  width: 232px;
  margin: 20px 4px;
}
.album-icon > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.album-img {
  cursor: pointer;
  overflow: hidden;
  min-height: 236px;
}
.album-img-audio-height {
  height: 236px;
}
.album-img-video-height {
  height: 352px;
}
.album-img > .cover {
  position: absolute;
  top: 30%;
  left: 40%;
  width: 24%;
  opacity: 0;
}
.album-img .banner {
  width: 100%;
  height: 100%;
  background: #fff;
}
.album-img:hover .banner {
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transform: scale(1.15, 1.15);
  -webkit-transform: scale(1.15, 1.15);
  -ms-transform: scale(1.15, 1.15);
  -moz-transform: scale(1.15, 1.15);
  opacity: 0.6;
}
.album-img:hover .cover {
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transform: scale(1.15, 1.15);
  -webkit-transform: scale(1.15, 1.15);
  -ms-transform: scale(1.15, 1.15);
  -moz-transform: scale(1.15, 1.15);
  opacity: 1;
}
.album-sub-1 {
  font-size: 20px;
  color: #404040;
  margin-top: 20px;
  margin-bottom: 0;
}
.album-sub-2 {
  color: #929292;
  margin-top: 8px;
  margin-bottom: 0;
}
.clearFix {
  clear: both;
}
.qr {
  position: fixed;
  right: 30px;
  bottom: 200px;
}
.qr > p {
  margin: 0;
  font-size: 16px;
  color: #575757;
  text-align: center;
}
.click-content-list {
  width: 100%;
}
.click-content-list ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.click-content-list ul li {
  width: 50%;
  list-style: none;
  display: flex;
  padding: 10px 0;
}
.content-list-img {
  width: 100px;
  height: 100px;
}
.content-list-img img {
  width: 100%;
  height: 100%;
}
.content-list-text {
  padding-left: 10px;
}
.books-content-top {
  width: 100%;
  display: flex;
  border-bottom: solid 1px #eaeaea;
}
.books-img {
  width: 232px;
  height: 232px;
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  margin-bottom: 40px;
}
.books-content img:nth-of-type(1) {
  width: 232px;
  height: 232px;
  z-index: 1000;
  background: #fff;
}
.books-content img:nth-of-type(2) {
  width: 180px;
  height: 180px;
  margin-left: -150px;
}
.books-title {
  padding-left: 62px;
}
.books-title p {
  margin: 0;
  font-family: MicrosoftYaHei;
}
.books-title p:nth-of-type(1) {
  font-size: 32px;
  color: #404040;
  padding-top: 20px;
}
.books-title p:nth-of-type(2) {
  font-size: 16px;
  color: #929292;
  padding-top: 5px;
}
.books-title p:nth-of-type(3) {
  font-size: 16px;
  color: #404040;
  padding-top: 20px;
}
.books-down {
  color: #404040;
  padding: 40px;
  border-bottom: solid 1px #eaeaea;
}
.books-down p:nth-of-type(1) {
  font-size: 24px;
  margin: 0;
}
.books-down p:nth-of-type(2) {
  font-size: 18px;
  cursor: pointer;
  color: #007aff;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.books-down p:nth-of-type(2):hover {
  border-bottom: 1px #007aff solid;
}
.books-list {
  padding: 0 40px;
  margin-top: 40px;
}
.books-list > p {
  font-size: 24px;
  color: #404040;
  margin: 0;
}
.books-list ul {
  margin: 0;
  padding: 0;
  margin-top: 10px;
}
.books-list ul li {
  list-style: none;
  padding: 2px 0;
}
.books-list ul li span:nth-of-type(1) {
  display: inline-block;
  width: 40px;
  font-size: 18px;
  color: #929292;
}
.books-list ul li span:nth-of-type(2) {
  font-size: 18px;
  color: #404040;
}
</style>
=======
<template>
  <!--内容详情-->
  <div style="position:relative;">
    <div class="container" style="padding-top:50px;">
      <div class="content-top bg-white">
        <div class="title-type clear" :class="{'active':index === contentData.titleId}" v-for="(item, index) in conTitleList" :key="index" @click="onTypeChange(index)">
          <img v-lazy="item.uri" alt="">
          <p>{{item.txt}}内容</p>
        </div>

      </div>

      <div class="content">

        <div class="row">
          <div class="nav">
            <div class="left">
              {{conTitleList[contentData.titleId].txt}}类型
            </div>

            <div class="mid">
              <ul>
                <li :class="{'active':contentData.tagId === index}" v-for="(item, index) in curTagList" :key="index" @click="onTagChange(index)">{{item.txt}}</li>
              </ul>
            </div>

            <div class="right">
              <ul>
                <li :class="{'active':contentData.sortId === index}" v-for="(item, index) in conSortList" :key="index" @click="onSortChange(index)">
                  {{item}}
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="row" v-if="conResList.length > 0">
          <div class="album-icon" :class="{'clearFix': index % 5 === 0}" v-for="(item, index) in loopPage" :key="index">
            <div class="album-img" :class="albumAutoH" @click="onPlayAlbum(conResList[index + ptrList[pageList.curPage - 1]].albumId)">
              <img v-lazy="conResList[index + ptrList[pageList.curPage - 1]].uri" :key="conResList[index + ptrList[pageList.curPage - 1]].uri" class="banner" alt="">
              <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
            </div>
            <p class="album-sub-1">{{conResList[index + ptrList[pageList.curPage - 1]].title}}</p>
            <p class="album-sub-2">{{conResList[index + ptrList[pageList.curPage - 1]].song}}</p>
          </div>

        </div>

        <div class="row">
          <pagination style="text-align:center;" v-model="pageList" :curPage=pageList.curPage :pageItem=pageList.pageItem :totalPage=pageList.totalPage></pagination>
        </div>

      </div>
    </div>

    <audio-player :posSty="posSty"></audio-player>

    <div class="qr">
      <img src="../../assets/img/content/wx-qr.png" alt="">
      <p>想要批量下载？</p>
      <p>用APP来体验吧</p>
      <p>面向0-6岁孩子</p>
      <p>提供教育资源服务</p>
    </div>

  </div>
</template>

<script>
import Pagination from '../ui/pagination'
import AudioPlayer from '../ui/mp3player'
import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination, AudioPlayer
  },
  data() {
    return {
      posSty: {
        top: '300px',
        left: '0'
      },
      // 分页
      pageList: {
        curPage: 1,
        pageItem: 10,
        totalPage: 13
      },
      perPage: 20,
      extra: 0,
      ptrList: [],

      // 导航tag
      curTagList: [],


      preAlbumId: 1028
    }
  },
  created() {
    if (this.conResList.length === 0) {
      this.reqData(0, { titleId: 0, tagId: 0, sortId: 0 }, { tagId: 0, sortId: 0 });
    }

    // tag
    this.curTagList = this.contentData.titleId === 0 ? this.conAudioTagList : this.conVideoTagList;
  },
  watch: {
    contentData() {
      this.curTagList = this.contentData.titleId === 0 ? this.conAudioTagList : this.conVideoTagList;
    }
  },
  computed: {
    ...mapGetters([
      'contentData',
      'conResList',

      /*************** */
      'conTitleList',
      'conAudioTagList',
      'conVideoTagList',
      'conSortList'
    ]),
    loopPage() {
      // 分页
      this.ptrList = [];
      let pLen = this.conResList.length;
      let len = Math.ceil(pLen / this.perPage);
      for (let i = 0; i < len; ++i) {
        this.ptrList.push(i * this.perPage);
      }
      this.extra = pLen % this.perPage;
      this.pageList.totalPage = len;

      let tmp = this.extra;
      if (tmp === 0) {
        tmp = this.perPage;
      }
      return this.pageList.curPage != this.pageList.totalPage ? this.perPage : tmp;
    },
    albumAutoH() {
      return {
        'album-img-audio-height': this.contentData.titleId === 0,
        'album-img-video-height': this.contentData.titleId === 1
      }
    }
  },
  methods: {
    onTypeChange(index) {
      if (this.contentData.titleId === index) {
        return;
      }

      this.reqData(index, { titleId: index, tagId: 0, sortId: 0 }, { tagId: 0, sortId: 0 });
    },
    onTagChange(index) {
      if (this.contentData.tagId === index) {
        return;
      }
      let _titleId = this.contentData.titleId;

      this.reqData(_titleId, { titleId: _titleId, tagId: index, sortId: 0 }, { tagId: index, sortId: 0 });
    },
    onSortChange(index) {
      if (this.contentData.sortId === index) {
        return;
      }
      let _titleId = this.contentData.titleId;
      let _tagId = this.contentData.tagId;

      this.reqData(_titleId, { titleId: _titleId, tagId: _tagId, sortId: index }, { tagId: _tagId, sortId: index });
    },
    onPlayAlbum(id) {
      if (this.contentData.titleId === 0) {
        if (this.preAlbumId === id) {
          return;
        }
        this.preAlbumId = id;
        this.stop();
        this.$store.dispatch('getAudioAlbumList', id).then(() => {
          this.play();
        });
      } else {
        // window.open('/static/video.html?v_id=' + id + '&episode=0', '_blank');// dev
        window.open('static/video.html?v_id=' + id + '&episode=0', '_blank');// pro
      }
    },
    stop() {
      this.pause();
      this.$store.dispatch('updateTime', { currentTime: 0, duration: 0 });
      this.$store.dispatch('changeSong', { model: 0, songNum: 1 });
    },
    pause() {
      this.$store.dispatch('setIsPlaying', false);
    },
    play() {
      this.$store.dispatch('setIsPlaying', true);
    },
    // 请求store
    reqData(reqId, stateData, listData) {
      this.pageList.curPage = 1;

      this.$store.dispatch('setContentData', stateData);

      if (reqId === 0) {
        this.$store.dispatch('getConAudioList', listData);
      }
      else {
        this.$store.dispatch('getConVideoList', listData);
      }
    },
  }
}
</script>

<style scoped>
.content-top {
  width: 100%;
  height: 250px;
  margin-bottom: 50px;
}
.content {
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
  padding-bottom: 50px;
}
.title-type {
  float: left;
  text-align: center;
  margin: 20px 350px;
  cursor: pointer;
}
.title-type:first-child {
  margin-right: 98px;
}
.title-type:last-child {
  margin-left: 98px;
}
.title-type p {
  margin-top: 14px;
  margin-bottom: 0;
  font-size: 18px;
  color: #404040;
}
.content-top > .active p {
  color: #e60012;
}
.nav {
  float: left;
  width: 100%;
  margin-bottom: 10px;
}
.nav > .left {
  float: left;
  font-size: 24px;
  color: #404040;
}
.nav > .mid {
  float: left;
}
.nav > .mid > ul {
  margin-left: 32px;
}
.nav > .mid > ul > li {
  height: 28px;
  line-height: 28px;
  margin: 5px 10px;
  padding: 0 10px;
  text-align: center;
  border-radius: 12px;
}
.nav > .mid > ul > .active {
  color: #fff;
  background: #e60012;
  border: 1px solid #e60012;
}
.nav > .right {
  float: right;
}
.nav > .right > ul > li {
  width: 60px;
  font-size: 18px;
  text-align: center;
  border: 1px solid #f6f6f6;
}
.nav > .right > ul > .active {
  color: #e60012;
  border: 1px solid #e60012;
}
.nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.nav ul > li {
  float: left;
  color: #575757;
  font-size: 16px;
  line-height: 36px;
  cursor: pointer;
}
.album-icon {
  position: relative;
  float: left;
  width: 232px;
  margin: 20px 4px;
}
.album-icon > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.album-img {
  cursor: pointer;
  overflow: hidden;
  min-height: 236px;
}
.album-img-audio-height {
  height: 236px;
}
.album-img-video-height {
  height: 352px;
}
.album-img > .cover {
  position: absolute;
  top: 30%;
  left: 40%;
  width: 24%;
  opacity: 0;
}
.album-img .banner {
  width: 100%;
  height: 100%;
}
.album-img:hover .banner {
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transform: scale(1.15, 1.15);
  -webkit-transform: scale(1.15, 1.15);
  -ms-transform: scale(1.15, 1.15);
  -moz-transform: scale(1.15, 1.15);
  opacity: 0.6;
}
.album-img:hover .cover {
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transform: scale(1.15, 1.15);
  -webkit-transform: scale(1.15, 1.15);
  -ms-transform: scale(1.15, 1.15);
  -moz-transform: scale(1.15, 1.15);
  opacity: 1;
}
.album-sub-1 {
  font-size: 20px;
  color: #404040;
  margin-top: 20px;
  margin-bottom: 0;
}
.album-sub-2 {
  color: #929292;
  margin-top: 8px;
  margin-bottom: 0;
}
.clearFix {
  clear: both;
}
.qr {
  position: fixed;
  right: 30px;
  bottom: 200px;
}
.qr > p {
  margin: 0;
  font-size: 16px;
  color: #575757;
  text-align: center;
}
</style>

>>>>>>> a827187f5e6d0753c62a8b21147968a59880e1cc
