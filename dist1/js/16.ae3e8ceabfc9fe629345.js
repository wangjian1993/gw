webpackJsonp([16],{LP8t:function(t,s){},"Lh/9":function(t,s){},XYWn:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("gyMJ"),a={model:{prop:"isShow",event:"dialogClose"},props:{isShow:{type:Boolean,default:!1}},methods:{onClose:function(){this.$emit("dialogClose",!1)}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.isShow?e("div",[e("div",{staticClass:"dialog-cover"}),t._v(" "),e("transition",{attrs:{name:"drop"}},[e("div",{staticClass:"dialog-content"},[e("p",{staticClass:"dialog-close",on:{click:function(s){return t.onClose()}}},[t._v("X")]),t._v(" "),t._t("default",[t._v("empty")])],2)])],1):t._e()},staticRenderFns:[]};var o={components:{Toast:e("VU/8")(a,n,!1,function(t){e("Lh/9")},"data-v-4fd14962",null).exports},data:function(){return{isToast:!1,btnVal:"0",btnList:[{txt:"问题反馈",classObj:{"btn-pink":!0}},{txt:"有错别字",classObj:{"btn-light-blue":!0}},{txt:"歌曲无法播放",classObj:{"btn-deep-blue":!0}},{txt:"视频无法播放",classObj:{"btn-orange":!0}},{txt:"链接失败",classObj:{"btn-grey":!0}},{txt:"产品问题",classObj:{"btn-yellow":!0}},{txt:"其他问题",classObj:{"btn-red":!0}}],faultDescr:"",telNum:"",verifyCode:"",verifyQues:"",verifyAns:""}},vuerify:{faultDescr:{test:/\S+/,message:"问题说明不能为空"},telNum:{test:/^1(3|4|5|7|8)\d{9}$/,message:"请输入正确的电话号码"}},created:function(){this.onRandom()},computed:{errorList:function(){return this.$vuerify.$errors},invalid:function(){return this.$vuerify.invalid}},methods:{onClick:function(t){this.btnVal=t},onRandom:function(){var t=Math.round(5*Math.random()),s=Math.round(5*Math.random());this.verifyAns=t+s+"",this.verifyQues=t+"+"+s+"=?"},onSubmit:function(){var t=this;if(this.$vuerify.check()&&this.verifyCode===this.verifyAns){var s={title:this.btnList[this.btnVal].txt,content:this.faultDescr,url:this.telNum};i.c.submit(s).then(function(s){t.isToast=!0}).catch(function(t){console.log("--- failed"),console.log(t)})}},onJump:function(){this.$router.push({name:"home"})}}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container",staticStyle:{padding:"50px 0"}},[i("ol",{staticClass:"breadcrumb"},[i("li",[i("router-link",{attrs:{to:{name:"home"}}},[t._v("首页")])],1),t._v(" "),i("li",{staticClass:"active"},[t._v("反馈中心")]),t._v(" "),i("li",{staticClass:"active"},[t._v("问题反馈")])]),t._v(" "),i("div",{staticClass:"bg-white"},[i("img",{staticClass:"banner",attrs:{src:e("hV3x"),alt:""}}),t._v(" "),i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"que-left"},[i("div",{staticClass:"question-info"},[t._v("\n            "+t._s(this.btnList[this.btnVal].txt)+"\n          ")])]),t._v(" "),i("div",{staticClass:"que-right"},[i("div",{staticClass:"btn-toolbar",attrs:{role:"toolbar"}},t._l(t.btnList,function(s,e){return i("div",{key:e,staticClass:"btn-group"},[i("button",{staticClass:"btn",class:s.classObj,attrs:{type:"button"},on:{click:function(s){return t.onClick(e)}}},[t._v(t._s(s.txt))])])}),0)])]),t._v(" "),i("div",{staticClass:"row per-row-pos"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.faultDescr,expression:"faultDescr"}],staticClass:"txtarea-custom",attrs:{placeholder:"请在这输入您的问题~"},domProps:{value:t.faultDescr},on:{input:function(s){s.target.composing||(t.faultDescr=s.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.errorList.faultDescr,expression:"errorList.faultDescr"}],staticClass:"row"},[i("div",{staticClass:"error-content",staticStyle:{margin:"-25px 0"}},[i("p",[t._v(t._s(t.errorList.faultDescr))])])]),t._v(" "),i("div",{staticClass:"row per-row-pos"},[i("div",{staticClass:"tel-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.telNum,expression:"telNum"}],staticClass:"input-content",attrs:{type:"text",placeholder:"请输入您的手机号码"},domProps:{value:t.telNum},on:{input:function(s){s.target.composing||(t.telNum=s.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.errorList.telNum,expression:"errorList.telNum"}],staticClass:"error-content"},[i("p",[t._v(t._s(t.errorList.telNum))])])]),t._v(" "),i("div",{staticClass:"row per-row-pos"},[i("div",{staticClass:"code-left"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.verifyCode,expression:"verifyCode"}],staticClass:"input-content",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.verifyCode},on:{input:function(s){s.target.composing||(t.verifyCode=s.target.value)}}})]),t._v(" "),i("div",{staticClass:"code-box"},[t._v("\n          "+t._s(t.verifyQues)+"\n        ")]),t._v(" "),i("div",{staticClass:"code-reset",on:{click:function(s){return t.onRandom()}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.verifyCode!==t.verifyAns,expression:"verifyCode!==verifyAns"}],staticClass:"error-content"},[i("p",[t._v("请输入正确的验证码")])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"submit-pos"},[i("button",{staticClass:"btn btn-submit",on:{click:function(s){return t.onSubmit()}}},[t._v("提交问题")])])])])]),t._v(" "),i("toast",{model:{value:t.isToast,callback:function(s){t.isToast=s},expression:"isToast"}},[i("div",{staticClass:"row"},[i("p",{staticStyle:{"text-align":"center","font-size":"24px",color:"#575757"}},[t._v("提交成功谢谢你的反馈")])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"ok-pos"},[i("button",{staticClass:"btn btn-submit",on:{click:function(s){return t.onJump()}}},[t._v("确定")])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"title"},[this._v("火火兔对您给的意见和建议，深表感谢！")])])}]};var l=e("VU/8")(o,r,!1,function(t){e("LP8t")},"data-v-06e30efe",null);s.default=l.exports},hV3x:function(t,s,e){t.exports=e.p+"static/img/feed-banner.d58756c.png"}});
//# sourceMappingURL=16.ae3e8ceabfc9fe629345.js.map