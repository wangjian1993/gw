webpackJsonp([4],{"39Q8":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("vNF5");function s(t,i,a){return i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}var e={data:function(){return{bannerList:[a("BMXX")],bgList:[{uri:a("gDSd"),id:"about"},{uri:a("K2Lj"),id:"growth"},{uri:a("AvhA"),id:"product"},{uri:a("jYVJ"),id:"honor"},{uri:a("z3Uz"),id:"content"},{uri:a("xZIn"),id:"statement"}],isFixed:!1,ticking:!1,minH:160}},computed:{classes:function(){var t;return[(t={},s(t,"nav-bar-fiexed",this.isFixed),s(t,"nav-bar",!this.isFixed),t)]}},mounted:function(){Object(n.b)(window,"scroll",this.handleScroll)},beforeDestroy:function(){Object(n.a)(window,"scroll",this.handleScroll)},methods:{handleScroll:function(){this.ticking||(requestAnimationFrame(this.realFunc),this.ticking=!0)},realFunc:function(){this.isFixed=window.pageYOffset>=this.minH,this.ticking=!1}}},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container",staticStyle:{"padding-top":"1px",position:"relative"}},[i("div",{staticClass:"bg-white",class:this.classes},[this._m(0)]),this._v(" "),i("div",{staticClass:"brand-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.bannerList[0],expression:"bannerList[0]"}],staticClass:"banner",attrs:{alt:""}})]),this._v(" "),this._l(this.bgList,function(t,a){return i("div",{key:a,staticClass:"brand-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.uri,expression:"item.uri"}],attrs:{id:t.id,alt:""}})])})],2)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"nav-bar-warp"},[a("a",{staticClass:"nav-opt clear",attrs:{href:"#about"}},[a("p",[t._v("关于我们")]),t._v(" "),a("p",[t._v("About us")])]),t._v(" "),a("a",{staticClass:"nav-opt",attrs:{href:"#growth"}},[a("p",[t._v("发展历程")]),t._v(" "),a("p",[t._v("Growth history")])]),t._v(" "),a("a",{staticClass:"nav-opt",attrs:{href:"#product"}},[a("p",[t._v("产品品质")]),t._v(" "),a("p",[t._v("Product quality")])]),t._v(" "),a("a",{staticClass:"nav-opt",attrs:{href:"#honor"}},[a("p",[t._v("企业荣誉")]),t._v(" "),a("p",[t._v("Our honor")])]),t._v(" "),a("a",{staticClass:"nav-opt",attrs:{href:"#content"}},[a("p",[t._v("内容体系")]),t._v(" "),a("p",[t._v("Content system")])]),t._v(" "),a("a",{staticClass:"nav-opt",attrs:{href:"#statement"}},[a("p",[t._v("品牌信息声明")]),t._v(" "),a("p",[t._v("Brand information statement")])])])}]};var o=a("VU/8")(e,r,!1,function(t){a("HLx/")},"data-v-97d4e244",null);i.default=o.exports},AvhA:function(t,i,a){t.exports=a.p+"static/img/bg-3.4c71323.png"},BMXX:function(t,i,a){t.exports=a.p+"static/img/banner.21f5661.png"},"HLx/":function(t,i){},K2Lj:function(t,i,a){t.exports=a.p+"static/img/bg-2.864b481.png"},gDSd:function(t,i,a){t.exports=a.p+"static/img/bg-1.0b0f201.png"},jYVJ:function(t,i,a){t.exports=a.p+"static/img/bg-4.3aa9029.jpg"},xZIn:function(t,i,a){t.exports=a.p+"static/img/bg-6.85995de.jpg"},z3Uz:function(t,i,a){t.exports=a.p+"static/img/bg-5.99a8dee.jpg"}});
//# sourceMappingURL=4.fbb901efa8079347c6ea.js.map