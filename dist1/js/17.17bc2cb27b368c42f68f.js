webpackJsonp([17],{bDut:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a("mXna"),e=a("3LLj"),n=a("HVJf"),o=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},c={components:{Pagination:s.a,AudioPlayer:e.a},data:function(){return{posSty:{top:"300px",left:"0"},pageList:{curPage:1,pageItem:10,totalPage:13},perPage:20,extra:0,ptrList:[],curTagList:[],preAlbumId:1028}},created:function(){0===this.conResList.length&&this.reqData(0,{titleId:0,tagId:0,sortId:0},{tagId:0,sortId:0}),this.curTagList=0===this.contentData.titleId?this.conAudioTagList:this.conVideoTagList},watch:{contentData:function(){this.curTagList=0===this.contentData.titleId?this.conAudioTagList:this.conVideoTagList}},computed:o({},Object(n.b)(["contentData","conResList","conTitleList","conAudioTagList","conVideoTagList","conSortList"]),{loopPage:function(){this.ptrList=[];for(var t=this.conResList.length,i=Math.ceil(t/this.perPage),a=0;a<i;++a)this.ptrList.push(a*this.perPage);this.extra=t%this.perPage,this.pageList.totalPage=i;var s=this.extra;return 0===s&&(s=this.perPage),this.pageList.curPage!=this.pageList.totalPage?this.perPage:s},albumAutoH:function(){return{"album-img-audio-height":0===this.contentData.titleId,"album-img-video-height":1===this.contentData.titleId}}}),methods:{onTypeChange:function(t){this.contentData.titleId!==t&&this.reqData(t,{titleId:t,tagId:0,sortId:0},{tagId:0,sortId:0})},onTagChange:function(t){if(this.contentData.tagId!==t){var i=this.contentData.titleId;this.reqData(i,{titleId:i,tagId:t,sortId:0},{tagId:t,sortId:0})}},onSortChange:function(t){if(this.contentData.sortId!==t){var i=this.contentData.titleId,a=this.contentData.tagId;this.reqData(i,{titleId:i,tagId:a,sortId:t},{tagId:a,sortId:t})}},onPlayAlbum:function(t){var i=this;if(0===this.contentData.titleId){if(this.preAlbumId===t)return;this.preAlbumId=t,this.stop(),this.$store.dispatch("getAudioAlbumList",t).then(function(){i.play()})}else window.open("static/video.html?v_id="+t+"&episode=0","_blank")},stop:function(){this.pause(),this.$store.dispatch("updateTime",{currentTime:0,duration:0}),this.$store.dispatch("changeSong",{model:0,songNum:1})},pause:function(){this.$store.dispatch("setIsPlaying",!1)},play:function(){this.$store.dispatch("setIsPlaying",!0)},reqData:function(t,i,a){this.pageList.curPage=1,this.$store.dispatch("setContentData",i),0===t?this.$store.dispatch("getConAudioList",a):this.$store.dispatch("getConVideoList",a)}}},r={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"container",staticStyle:{"padding-top":"50px"}},[s("div",{staticClass:"content-top bg-white"},t._l(t.conTitleList,function(i,a){return s("div",{key:a,staticClass:"title-type clear",class:{active:a===t.contentData.titleId},on:{click:function(i){return t.onTypeChange(a)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.uri,expression:"item.uri"}],attrs:{alt:""}}),t._v(" "),s("p",[t._v(t._s(i.txt)+"内容")])])}),0),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"row"},[s("div",{staticClass:"nav"},[s("div",{staticClass:"left"},[t._v("\n            "+t._s(t.conTitleList[t.contentData.titleId].txt)+"类型\n          ")]),t._v(" "),s("div",{staticClass:"mid"},[s("ul",t._l(t.curTagList,function(i,a){return s("li",{key:a,class:{active:t.contentData.tagId===a},on:{click:function(i){return t.onTagChange(a)}}},[t._v(t._s(i.txt))])}),0)]),t._v(" "),s("div",{staticClass:"right"},[s("ul",t._l(t.conSortList,function(i,a){return s("li",{key:a,class:{active:t.contentData.sortId===a},on:{click:function(i){return t.onSortChange(a)}}},[t._v("\n                "+t._s(i)+"\n              ")])}),0)])])]),t._v(" "),t.conResList.length>0?s("div",{staticClass:"row"},t._l(t.loopPage,function(i,e){return s("div",{key:e,staticClass:"album-icon",class:{clearFix:e%5==0}},[s("div",{staticClass:"album-img",class:t.albumAutoH,on:{click:function(i){return t.onPlayAlbum(t.conResList[e+t.ptrList[t.pageList.curPage-1]].albumId)}}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.conResList[e+t.ptrList[t.pageList.curPage-1]].uri,expression:"conResList[index + ptrList[pageList.curPage - 1]].uri"}],key:t.conResList[e+t.ptrList[t.pageList.curPage-1]].uri,staticClass:"banner",attrs:{alt:""}}),t._v(" "),s("img",{staticClass:"cover",attrs:{src:a("mHbx"),alt:""}})]),t._v(" "),s("p",{staticClass:"album-sub-1"},[t._v(t._s(t.conResList[e+t.ptrList[t.pageList.curPage-1]].title))]),t._v(" "),s("p",{staticClass:"album-sub-2"},[t._v(t._s(t.conResList[e+t.ptrList[t.pageList.curPage-1]].song))])])}),0):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("pagination",{staticStyle:{"text-align":"center"},attrs:{curPage:t.pageList.curPage,pageItem:t.pageList.pageItem,totalPage:t.pageList.totalPage},model:{value:t.pageList,callback:function(i){t.pageList=i},expression:"pageList"}})],1)])]),t._v(" "),s("audio-player",{attrs:{posSty:t.posSty}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"qr"},[s("img",{attrs:{src:a("zqjc"),alt:""}}),t._v(" "),s("p",[t._v("想要批量下载？")]),t._v(" "),s("p",[t._v("用APP来体验吧")]),t._v(" "),s("p",[t._v("面向0-6岁孩子")]),t._v(" "),s("p",[t._v("提供教育资源服务")])])}]};var l=a("C7Lr")(c,r,!1,function(t){a("ogDd")},"data-v-79df4f3c",null);i.default=l.exports},ogDd:function(t,i){},zqjc:function(t,i,a){t.exports=a.p+"static/img/wx-qr.1aef9c6.png"}});
//# sourceMappingURL=17.17bc2cb27b368c42f68f.js.map