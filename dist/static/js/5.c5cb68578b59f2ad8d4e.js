webpackJsonp([5],{"+Svl":function(t,e,s){t.exports=s.p+"static/img/2_1.bc7e4d8.png"},"6LLF":function(t,e){},AQUB:function(t,e,s){t.exports=s.p+"static/img/1_2.201e095.png"},ERGQ:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"typeRadio",data:function(){return{idx:0}},model:{prop:"typeVal",event:"typeChange"},props:{value:{type:[String,Number],require:!0},typeVal:{type:[String,Number],require:!0},checked:{type:Boolean,default:!1},imgList:{type:Array,default:null},txt:{type:String,require:!0}},mounted:function(){!0===this.checked&&this.onClick()},updated:function(){this.idx=parseInt(this.typeVal)-1},methods:{onClick:function(){this.$emit("typeChange",this.$refs.radio.value)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main",on:{click:function(e){return t.onClick()}}},[s("img",{attrs:{src:t.imgList[this.idx].uri,alt:""}}),t._v(" "),s("span",[s("p",{staticClass:"title",class:{"title-checked":t.typeVal==t.value}},[t._v(t._s(t.txt))])]),t._v(" "),s("label",{staticClass:"ui-radio",class:{"radio-checked":t.typeVal==t.value}},[s("input",{ref:"radio",attrs:{type:"radio"},domProps:{value:t.value}})])])},staticRenderFns:[]};var r=s("VU/8")(i,a,!1,function(t){s("aw/h")},"data-v-0564bb65",null).exports,n=s("TpMw"),l=s.n(n),c=s("AQUB"),o=s.n(c),m=s("+Svl"),u=s.n(m),p=s("khmB"),d=s.n(p),g={name:"typeBtn",model:{prop:"btnVal",event:"btnSelect"},props:{btnVal:{type:[String,Number],require:!0},btnList:{type:Array,default:null}},methods:{onClick:function(t){this.$emit("btnSelect",t)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn-toolbar",attrs:{role:"toolbar"}},t._l(t.btnList,function(e,i){return s("div",{key:i,staticClass:"btn-group"},[s("button",{staticClass:"btn",class:{"btn-checked":i===t.btnVal},attrs:{type:"button"},on:{click:function(e){return t.onClick(i)}}},[t._v(t._s(e.txt))])])}),0)},staticRenderFns:[]};var k={components:{TypeRadio:r,TypeBtn:s("VU/8")(g,v,!1,function(t){s("6LLF")},"data-v-f745dd3e",null).exports},data:function(){return{typeVal:"",preType:"",ischecked:!0,imgSrc_1:[{uri:l.a},{uri:u.a}],imgSrc_2:[{uri:o.a},{uri:d.a}],btnVal:"0",btnList:[],btnList_1:[{txt:"充电与开机类"},{txt:"耳灯亮，不能正常播放类"},{txt:"如何更换或添加播放内容"},{txt:"联网操作"}],btnList_2:[{txt:"充电与开机类"},{txt:"触屏、LCD显示类"},{txt:"无声音类"},{txt:"如何更换或添加播放内容？"}],showList:[],detailList:[[[{msg:"1、火火免内置可充电电池，若不能开机，应检查电池是否有电?正常情况下充电指示灯亮，带LCD的机型有充电指示，电池充电一般为3~5小时可充满,充满后可重新开机试一下。",isRemark:!1},{msg:"2、如果不能充电，确认指示灯是否正常亮？充一下就灭也可能是电池余电较多，可用完电后再充电试试。充电指示灯不亮需检查供电是否正常？数据线是否接好？可尝试更换数据线或充电头试一下(接口一致一般可通用)。",isRemark:!1},{msg:"3、可观察一下USB口是否有异常，是否有损坏，如有损坏需要寄售后维修。",isRemark:!1},{msg:"4、确定充电器及USB口没有问题，更换数据线试过还是无法充电需要寄售后维修。",isRemark:!1},{msg:"注：机器默认待机30分钟播放不操作会自动休眠，并非电池没电。可充满电后开机播放，关闭自动休眠功能后，能持续播放二个小时以上为正常。",isRemark:!0}],[{msg:"1、检查音量开关是否调到了最小位置。",isRemark:!1},{msg:"2、开机后能听到“我是火火兔，是你最贴心的好朋友”，则可能是无法读到播放内容，可先尝试复位操作（开机状态下，用针插一下兔子的reset/rst小针眼,关机-开机试试，部分机型无复位孔），如果还是无法播放，则寄售后维修。",isRemark:!1},{msg:"3、将兔子通过数据线，连接电脑USB口，正常情况下能找到可移动磁盘(K1、M1等机型插上数据线后需要在机器上进行确认打开USB存储)，检查内存卡里的文件夹名、文件格式和文件的存放位置是否正确。",isRemark:!1},{msg:"4、开机后没有任何声音提示，可能是喇叭损坏或内连接线松，需要寄售后维修（2014年以前生产较早期产品开机没有“我是火火兔，是你最贴心好朋友”提示音）。",isRemark:!1},{msg:"注：本机播放内容存储在TF卡中，若TF卡文件损坏，中病毒，或TF卡本身损坏，可能导致卡音或不能正常播放，用户可尝试格式化TF卡或自行更换TF卡后重拷文件。",isRemark:!0}],[{msg:"1、兔子通过USB线连接可联网的电脑，在电脑中打开可移动磁盘，即是故事机TF卡。",isRemark:!1},{msg:"2、通过网络下载（建议在火火兔官网“内容”里下载）MP3文件，存放到故事机相应文件夹中即可增加内容。",isRemark:!1},{msg:"3、进入TF对应文件夹，找到不需要的内容删除即可去掉不需要的内容。",isRemark:!1},{msg:"注：摇铃不适用上述情况，内容不能替换。",isRemark:!0}],[{msg:"1、请确认 Wi-Fi网络是否是2.4GHz（故事机不支持5G频段Wi-Fi网络）.",isRemark:!1},{msg:"2、请确认故事机是否处于配网模式。进入配网模式，故事机会提示“开启设置网络模式,请通过手机配置网络”，耳灯会闪烁；",isRemark:!1},{msg:"3、请确认手机蓝牙已打开（安卓手机把定位功能打开），用手机微信扫一扫来扫机器底座二维码，关注公众号，并进入公众号选择“智能设备”里的“火火兔配网”，按照页面提示操作配网。",isRemark:!1},{msg:"4、请确认Wi-Fi密码正确性（路由器名及密码不要有特殊字符，特殊字符可能影响连接，注意密码字母大小写）；",isRemark:!1},{msg:"5.如果联网失败，可取消关注公众号，并在微信-我-设置-设备里删除设备，重启开机扫码试一下；",isRemark:!1},{msg:"6、用手机热点连接试试。家里有2台手机的话，一台手机分享热点，另外一台手机连接热点，并绑定配置故事机。",isRemark:!1}]],[[{msg:"1、火火免内置可充电电池，若不能开机，应检查电池是否有电?正常情况下充电指示灯亮，带LCD的机型有充电指示，电池充电一般为3~5小时可充满,充满后可重新开机试一下。",isRemark:!1},{msg:"2、如果不能充电，确认指示灯是否正常亮？充一下就灭也可能是电池余电较多，可用完电后再充电试试。充电指示灯不亮需检查供电是否正常？数据线是否接好？可尝试更换数据线或充电头试一下(接口一致一般可通用)。",isRemark:!1},{msg:"3、可观察一下USB口是否有异常，是否有损坏，如有损坏需要寄售后维修。",isRemark:!1},{msg:"4、确定充电器及USB口没有问题，更换数据线试过还是无法充电需要寄售后维修。",isRemark:!1}],[{msg:"1、开机耳灯亮，声音正常，屏幕不能正常显示，首先检查是否为近距离护眼功能启动？可通过设置里的关闭护眼设置试一下。",isRemark:!1},{msg:"2、LCD显示正常，所有触屏无反应，需要寄售后维修。",isRemark:!1},{msg:"3、触屏正常，个别菜单下点击菜单无反应，可能是内存卡中对应文件程序丢失，可联系售后客服处理。",isRemark:!1},{msg:"4、LCD显示异常，如白屏，花屏，破裂等需要联系售后维修。",isRemark:!1}],[{msg:"1、开机后显示正常，没有任何声音，调节音响键检查是否为音量设置为最低。",isRemark:!1},{msg:"2、可能是喇叭损坏需要寄售后维修。",isRemark:!1}],[{msg:"1、兔子通过USB线连接电脑，将需要拓展的内容拷贝至内置存储中，为方便寻找，建议放在根目录中。",isRemark:!1},{msg:"2、视频机中有如果有应用商城，可以在应用商城下载APP。",isRemark:!1},{msg:"注：音频格式：MP3、WAV，视频格式：MP4、MKV、AVI、RMVB等720P以下",isRemark:!0}]]]}},created:function(){this.showList=this.detailList[0][0],this.preType=this.typeVal},updated:function(){this.btnList="1"===this.typeVal?this.btnList_1:this.btnList_2;var t=this.typeVal;t!==this.preType&&(this.btnVal=0,this.preType=t);var e=parseInt(this.typeVal)-1,s=parseInt(this.btnVal);this.showList=this.detailList[e][s]}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",staticStyle:{padding:"50px 0"}},[s("ol",{staticClass:"breadcrumb"},[s("li",[s("router-link",{attrs:{to:{name:"service"}}},[t._v("服务")])],1),t._v(" "),s("li",{staticClass:"active"},[t._v("自助售后")])]),t._v(" "),s("div",{staticClass:"content bg-white"},[s("div",{staticClass:"row"},[s("div",{staticClass:"type-icon"},[s("type-radio",{staticClass:"radio",attrs:{value:"1",txt:"故事机",imgList:t.imgSrc_1,checked:t.ischecked},model:{value:t.typeVal,callback:function(e){t.typeVal=e},expression:"typeVal"}})],1),t._v(" "),s("div",{staticClass:"type-icon"},[s("type-radio",{staticClass:"radio",attrs:{value:"2",txt:"视频机",imgList:t.imgSrc_2},model:{value:t.typeVal,callback:function(e){t.typeVal=e},expression:"typeVal"}})],1)]),t._v(" "),s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"que-right"},[s("type-btn",{attrs:{btnList:t.btnList},model:{value:t.btnVal,callback:function(e){t.btnVal=e},expression:"btnVal"}})],1)]),t._v(" "),s("div",{staticClass:"row dividing-line"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"detail-info"},[s("ul",t._l(t.showList,function(e,i){return s("li",{key:i,class:e.isRemark?"imRemark":"imNotRemark"},[t._v(t._s(e.msg))])}),0)])]),t._v(" "),s("div",{staticClass:"row"},[s("p",{staticStyle:{"text-align":"center",color:"#404040"}},[t._v("\n        依旧没有解决我的问题，\n        "),s("router-link",{staticStyle:{color:"#e60012",cursor:"pointer","text-decoration":"underline"},attrs:{to:{name:"saleTerm"}}},[t._v("我要报修")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"que-left"},[e("p",[this._v("常见问题")])])}]};var y=s("VU/8")(k,h,!1,function(t){s("u2gi")},"data-v-3e80a791",null);e.default=y.exports},TpMw:function(t,e,s){t.exports=s.p+"static/img/1_1.1a56c86.png"},"aw/h":function(t,e){},khmB:function(t,e,s){t.exports=s.p+"static/img/2_2.ce420ef.png"},u2gi:function(t,e){}});
//# sourceMappingURL=5.c5cb68578b59f2ad8d4e.js.map