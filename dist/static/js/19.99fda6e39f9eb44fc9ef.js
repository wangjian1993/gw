webpackJsonp([19],{mJLk:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("gyMJ"),i={name:"maintainCheck",data:function(){return{inputTxt:"",isError:!1,resultInfo:"",isResult:!1,orderList:[{inExpressName:"",inExpressId:-1,outExpressName:"",outExpressId:-1,msg:"",msgDetail:"",msgStyle:""}],expressObj:{2:"顺丰",3:"申通",4:"圆通",5:"中通",6:"韵达",7:"百世汇通",8:"宅急送",9:"EMS",10:"天天",11:"全峰",12:"速尔",13:"优速",14:"德邦",15:"国通",16:"万象",17:"邮政",18:"快捷",19:"其它"}}},methods:{onSearch:function(){var s=this,e=this.inputTxt;if(0==e.length||!/^[A-Za-z0-9]+$/.test(e))return this.resultInfo="请输入正确的手机号 / 运单号。",this.isError=!0,this.clearList(),void this.showResultInfo();var t={params:{number:e||null,platform:"web"}};r.e.getList(t).then(function(e){var t=e.content.orderList.length,r=e.content.orderList;if(s.clearList(),0==t)s.resultInfo="所查号码无记录,请确认输入是否正确。",s.isError=!0;else{for(var i=0;i<t;++i){var n="",a=r[i].expressNumber,o="",l=r[i].sendOffNumber,c=void 0,u="",d=void 0,v=void 0;switch(r[i].result||-1){case 0:for(var p in c="待收件",u="您查询的快递单号，售后点暂时没有收到。可能在寄往的路上，请耐心等待~",d="border-color-blue",v=0,s.expressObj)if(p==r[i].sendOnExpress&&(n=s.expressObj[p],v++),p==r[i].sendOffExpress&&(o=s.expressObj[p],v++),v>=2)break;break;case 1:for(var f in c="待维修",u=r[i].dealinfo||"已收到您寄来的快递，正在安排检查故障，请耐心等待~",d="border-color-red",v=0,s.expressObj)if(f==r[i].sendOnExpress&&(n=s.expressObj[f],v++),f==r[i].sendOffExpress&&(o=s.expressObj[f],v++),v>=2)break;break;case 2:for(var h in c="已寄出",u=r[i].dealinfo,d="border-color-yellow",s.expressObj)if(h==r[i].sendOffExpress){n=o=s.expressObj[h];break}break;default:c="待收件",u="您查询的快递单号，售后点暂时没有收到。可能在寄往的路上，请耐心等待~",d="border-color-blue"}s.orderList.push({inExpressName:n,inExpressId:a,outExpressName:o,outExpressId:l,msg:c,msgDetail:u,msgStyle:d})}s.resultInfo="",s.isError=!1}s.showResultInfo()}).catch(function(s){console.log("--- failed"),console.log(s)})},clearList:function(){this.orderList.length>0&&(this.orderList=[])},showResultInfo:function(){this.isResult=!(this.isError||0==this.orderList.length)}}},n={render:function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"container",staticStyle:{padding:"50px 0"}},[r("ol",{staticClass:"breadcrumb"},[r("li",[r("router-link",{attrs:{to:{name:"service"}}},[s._v(" 服务")])],1),s._v(" "),r("li",{staticClass:"active"},[s._v("维修查询")])]),s._v(" "),r("div",{staticClass:"content bg-white"},[r("div",{staticClass:"row"},[r("div",{staticClass:"search-left"},[r("input",{directives:[{name:"model",rawName:"v-model",value:s.inputTxt,expression:"inputTxt"}],staticClass:"input-content",attrs:{type:"text",placeholder:"请输入手机号/快递单号查询"},domProps:{value:s.inputTxt},on:{input:function(e){e.target.composing||(s.inputTxt=e.target.value)}}})]),s._v(" "),r("div",{staticClass:"search-right"},[r("img",{attrs:{src:t("uVQ0"),alt:""}}),s._v(" "),r("button",{staticClass:"btn btn-search",on:{click:function(e){return s.onSearch()}}},[s._v("查询")])])]),s._v(" "),s.isError?r("div",{staticClass:"row tips-info"},[s._v(s._s(s.resultInfo))]):r("div",{staticClass:"row tips-info-blank"}),s._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:s.isResult,expression:"isResult"}]},[s._m(0),s._v(" "),s._l(s.orderList,function(e,t){return r("div",{key:t,staticClass:"row result-content"},[r("div",{staticClass:"result-left"},[r("ul",[r("li",[s._v("\n              快递公司："+s._s(e.inExpressName)+"\n            ")]),s._v(" "),r("li",[s._v("\n              快递单号："+s._s(e.inExpressId)+"\n            ")]),s._v(" "),r("li",[s._v("\n              回寄快递公司："+s._s(e.outExpressName)+"\n            ")]),s._v(" "),r("li",[s._v("\n              回寄单号："+s._s(e.outExpressId)+"\n            ")]),s._v(" "),r("li",[s._v("\n              系统反馈："+s._s(e.msgDetail)+"\n            ")])])]),s._v(" "),r("div",{staticClass:"result-right"},[r("div",{staticClass:"box-card",class:e.msgStyle},[s._v("\n            "+s._s(e.msg)+"\n          ")])])])})],2)])])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"row result-info"},[e("div",{staticClass:"dividing-line"},[e("span",[this._v("查询结果")])])])}]};var a=t("C7Lr")(i,n,!1,function(s){t("shDQ")},"data-v-2a58ebd8",null);e.default=a.exports},shDQ:function(s,e){},uVQ0:function(s,e,t){s.exports=t.p+"static/img/search-icon.a2f7000.png"}});
//# sourceMappingURL=19.99fda6e39f9eb44fc9ef.js.map