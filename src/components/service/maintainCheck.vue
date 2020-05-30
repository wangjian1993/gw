<template>
  <!--维修查询-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li><router-link :to="{ name: 'service' }">服务</router-link></li>
      <li class="active">维修查询</li>
    </ol>

    <div class="content bg-white">
      <div class="row">
        <div class="search-left"><input type="text" class="input-content" placeholder="请输入手机号/快递单号查询" v-model="inputTxt" /></div>

        <div class="search-right">
          <img src="../../assets/img/service/search-icon.png" alt="" />
          <button class="btn btn-search" @click="onSearch()">查询</button>
        </div>
      </div>

      <div class="row tips-info" v-if="isError">{{ resultInfo }}</div>
      <div class="row tips-info-blank" v-else></div>

      <div v-show="isResult">
        <div class="row result-info">
          <div class="dividing-line"><span>查询结果</span></div>
        </div>

        <div class="row result-content" v-for="(item, index) in orderList" :key="index">
          <div class="result-left">
            <ul>
              <li>快递公司：{{ item.inExpressName }}</li>
              <li>快递单号：{{ item.inExpressId }}</li>
              <li>回寄快递公司：{{ item.outExpressName }}</li>
              <li>回寄单号：{{ item.outExpressId }}</li>
              <li>系统反馈：{{ item.msgDetail }}</li>
              <li v-if="item.result == 2 && item.commentList != ''">
                维修评价:
                <p>
                  <span>产品评价:</span>
                  <el-rate v-model="item.commentList.productStart" disabled show-score text-color="#ff9900"></el-rate>
                </p>
                <p>
                  <span>体验评价:</span>
                  <el-rate v-model="item.commentList.serviceStart" disabled show-score text-color="#ff9900"></el-rate>
                </p>
                <span>意见以及建议:</span>
                <p>{{ item.commentList.content }}</p>
              </li>
            </ul>
          </div>

          <div class="result-right">
            <div class="box-card" :class="item.msgStyle">{{ item.msg }}</div>
            <div class="box-comment" @click="commentClick(item.id)" v-if="item.result == 2 && item.commentList == ''">评价</div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="售后维修评价" :visible.sync="dialogFormVisible" center :before-close="closeImport" :close-on-click-modal="false">
      <div>
        <p>服务评价</p>
        <el-rate v-model="comment1" show-text :texts="commentText"></el-rate>
      </div>
      <div>
        <p>产品评价</p>
        <el-rate v-model="comment2" show-text :texts="commentText"></el-rate>
      </div>
      <div>
        <p>意见以及建议</p>
        <el-input type="textarea" :rows="2" maxlength="50" show-word-limit placeholder="请输入内容" v-model="textarea"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeImport">取 消</el-button>
        <el-button type="primary" @click="comentSbumit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { maintainApi } from '../../api/index';

export default {
  name: 'maintainCheck',

  data() {
    return {
      inputTxt: '',
      isError: false,
      resultInfo: '',
      isResult: false,
      orderID: -1,
      dialogFormVisible: false,
      textarea: '',
      commentText: ['极差', '失望', '一般', '满意', '很满意'],
      form: {
        name: ''
      },
      comment1: null,
      comment2: null,
      orderList: [
        {
          inExpressName: '', // 快递公司
          inExpressId: -1, // 快递单号
          outExpressName: '', // 回寄快递公司
          outExpressId: -1, // 回寄快递单号
          msg: '', // 信息
          msgDetail: '', // 详情信息
          msgStyle: '' // 信息样式
        }
      ],
      expressObj: {
        2: '顺丰',
        3: '申通',
        4: '圆通',
        5: '中通',
        6: '韵达',
        7: '百世汇通',
        8: '宅急送',
        9: 'EMS',
        10: '天天',
        11: '全峰',
        12: '速尔',
        13: '优速',
        14: '德邦',
        15: '国通',
        16: '万象',
        17: '邮政',
        18: '快捷',
        19: '其它'
      }
    };
  },

  methods: {
    closeImport() {
      this.comment1 = 0;
      this.comment2 = 0;
      this.textarea = '';
      this.dialogFormVisible = false;
    },
    comentSbumit() {
      if (this.comment1 == 0) {
        this.$message({
          message: '请您对我们的服务进行评分!',
          type: 'warning'
        });
        return;
      }
      if (this.comment2 == 0) {
        this.$message({
          message: '请您对我们的产品进行评分!',
          type: 'warning'
        });
        return;
      }
      let param = {
        orderId: this.orderID,
        productStart: this.comment2,
        serviceStart: this.comment1,
        content: this.textarea
      };
      maintainApi
        .submit(param)
        .then(res => {
          console.log(res.ret);
          if (res.ret == '1') {
            this.$message({
              message: '感谢您!评价成功!',
              type: 'success'
            });
            this.dialogFormVisible = false;
            this.onSearch();
            this.comment1 = 0;
            this.comment2 = 0;
            this.textarea = '';
          }
        })
        .catch(error => {
          console.log('--- failed');
          console.log(error);
        });
    },
    onSearch() {
      let reg = /^[A-Za-z0-9]+$/;
      let value = this.inputTxt;
      if (value.length == 0 || !reg.test(value)) {
        this.resultInfo = '请输入正确的手机号 / 运单号。';
        this.isError = true;
        this.clearList();
        this.showResultInfo();
        return;
      }

      let param = {
        params: {
          number: value || null,
          platform: 'web'
        }
      };
      maintainApi
        .getList(param)
        .then(res => {
          let len = res.content.orderList.length;
          let arr = res.content.orderList;

          this.clearList();
          if (len == 0) {
            this.resultInfo = '所查号码无记录,请确认输入是否正确。';
            this.isError = true;
          } else {
            for (let i = 0; i < len; ++i) {
              let onName = '';
              let onId = arr[i].expressNumber;
              let offName = '';
              let offId = arr[i].sendOffNumber;
              let result = arr[i].result || -1;
              let msg;
              let msgDetail = '';
              let msgStyle;

              let cnt;
              switch (result) {
                case 0:
                  msg = '待收件';
                  msgDetail = '您查询的快递单号，售后点暂时没有收到。可能在寄往的路上，请耐心等待~';
                  msgStyle = 'border-color-blue';

                  cnt = 0;
                  for (let key in this.expressObj) {
                    if (key == arr[i].sendOnExpress) {
                      onName = this.expressObj[key];
                      cnt++;
                    }
                    if (key == arr[i].sendOffExpress) {
                      offName = this.expressObj[key];
                      cnt++;
                    }
                    if (cnt >= 2) {
                      break;
                    }
                  }
                  break;
                case 1:
                  msg = '待维修';
                  msgDetail = arr[i].dealinfo || '已收到您寄来的快递，正在安排检查故障，请耐心等待~';
                  msgStyle = 'border-color-red';

                  cnt = 0;
                  for (let key in this.expressObj) {
                    if (key == arr[i].sendOnExpress) {
                      onName = this.expressObj[key];
                      cnt++;
                    }
                    if (key == arr[i].sendOffExpress) {
                      offName = this.expressObj[key];
                      cnt++;
                    }
                    if (cnt >= 2) {
                      break;
                    }
                  }
                  break;
                case 2:
                  msg = '已寄出';
                  msgDetail = arr[i].dealinfo;
                  msgStyle = 'border-color-yellow';

                  for (let key in this.expressObj) {
                    if (key == arr[i].sendOffExpress) {
                      onName = offName = this.expressObj[key];
                      break;
                    }
                  }
                  break;
                default:
                  msg = '待收件';
                  msgDetail = '您查询的快递单号，售后点暂时没有收到。可能在寄往的路上，请耐心等待~';
                  msgStyle = 'border-color-blue';
                  break;
              }

              this.orderList.push({
                inExpressName: onName, // 快递公司
                inExpressId: onId, // 快递单号
                outExpressName: offName, // 回寄快递公司
                outExpressId: offId, // 回寄快递单号
                msg: msg, // 信息
                msgDetail: msgDetail, // 详情信息
                msgStyle: msgStyle, // 信息样式
                result: arr[i].result,
                id: arr[i].id,
                commentList: arr[i].orderPingjia || ''
              });
            }

            this.resultInfo = '';
            this.isError = false;
          }
          this.showResultInfo();
        })
        .catch(error => {
          console.log('--- failed');
          console.log(error);
        });
    },
    commentClick(id) {
      this.orderID = id;
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    clearList() {
      if (this.orderList.length > 0) {
        this.orderList = [];
      }
    },

    showResultInfo() {
      this.isResult = !this.isError && !(this.orderList.length == 0);
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 700px;
  height: auto !important;
  height: 700px;
}
.search-left {
  float: left;
  width: 320px;
  margin-top: 90px;
  margin-left: 388px;
}
.search-right {
  position: relative;
  float: left;
  margin-top: 90px;
  margin-left: 20px;
  cursor: pointer;
}
.search-right > img {
  position: absolute;
  top: 20%;
  left: 10%;
}
.input-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  padding-left: 5px;
}
.btn-search {
  width: 94px;
  height: 40px;
  font-size: 20px;
  background-color: #e60012;
  color: #fff;
  padding-left: 40px;
}
.tips-info {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #ff0000;
}
.tips-info-blank {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 20px;
}
.result-info {
  margin-top: 20px;
  margin-bottom: 20px;
}
.dividing-line {
  width: 328px;
  height: 1px;
  margin: 0 auto;
  border-top: 1px dashed #e60012;
  text-align: center;
}
.dividing-line span {
  position: relative;
  top: -12px;
  background: #fff;
  color: #e60012;
  padding: 0 26px;
}
.result-content {
  width: 788px;
  margin-top: 30px;
  margin-left: 206px;
  border-bottom: 1px dashed #dbdbdb;
}
.result-content:last-child {
  border-bottom: none;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
ul > li {
  position: relative;
  width: 580px;
  font-size: 14px;
  margin-bottom: 26px;
  color: #575757;
  display: block;
}
.result-left {
  float: left;
}
.result-right {
  float: right;
}
.box-card {
  text-align: center;
  font-size: 18px;
  width: 110px;
  height: 42px;
  line-height: 42px;
  border: 1px solid;
  border-radius: 4px;
  margin-top: 36px;
  margin-right: 62px;
}
.border-color-blue {
  color: #00ff;
  border-color: #00ff;
}
.border-color-red {
  color: #ff0000;
  border-color: #ff0000;
}
.border-color-yellow {
  color: #ffd600;
  border-color: #ffd600;
}
.box-comment {
  text-align: center;
  font-size: 18px;
  width: 110px;
  height: 42px;
  line-height: 42px;
  border: 1px solid;
  border-radius: 4px;
  margin-top: 36px;
  margin-right: 62px;
  cursor: pointer;
}
</style>
