webpackJsonp([15],{Z3oR:function(t,s,i){t.exports=i.p+"static/img/banner.0adbf8d.png"},jAme:function(t,s){},"rs/6":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("3LLj"),e=i("NYxO"),n=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var i=arguments[s];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},l={components:{AudioPlayer:a.a},data:function(){return{bannerList:[i("Z3oR")],posSty:{top:"800px",left:"0"},preAlbumId:1028}},computed:n({},Object(e.b)(["conAudioTagList","contentIndexList","conResList"])),watch:{conResList:function(t){console.log(t),this.conResList.length>0&&this.$router.push({name:"contentDetail"})}},created:function(){this.pause(),this.$store.dispatch("getConIndexList")},methods:{onJump:function(t){this.$store.dispatch("setContentData",{titleId:0,tagId:t,sortId:0}),this.$store.dispatch("getConAudioList",{tagId:t,sortId:0}),this.stop()},onPlayAlbum:function(t){var s=this;this.preAlbumId!==t&&(this.preAlbumId=t,this.stop(),this.$store.dispatch("getAudioAlbumList",t).then(function(){s.play()}))},stop:function(){this.pause(),this.$store.dispatch("updateTime",{currentTime:0,duration:0}),this.$store.dispatch("changeSong",{model:0,songNum:1})},pause:function(){this.$store.dispatch("setIsPlaying",!1)},play:function(){this.$store.dispatch("setIsPlaying",!0)}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"bg-white"},[a("img",{staticClass:"banner",attrs:{src:t.bannerList[0],alt:""}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row title-pos"},t._l(t.conAudioTagList,function(s,i){return 0!==i?a("div",{key:i,staticClass:"service-icon"},[a("a",{on:{click:function(s){return t.onJump(i)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],attrs:{alt:""}}),t._v(" "),a("p",{staticClass:"icon-title"},[t._v(t._s(s.txt))])])]):t._e()}),0),t._v(" "),t.contentIndexList.recommendList.length>0?a("div",{staticClass:"row album-info"},[t._m(0),t._v(" "),t._l(t.contentIndexList.recommendList,function(s,e){return a("div",{key:e,staticClass:"album-icon"},[a("div",{staticClass:"album-img",on:{click:function(i){return t.onPlayAlbum(s.albumId)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],staticClass:"banner",attrs:{alt:""}}),t._v(" "),a("img",{staticClass:"cover",attrs:{src:i("mHbx"),alt:""}})]),t._v(" "),a("p",{staticClass:"album-sub-1"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"album-sub-2"},[t._v(t._s(s.detail))])])})],2):t._e(),t._v(" "),t.contentIndexList.characterList.length>0?a("div",{staticClass:"row album-info"},[t._m(1),t._v(" "),t._l(t.contentIndexList.characterList,function(s,e){return a("div",{key:e,staticClass:"album-icon"},[a("div",{staticClass:"album-img",on:{click:function(i){return t.onPlayAlbum(s.albumId)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],staticClass:"banner",attrs:{alt:""}}),t._v(" "),a("img",{staticClass:"cover",attrs:{src:i("mHbx"),alt:""}})]),t._v(" "),a("p",{staticClass:"album-sub-1"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"album-sub-2"},[t._v(t._s(s.detail))])])})],2):t._e(),t._v(" "),t.contentIndexList.nationList.length>0?a("div",{staticClass:"row album-info"},[t._m(2),t._v(" "),t._l(t.contentIndexList.nationList,function(s,e){return a("div",{key:e,staticClass:"album-icon"},[a("div",{staticClass:"album-img",on:{click:function(i){return t.onPlayAlbum(s.albumId)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],staticClass:"banner",attrs:{alt:""}}),t._v(" "),a("img",{staticClass:"cover",attrs:{src:i("mHbx"),alt:""}})]),t._v(" "),a("p",{staticClass:"album-sub-1"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"album-sub-2"},[t._v(t._s(s.detail))])])})],2):t._e(),t._v(" "),t.contentIndexList.wealthList.length>0?a("div",{staticClass:"row album-info"},[t._m(3),t._v(" "),t._l(t.contentIndexList.wealthList,function(s,e){return a("div",{key:e,staticClass:"album-icon"},[a("div",{staticClass:"album-img",on:{click:function(i){return t.onPlayAlbum(s.albumId)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],staticClass:"banner",attrs:{alt:""}}),t._v(" "),a("img",{staticClass:"cover",attrs:{src:i("mHbx"),alt:""}})]),t._v(" "),a("p",{staticClass:"album-sub-1"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"album-sub-2"},[t._v(t._s(s.detail))])])})],2):t._e(),t._v(" "),t.contentIndexList.emtionList.length>0?a("div",{staticClass:"row album-info"},[t._m(4),t._v(" "),t._l(t.contentIndexList.emtionList,function(s,e){return a("div",{key:e,staticClass:"album-icon"},[a("div",{staticClass:"album-img",on:{click:function(i){return t.onPlayAlbum(s.albumId)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],staticClass:"banner",attrs:{alt:""}}),t._v(" "),a("img",{staticClass:"cover",attrs:{src:i("mHbx"),alt:""}})]),t._v(" "),a("p",{staticClass:"album-sub-1"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"album-sub-2"},[t._v(t._s(s.detail))])])})],2):t._e(),t._v(" "),t.contentIndexList.sleepyList.length>0?a("div",{staticClass:"row album-info"},[t._m(5),t._v(" "),t._l(t.contentIndexList.sleepyList,function(s,e){return a("div",{key:e,staticClass:"album-icon"},[a("div",{staticClass:"album-img",on:{click:function(i){return t.onPlayAlbum(s.albumId)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.uri,expression:"item.uri"}],staticClass:"banner",attrs:{alt:""}}),t._v(" "),a("img",{staticClass:"cover",attrs:{src:i("mHbx"),alt:""}})]),t._v(" "),a("p",{staticClass:"album-sub-1"},[t._v(t._s(s.title))]),t._v(" "),a("p",{staticClass:"album-sub-2"},[t._v(t._s(s.detail))])])})],2):t._e()]),t._v(" "),a("audio-player",{attrs:{posSty:t.posSty}}),t._v(" "),t._m(6)],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"album-title"},[this._v("精品推荐")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"album-title"},[this._v("性格养成")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"album-title"},[this._v("国学熏陶")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"album-title"},[this._v("财商启蒙")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"album-title"},[this._v("情商启蒙")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("p",{staticClass:"album-title"},[this._v("哄睡专区")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"qr"},[s("img",{attrs:{src:i("zqjc"),alt:""}}),this._v(" "),s("p",[this._v("下载火火兔APP")]),this._v(" "),s("p",[this._v("体验更多教育资")]),this._v(" "),s("p",[this._v("源服务")])])}]};var r=i("VU/8")(l,c,!1,function(t){i("jAme")},"data-v-0b8536f6",null);s.default=r.exports},zqjc:function(t,s,i){t.exports=i.p+"static/img/wx-qr.1aef9c6.png"}});
//# sourceMappingURL=15.dc50052ddf51fbd9f975.js.map