webpackJsonp([22],{"6WeU":function(t,e){},CyKv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("4YfN"),n=a.n(i),r=a("HVJf"),s={data:function(){return{name:"",type:""}},computed:n()({},Object(r.b)(["proDetailList"]),{isShowDownload:function(){return this.type<=6}}),created:function(){this.name=this.$route.query.name,this.type=this.$route.query.type},mounted:function(){var t=this;this.$nextTick(function(){t.$store.dispatch("getProductDetailByName",t.name)})}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{padding:"50px 0"}},[a("div",{staticClass:"row"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"active"},[t._v("产品详情")]),t._v(" "),t.isShowDownload?a("li",[a("router-link",{attrs:{to:{name:"productDownload",query:{type:t.type,name:t.name}}}},[t._v("专属资源下载")])],1):t._e()])]),t._v(" "),a("div",{staticClass:"content"},t._l(t.proDetailList,function(t,e){return a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.uri,expression:"item.uri"}],key:e,attrs:{alt:""}})}),0)])},staticRenderFns:[]};var c=a("C7Lr")(s,o,!1,function(t){a("6WeU")},"data-v-ba082242",null);e.default=c.exports}});
//# sourceMappingURL=22.716d7cd6dae4683d2b00.js.map