webpackJsonp([18],{SQM7:function(t,e){},mJLk:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("gyMJ"),r={name:"maintainCheck",data:function(){return{inputTxt:"",isError:!1,resultInfo:"",isResult:!1,orderID:-1,dialogFormVisible:!1,textarea:"",commentText:["极差","失望","一般","满意","很满意"],form:{name:""},comment1:null,comment2:null,orderList:[{inExpressName:"",inExpressId:-1,outExpressName:"",outExpressId:-1,msg:"",msgDetail:"",msgStyle:""}],expressObj:{2:"顺丰",3:"申通",4:"圆通",5:"中通",6:"韵达",7:"百世汇通",8:"宅急送",9:"EMS",10:"天天",11:"全峰",12:"速尔",13:"优速",14:"德邦",15:"国通",16:"万象",17:"邮政",18:"快捷",19:"其它"}}},methods:{closeImport:function(){this.comment1=0,this.comment2=0,this.textarea="",this.dialogFormVisible=!1},comentSbumit:function(){var t=this;if(0!=this.comment1)if(0!=this.comment2){var e={orderId:this.orderID,productStart:this.comment2,serviceStart:this.comment1,content:this.textarea};i.e.submit(e).then(function(e){console.log(e.ret),"1"==e.ret&&(t.$message({message:"感谢您!评价成功!",type:"success"}),t.dialogFormVisible=!1,t.onSearch(),t.comment1=0,t.comment2=0,t.textarea="")}).catch(function(t){console.log("--- failed"),console.log(t)})}else this.$message({message:"请您对我们的产品进行评分!",type:"warning"});else this.$message({message:"请您对我们的服务进行评分!",type:"warning"})},onSearch:function(){var t=this,e=this.inputTxt;if(0==e.length||!/^[A-Za-z0-9]+$/.test(e))return this.resultInfo="请输入正确的手机号 / 运单号。",this.isError=!0,this.clearList(),void this.showResultInfo();var s={params:{number:e||null,platform:"web"}};i.e.getList(s).then(function(e){var s=e.content.orderList.length,i=e.content.orderList;if(t.clearList(),0==s)t.resultInfo="所查号码无记录,请确认输入是否正确。",t.isError=!0;else{for(var r=0;r<s;++r){var o="",n=i[r].expressNumber,a="",l=i[r].sendOffNumber,c=void 0,m="",u=void 0,v=void 0;switch(i[r].result||-1){case 0:for(var d in c="待收件",m="您查询的快递单号，售后点暂时没有收到。可能在寄往的路上，请耐心等待~",u="border-color-blue",v=0,t.expressObj)if(d==i[r].sendOnExpress&&(o=t.expressObj[d],v++),d==i[r].sendOffExpress&&(a=t.expressObj[d],v++),v>=2)break;break;case 1:for(var p in c="待维修",m=i[r].dealinfo||"已收到您寄来的快递，正在安排检查故障，请耐心等待~",u="border-color-red",v=0,t.expressObj)if(p==i[r].sendOnExpress&&(o=t.expressObj[p],v++),p==i[r].sendOffExpress&&(a=t.expressObj[p],v++),v>=2)break;break;case 2:for(var f in c="已寄出",m=i[r].dealinfo,u="border-color-yellow",t.expressObj)if(f==i[r].sendOffExpress){o=a=t.expressObj[f];break}break;default:c="待收件",m="您查询的快递单号，售后点暂时没有收到。可能在寄往的路上，请耐心等待~",u="border-color-blue"}t.orderList.push({inExpressName:o,inExpressId:n,outExpressName:a,outExpressId:l,msg:c,msgDetail:m,msgStyle:u,result:i[r].result,id:i[r].id,commentList:i[r].orderPingjia||""})}t.resultInfo="",t.isError=!1}t.showResultInfo()}).catch(function(t){console.log("--- failed"),console.log(t)})},commentClick:function(t){this.orderID=t,this.dialogFormVisible=!this.dialogFormVisible},clearList:function(){this.orderList.length>0&&(this.orderList=[])},showResultInfo:function(){this.isResult=!(this.isError||0==this.orderList.length)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{padding:"50px 0"}},[i("ol",{staticClass:"breadcrumb"},[i("li",[i("router-link",{attrs:{to:{name:"service"}}},[t._v("服务")])],1),t._v(" "),i("li",{staticClass:"active"},[t._v("维修查询")])]),t._v(" "),i("div",{staticClass:"content bg-white"},[i("div",{staticClass:"row"},[i("div",{staticClass:"search-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTxt,expression:"inputTxt"}],staticClass:"input-content",attrs:{type:"text",placeholder:"请输入手机号/快递单号查询"},domProps:{value:t.inputTxt},on:{input:function(e){e.target.composing||(t.inputTxt=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"search-right"},[i("img",{attrs:{src:s("uVQ0"),alt:""}}),t._v(" "),i("button",{staticClass:"btn btn-search",on:{click:function(e){return t.onSearch()}}},[t._v("查询")])])]),t._v(" "),t.isError?i("div",{staticClass:"row tips-info"},[t._v(t._s(t.resultInfo))]):i("div",{staticClass:"row tips-info-blank"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isResult,expression:"isResult"}]},[t._m(0),t._v(" "),t._l(t.orderList,function(e,s){return i("div",{key:s,staticClass:"row result-content"},[i("div",{staticClass:"result-left"},[i("ul",[i("li",[t._v("快递公司："+t._s(e.inExpressName))]),t._v(" "),i("li",[t._v("快递单号："+t._s(e.inExpressId))]),t._v(" "),i("li",[t._v("回寄快递公司："+t._s(e.outExpressName))]),t._v(" "),i("li",[t._v("回寄单号："+t._s(e.outExpressId))]),t._v(" "),i("li",[t._v("系统反馈："+t._s(e.msgDetail))]),t._v(" "),2==e.result&&""!=e.commentList?i("li",[t._v("\n              维修评价:\n              "),i("p",[i("span",[t._v("产品评价:")]),t._v(" "),i("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900"},model:{value:e.commentList.productStart,callback:function(s){t.$set(e.commentList,"productStart",s)},expression:"item.commentList.productStart"}})],1),t._v(" "),i("p",[i("span",[t._v("体验评价:")]),t._v(" "),i("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900"},model:{value:e.commentList.serviceStart,callback:function(s){t.$set(e.commentList,"serviceStart",s)},expression:"item.commentList.serviceStart"}})],1),t._v(" "),i("span",[t._v("意见以及建议:")]),t._v(" "),i("p",[t._v(t._s(e.commentList.content))])]):t._e()])]),t._v(" "),i("div",{staticClass:"result-right"},[i("div",{staticClass:"box-card",class:e.msgStyle},[t._v(t._s(e.msg))]),t._v(" "),2==e.result&&""==e.commentList?i("div",{staticClass:"box-comment",on:{click:function(s){return t.commentClick(e.id)}}},[t._v("评价")]):t._e()])])})],2)]),t._v(" "),i("el-dialog",{attrs:{title:"售后维修评价",visible:t.dialogFormVisible,center:"","before-close":t.closeImport,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("div",[i("p",[t._v("服务评价")]),t._v(" "),i("el-rate",{attrs:{"show-text":"",texts:t.commentText},model:{value:t.comment1,callback:function(e){t.comment1=e},expression:"comment1"}})],1),t._v(" "),i("div",[i("p",[t._v("产品评价")]),t._v(" "),i("el-rate",{attrs:{"show-text":"",texts:t.commentText},model:{value:t.comment2,callback:function(e){t.comment2=e},expression:"comment2"}})],1),t._v(" "),i("div",[i("p",[t._v("意见以及建议")]),t._v(" "),i("el-input",{attrs:{type:"textarea",rows:2,maxlength:"50","show-word-limit":"",placeholder:"请输入内容"},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.closeImport}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comentSbumit()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row result-info"},[e("div",{staticClass:"dividing-line"},[e("span",[this._v("查询结果")])])])}]};var n=s("C7Lr")(r,o,!1,function(t){s("SQM7")},"data-v-1bf1d968",null);e.default=n.exports},uVQ0:function(t,e,s){t.exports=s.p+"static/img/search-icon.a2f7000.png"}});
//# sourceMappingURL=18.146771a7d79c29c9cced.js.map