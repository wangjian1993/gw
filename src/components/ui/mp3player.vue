<template>
  <div class="player" :class="[playerShow ? playerShowCls : playerHideCls]" :style="posSty">
    <audio id="music" v-if="audioPlayList.songList" :src="mp3Url" :autoplay="isAudoPlay" @timeupdate="onUpdateTime()" @ended="onEnd()" @canplay="onUpdateTime()"></audio>

    <div class="player-display">
      <div class="up">
        <div class="left">
          <img v-lazy="audioPlayList.cover" :key="audioPlayList.cover" alt />
          <div class="hole"></div>
        </div>

        <div class="right">
          <p class="title" v-if="audioPlayList.songList">{{ audioPlayList.songList[curSongId].txt }}</p>
          <p class="detail">{{ audioPlayList.name }}</p>
        </div>
      </div>

      <div class="clear"></div>

      <div class="down">
        <p class="left">{{ currentTime }}</p>
        <div class="player-bar">
          <img class="bg" src="../../assets/img/content/progress-bg.png" alt />
          <img class="point" :style="{ left: indicatorPosition + '%' }" src="../../assets/img/content/progress-point.png" alt />
          <img class="info" :style="{ width: indicatorPosition + '%' }" src="../../assets/img/content/progress-info.png" alt />
        </div>
        <p class="right">{{ leftTime }}</p>

        <div class="clear"></div>
      </div>

      <a class="player-play" @click="onPlay()">
        <img v-if="isPlaying" src="../../assets/img/content/btn-pause.png" alt />
        <img v-else src="../../assets/img/content/btn-play.png" alt />
      </a>
      <a class="player-pre" @click="onChangeSong('pre')"><img src="../../assets/img/content/btn-pre.png" alt /></a>
      <a class="player-next" @click="onChangeSong('next')"><img src="../../assets/img/content/btn-next.png" alt /></a>

      <a class="player-switch" @click="onSwitch()"><img :src="btnLR.pointer" alt /></a>
      <a class="player-download" href="javascript:void(0)" @click="onDownload()"><img src="../../assets/img/content/btn-download.png" alt /></a>
      <a class="player-pop" @click="onPop()"><img src="../../assets/img/content/btn-list.png" alt /></a>
    </div>

    <transition name="pop-slide-fade">
      <div class="player-list" v-if="isPop">
        <p class="title"><strong>专辑简介</strong></p>
        <p class="detail">{{ audioPlayList.detail }}</p>

        <div class="underline"></div>

        <div class="sub">
          <div class="sel">
            <a class="sel-img" @click="onAllSelect()">
              <img v-if="isSelect.all" src="../../assets/img/content/select-check.png" alt />
              <img v-else src="../../assets/img/content/select-empty.png" alt />
            </a>
          </div>
          <div class="title">
            <p>
              <strong>{{ audioPlayList.name }}</strong>
            </p>
          </div>
          <div class="download">
            <a @click="xunleiDown()" v-if="audioPlayList.isbn == ''">
              <div><img class="download-png" src="../../assets/img/content/xl-download.png" /></div>
            </a>
            <p class="baiduPan" v-else @click="open(audioPlayList.isbn)">百度网盘下载</p>
            <!-- <a @click="onAllDownload()">
              <div v-show="batchDownload.inProgress !== true">
                <img
                  class="download-png"
                  src="../../assets/img/content/batch-download.png"
                  alt
                >
              </div>
              <div
                id="downloading-bg1"
                class="download-group-bg"
                v-show="batchDownload.inProgress === true"
              >
                <div
                  id="downloading-bg2"
                  class="download-progress"
                  :style="{width:(this.batchDownload.current / this.batchDownload.total * 100).toFixed() + '%'}"
                ></div>
              </div>
            </a> -->
          </div>
          <div class="num">
            <p>共{{ audioPlayList.songNum }}首</p>
          </div>
        </div>
        <!-- 下载选择框 -->
        <!-- <p @click="xunleiDown()">迅雷下载</p> -->
        <!-- <p>选择下载方式</p>
            <div class="down-box-type">
              <p> <img
                  src="../../assets/img/icon-1.png"
                  alt=""
                >
                <span>浏览器直接下载</span></p>
               <p> <img
                  src="../../assets/img/icon-2.png"
                  alt=""
                >
                <span>打开迅雷下载</span></p>
            </div> -->
        <div class="song">
          <div class="detailList" ref="detailList" @mousewheel="onMouseScroll()">
            <ul class="left">
              <li v-for="(item, index) in audioPlayList.songList" :key="index">
                <a class="sel-img" @click="onPieceSelect(index)">
                  <img v-if="isSelect.list[index]" src="../../assets/img/content/select-check.png" alt />
                  <img v-else src="../../assets/img/content/select-empty.png" alt />
                </a>
              </li>
            </ul>
            <ul class="mid">
              <li v-for="(item, index) in audioPlayList.songList" :key="index" @click="onChangeSong(index)">{{ item.txt }}</li>
            </ul>
            <ul class="right">
              <li v-for="(item, index) in audioPlayList.songList" :key="index">
                <img src="../../assets/img/content/listen-icon.png" alt />
                {{ item.playCnt }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { checkBrower } from '../../utils';
export default {
  props: ['posSty'],
  data() {
    return {
      downloadDetail: {
        inProgress: false,
        cnt: 0,
        current: 0
      },
      isAudoPlay: false,
      isSelect: {
        all: false, // 是否全选
        list: [], // 打勾以及未打勾
        checkLen: 0 // 打勾的数量
      },
      // UI
      playerShowCls: 'player-transform-show',
      playerHideCls: 'player-transform-hide',
      isPop: false,
      playerShow: false,
      btnLR: {
        pointer: require('../../assets/img/content/arrow-right.png'),
        left: require('../../assets/img/content/arrow-left.png'),
        right: require('../../assets/img/content/arrow-right.png')
      },
      // 滚动
      maxRow: 10,
      curVideoId: 0,
      distance: 55,
      listLen: 0,
      scrollY: 0
    };
  },
  watch: {
    isPlaying(val) {
      if (!this.isAudoPlay) {
        this.isAudoPlay = true;
      }

      try {
        if (!this.playerShow) {
          this.onSwitch();
        }

        if (val) {
          document.getElementById('music').play();
        } else {
          document.getElementById('music').pause();
        }
      } catch (error) {
        // 屏蔽可能的错误
      }
    },
    audioPlayList(val) {
      this.listLen = val.songList.length;
      this.scrollY = -(this.distance * (this.curVideoId < this.maxRow ? 0 : this.listLen - this.curVideoId < this.maxRow ? this.listLen - this.maxRow : this.curVideoId));
      // set false
      this.setSelect(false);
    }
  },
  computed: {
    ...mapGetters([
      // audio player
      'audioPlayList',
      'isPlaying',
      'currentTime',
      'leftTime',
      'indicatorPosition',
      'curSongId',
      'batchDownload'
    ]),
    mp3Url() {
      return this.audioPlayList.songList[this.curSongId].uri;
    },
    scrollData() {
      return this.scrollY + 'px';
    }
  },
  created() {
    this.pause();
    console.log(this.audioPlayList);
    // audio album
    this.$store.dispatch('getAudioAlbumList');
  },
  updated() {
    if (this.batchDownload.inProgress) {
      let val = ((this.batchDownload.current / this.batchDownload.total) * 100).toFixed();
      this.setDownloadProgress(val);
    }
  },
  destroyed() {
    this.stop();
  },
  methods: {
    open(url) {
      let self = this;
      self.$copyText("1234").then(
        res => {
          self.$message({
            message: '提取码复制成功 提取码:1234',
            type: 'success'
          });
        },
        err => {}
      );
      setTimeout(function() {
        // self.dialogVisible = !self.dialogVisible;
        window.open(url, '_blank');
      }, 1000);
    },
    // true/false
    setSelect(bl) {
      this.isSelect.all = bl;
      for (let i = 0; i < this.listLen; ++i) {
        this.isSelect.list[i] = bl;
      }
      this.isSelect.checkLen = bl === true ? this.listLen : 0;
    },
    onAllSelect() {
      this.isSelect.all === true ? this.setSelect(false) : this.setSelect(true);
    },
    onPieceSelect(idx) {
      let result = this.isSelect.list[idx] === true ? false : true;
      this.$set(this.isSelect.list, idx, result);

      let cnt = 0;
      for (let i = 0; i < this.listLen; ++i) {
        if (this.isSelect.list[i] === false) {
          cnt++;
        }
      }
      this.isSelect.checkLen = this.listLen - cnt;
      if (cnt === this.listLen) {
        this.isSelect.all = false;
      }
    },
    onAllDownload() {
      if (this.batchDownload.inProgress) {
        console.log('my');
        return;
      }

      let allList = [];
      for (let i = 0; i < this.listLen; ++i) {
        if (this.isSelect.list[i] === true) {
          let _name = this.audioPlayList.songList[i].txt;
          let _url = this.audioPlayList.songList[i].uri;
          let _arr = _url.split('/');
          let _fileName = _arr[_arr.length - 1];
          //   allList.push({ songName: _name, encodeName: _fileName, onProgressCallback: this.progressCallback.bind(this) });
          allList.push({ songName: _name, encodeName: _fileName });
        }
      }

      let allLen = allList.length;
      if (allLen === 0) {
        this.$message({
          message: '请选择要下载的歌曲!!',
          center: true,
          showClose: true,
          type: 'error'
        });
        return;
      }

      //   this.startDownload();
      this.$store.dispatch('audioAllDownload', allList);
    },
    xunleiDown() {
      let musicList = [];
      for (let i = 0; i < this.listLen; ++i) {
        if (this.isSelect.list[i] === true) {
          let _name = this.audioPlayList.songList[i].txt + '.mp3';
          let _url = this.audioPlayList.songList[i].uri;
          //   allList.push({ songName: _name, encodeName: _fileName, onProgressCallback: this.progressCallback.bind(this) });
          musicList.push({ name: _name, url: _url });
        }
      }
      if (musicList.length == 0) {
        this.$message({
          message: '请选择要下载的歌曲!!',
          center: true,
          showClose: true,
          type: 'error'
        });
        return;
      }
      thunderLink.newTask({
        taskGroupName: this.audioPlayList.name, // 指定任务组名称，将在下载目录中创建同名子文件夹保存所有下载文件。【若不填此项，将不会创建同名子文件夹保存下载文件】
        threadCount: 5, // 指定原始地址线程数【10.1.3及后续版本支持此功能。一般不必填写，但某些下载地址的服务器会限制单个IP的最大同时连接数，例如部分“网盘、在线视频”网站等，此时可将此项数值设为1，从而避免被服务器断开连接】
        tasks: musicList
      });
    },
    startDownload() {
      this.downloadDetail.current = 0;
      this.downloadDetail.inProgress = true;
      this.setDownloadProgress(0);
    },
    progressCallback(e) {
      let percentCompleted = Math.round((e.loaded * 100) / e.total);
      percentCompleted === 100 ? (this.downloadDetail.cnt += 1) : (this.downloadDetail.cnt += 0);
      this.downloadDetail.current = ((this.downloadDetail.cnt / this.isSelect.checkLen) * 100).toFixed();

      this.setDownloadProgress(this.downloadDetail.current);

      if (this.downloadDetail.cnt === this.isSelect.checkLen) {
        this.downloadDetail.cnt = 0;
        this.downloadDetail.current = 0;
        this.downloadDetail.inProgress = false;
        console.log('--- over ---');
      }
    },
    setDownloadProgress(val) {
      let str = val + '%';

      let bg1 = document.getElementById('downloading-bg1');
      bg1.setAttribute('data-beforeDown', str);
      let bg2 = document.getElementById('downloading-bg2');
      bg2.setAttribute('data-beforeDown', str);
    },
    onSwitch() {
      this.playerShow = !this.playerShow;
      this.btnLR.pointer = this.playerShow ? this.btnLR.left : this.btnLR.right;
      if (!this.playerShow) {
        this.isPop = this.playerShow;
      }
    },
    onDownload() {
      let _url = this.mp3Url;
      let _name = this.audioPlayList.songList[this.curSongId].txt;
      let _arr = _url.split('/');
      let _fileName = _arr[_arr.length - 1];

      //   this.$store.dispatch('audioDownload', { songName: _name, encodeName: _fileName });
      //   window.open(_url + '?appKey=A01A6B3988EAC607&type=gw_audio');
      let webInfo = checkBrower();
      console.log('webInfo' + webInfo);
      switch (webInfo) {
        case 'Safari':
        case 'IE':
        case 'FF':
        case 'Edge':
          window.open(_url + '?appKey=A01A6B3988EAC607&type=gw_audio');
          break;
        case 'Chrome':
        case 'Opera':
          this.$store.dispatch('audioDownload', {
            songName: _name,
            encodeName: _fileName
          });
          break;
      }
    },
    onPop() {
      this.isPop = !this.isPop;
    },
    onUpdateTime() {
      try {
        let _curTime = parseInt(document.getElementById('music').currentTime);
        let _duraTime = parseInt(document.getElementById('music').duration);
        this.$store.dispatch('updateTime', {
          currentTime: _curTime,
          duration: _duraTime
        });
      } catch (error) {
        // 屏蔽可能的错误
      }
    },
    onEnd() {
      if (this.audioPlayList.songList.length > 1) {
        this.onChangeSong('next');
      } else {
        this.stop();
      }
    },
    onPlay() {
      event.preventDefault();
      this.isPlaying ? this.pause() : this.play();
    },
    async onChangeSong(select, num = this.audioPlayList.songNum) {
      await this.$store.dispatch('changeSong', { model: select, songNum: num });
      this.play();
    },
    stop() {
      this.pause();
      this.$store.dispatch('updateTime', { currentTime: 0, duration: 0 });
    },
    pause() {
      this.$store.dispatch('setIsPlaying', false);
    },
    play() {
      this.$store.dispatch('setIsPlaying', true);
    },
    onMouseScroll() {
      if (this.listLen > this.maxRow) {
        event.preventDefault();
        let _delta = (event.wheelDelta && (event.wheelDelta > 0 ? 1 : -1)) || (event.detail && (event.detail > 0 ? -1 : 1));

        if (_delta > 0) {
          if (this.scrollY === 0) {
            return;
          }
          this.scrollY += this.distance;
        } else {
          let _overflow = this.listLen - this.maxRow;
          if (this.scrollY === -(this.distance * _overflow)) {
            return;
          }
          this.scrollY -= this.distance;
        }
        this.$refs.detailList.style.top = this.scrollData;
      }
    }
  }
};
</script>

<style scoped>
.player {
  position: absolute;
  top: 100px;
  left: 0;
  width: 756px;
  height: 300px;
  opacity: 0.9;
  background-color: #fff;
  -moz-box-shadow: 0 0 10px #f2f2f2;
  -webkit-box-shadow: 0 0 10px #f2f2f2;
  box-shadow: 0 0 10px #f2f2f2;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.player-transform-show {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}
.player-transform-hide {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform: translateX(-708px);
  transform: translateX(-708px);
}
.player > .container {
  width: 100%;
}
.player-display {
  width: 708px;
}
.player-display > .up {
  margin-top: 32px;
}
.player-display > .up > .left {
  position: relative;
  float: left;
  width: 388px;
  text-align: center;
}
.player-display > .up > .left > .hole {
  position: absolute;
  top: 40%;
  left: 45%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
}
.player-display > .up > .left > img {
  width: 186px;
  height: 186px;
  border-radius: 50%;
}
.player-display > .up > .right {
  float: right;
  width: 320px;
  text-align: center;
}
.player-display > .up > .right > .title {
  font-size: 24px;
  color: #404040;
  margin-top: 0;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.player-display > .up > .right > .detail {
  font-size: 16px;
  color: #929292;
  margin: 0;
}
.player-display > .down {
  position: absolute;
  bottom: 8%;
}
.player-display > .down > .left {
  float: left;
  padding-left: 24px;
  padding-right: 14px;
  margin: 0;
}
.player-display > .down > .right {
  float: right;
  padding-left: 34px;
  padding-right: 14px;
  margin: 0;
}
.player-bar {
  position: relative;
  float: left;
  width: 353px;
  height: 20px;
}
.player-bar > .point {
  position: absolute;
  top: 0;
  /* left: 100%; */
}
.player-bar > .bg {
  position: absolute;
  top: 50%;
  left: 10px;
}
.player-bar > .info {
  position: absolute;
  top: 50%;
  left: 10px;
  height: 4px;
  /* width: 20%; */
}
.player-pre {
  position: absolute;
  top: 43%;
  right: 36%;
  cursor: pointer;
}
.player-play {
  position: absolute;
  top: 40%;
  right: 22%;
  cursor: pointer;
}
.player-next {
  position: absolute;
  top: 43%;
  right: 10%;
  cursor: pointer;
}
.player-switch {
  position: absolute;
  top: 45%;
  right: 2%;
  cursor: pointer;
}
.player-download {
  position: absolute;
  bottom: 10%;
  right: 16%;
  cursor: pointer;
}
.player-pop {
  position: absolute;
  bottom: 10%;
  right: 8%;
  cursor: pointer;
}
.pop-slide-fade-enter-active {
  transition: all 0.3s ease;
}
.pop-slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.pop-slide-fade-enter,
.pop-slide-fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.player-list {
  position: absolute;
  width: 656px;
  top: 316px;
  left: 0;
  padding: 0 50px;
  background-color: #fff;
  -moz-box-shadow: 0 0 10px #f2f2f2;
  -webkit-box-shadow: 0 0 10px #f2f2f2;
  box-shadow: 0 0 10px #f2f2f2;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
.player-list > .title {
  font-size: 18px;
  color: #575757;
  margin-top: 20px;
  margin-bottom: 0;
}
.player-list > .detail {
  font-size: 16px;
  color: #575757;
  margin-top: 24px;
  margin-bottom: 36px;
}
.player-list > .underline {
  border-bottom: 1px dashed #dddddd;
}
.player-list > .sub {
  height: 34px;
  padding: 36px 0 10px 0;
}
.player-list > .sub p {
  padding: 0;
  margin: 0;
}
.player-list > .sub > .sel {
  float: left;
  width: 5%;
  padding: 5px 0;
}
.player-list > .sub > .title {
  font-size: 18px;
  color: #404040;
  width: 55%;
  float: left;
  padding: 7px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.player-list > .sub > .download {
  width: 20%;
  float: left;
  cursor: pointer;
  padding: 7px 10px;
  text-align: center;
  color: #f14250;
}
.player-list > .sub > .download > a {
  display: block;
}
.player-list > .sub > .download > a > .download-group-bg {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #f14250;
  width: 114px;
  height: 34px;
  position: relative;
}
.player-list > .sub > .download > a > .download-group-bg::before {
  content: attr(data-beforeDown);
  position: absolute;
  font-size: 18px;
  top: 8px;
  left: 50px;
  color: #f14250;
  border-radius: 10px;
}
.player-list > .sub > .download > a > .download-group-bg > .download-progress {
  width: 0%;
  height: 34px;
  position: absolute;
  background: #f14250;
  border-radius: 10px;
  overflow: hidden;
}
.player-list > .sub > .download > a > .download-group-bg > .download-progress::before {
  content: attr(data-beforeDown);
  position: absolute;
  top: 8px;
  left: 50px;
  font-size: 18px;
  color: #ffffff;
}
.download-group {
  position: relative;
  display: inline-block;
}
.download-png {
  position: relative;
  width: 100%;
  height: 100%;
}
.player-list > .sub > .num {
  font-size: 18px;
  color: #404040;
  width: 12%;
  float: right;
  padding: 7px 0;
}
.player-list > .song {
  position: relative;
  height: 550px;
  padding-bottom: 15px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.player-list > .song .detailList {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.player-list > .song .left {
  float: left;
  width: 5%;
  padding-top: 5px;
}
.player-list > .song .mid {
  float: left;
  width: 80%;
  font-size: 16px;
}
.player-list > .song .mid > li {
  cursor: pointer;
}
.player-list > .song .right {
  float: right;
  width: 12%;
  font-size: 14px;
}
.player-list > .song ul {
  list-style-type: none;
  padding-left: 0;
  display: block;
  overflow: hidden;
  white-space: nowrap;
}
.player-list > .song ul > li {
  position: relative;
  height: 55px;
  line-height: 55px;
  color: #575757;
  clear: both;
}
.sel-img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
