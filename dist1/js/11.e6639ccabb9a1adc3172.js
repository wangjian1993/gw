webpackJsonp([11],{"F6k/":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAhCAMAAABkz+JgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAE4UExURQAAAJLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgZLVgfZZxvgAAABndFJOUwD5K/AK/BzS9v46L7feDwbv4cKykIrlC/1DKAl218gCfrkEcZ1405cXVGweEtUxYfVpzeoVbU4IAQM1Kbbx7uOI6KRbFhhzRSC+By3ts5shq2M0+1eprhs3hCIqlhG4vAVC3FB7ROCd+TzHAAABM0lEQVQ4y4XUZ1vCMBAA4A7pYIOAgAsV3HtvVNzg3nt7//8f2IYkjZqRD21yfZ8+7d0lmqYY7Z8fKlL4hi+5eM3mAYpS8vQC3miRkZFOn5gysh/zCbxLiJVCBGwxidugMok0JpATmgFCwG0TkAkIxhufrEwyJsMlhzZD4JlrNhiRPueS5RAVekc382AwQ+qyNE1JbJwRvbtJqOD5MCVd2wzZG/Mi66NovmMSEmUyc3LdjGXRqkzIaiJoxjsHB50bb2mQD+5ZoOQyFfznsbduxfMDprUeHnVqLoraLal2/Fc67q8oOiWvqVp/kzafIzU+c9HdrP/P7GwUozy6hgq89C+WXKZGfYKOGXIo2RJ2XjiJSb9kQ0U2m5k0ZBvKmPHNlHx7RxoAR6pTIqyvWSqj1eY4wR9CA4Ik/vVA2gAAAABJRU5ErkJggg=="},JTDY:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaAQMAAACThN6NAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURQAAAP8FTW7lREoAAAABdFJOUwBA5thmAAAAF0lEQVQI12P4////AQYwcYCBgY4E3F4AL6Qv9YJ7SlkAAAAASUVORK5CYII="},OQyM:function(t,s){},uj0S:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var g={render:function(){var t=this,s=t.$createElement,g=t._self._c||s;return g("div",{staticClass:"container",staticStyle:{padding:"50px 0"}},[g("ol",{staticClass:"breadcrumb"},[g("li",[g("router-link",{attrs:{to:{name:"service"}}},[t._v(" 服务")])],1),t._v(" "),g("li",[g("router-link",{attrs:{to:{name:"selfHelp"}}},[t._v(" 自助查询")])],1),t._v(" "),g("li",{staticClass:"active"},[t._v("售后条款")])]),t._v(" "),g("div",{staticClass:"content bg-white"},[t._m(0),t._v(" "),g("div",{staticClass:"check-box"},[g("img",{staticClass:"check-box-rect",attrs:{src:i("JTDY")},on:{click:function(s){return t.onCheck()}}}),t._v(" "),g("img",{directives:[{name:"show",rawName:"v-show",value:t.isCheck,expression:"isCheck"}],staticClass:"check-box-hook",attrs:{src:i("F6k/")}}),t._v(" "),(t.isCheck,g("span",[t._v(t._s(this.spanTxt))]))]),t._v(" "),g("div",{staticClass:"title-info"},[t._v("\n      根据您的反馈，我们为您提供了两种最优的解决办法\n    ")]),t._v(" "),g("div",{staticClass:"row",staticStyle:{"padding-left":"300px"}},[g("div",{staticClass:"service-icon",class:{"bg-blue":t.isCheck,"btn-limited":!t.isCheck}},[g("a",{on:{click:function(s){return s.preventDefault(),t.onJump("sendTerm")}}},[g("p",{staticStyle:{"font-size":"22px"}},[t._v("寄件维修")]),t._v(" "),g("p",{staticStyle:{"font-size":"14px"}},[t._v("自行寄送到售后维修")])])]),t._v(" "),g("div",{staticClass:"service-icon",class:{"bg-green":t.isCheck,"btn-limited":!t.isCheck}},[g("a",{on:{click:function(s){return s.preventDefault(),t.onJump("checkTerm")}}},[g("p",{staticStyle:{"font-size":"22px"}},[t._v("送检维修")]),t._v(" "),g("p",{staticStyle:{"font-size":"14px"}},[t._v("送到附近售后店维修(不支持寄修)")])])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"list"},[i("p",{staticClass:"title"},[t._v("售后服务政策")]),t._v(" "),i("p",{staticClass:"sub-title"},[t._v("在报修之前，请先了解我们的售后条款，方便我们更便捷的为您服务")]),t._v(" "),i("ul",[i("li",{staticClass:"indent"},[t._v("\n          一、深圳博悦生活用品有限公司承诺严格执行国家相关“三包”法规定，对中国大陆地区销售的任一产品进行三包服务。\n        ")]),t._v(" "),i("li",{staticClass:"indent"},[t._v("\n          二、三包有效凭证为所购发票或保修卡（需盖章），保修期为自购买之日起实现一年保修（有特别说明的除外）\n        ")]),t._v(" "),i("li",{staticClass:"indent"},[t._v("\n          三、产品换新服务，产品自购买日期15日内（含）出现产品质量问题，由购买经销商处进行换新，亦可寄回至我司售后服务进行更换（需要附带购机证明，寄回运费由客户承担）。\n        ")]),t._v(" "),i("li",{staticClass:"indent"},[t._v("\n          四、产品联保服务，客服可持有效购机凭证到就近授权维修店进行售后维修，维修无法处理的可以通过授权维修点向我司收货部寄回修，也可以直接寄我司售后部进行维修（寄修注意事项见下）。\n        ")]),t._v(" "),i("li",{staticClass:"indent"},[t._v("\n          五、为了给客户提供更便捷的服务，非保产品，超过保修期客户承担双休运费，小问题可以免费维修，其他如严重摔坏，进水等视型号及维修情况收取15~45/台维修费（含配件费）。\n        ")]),t._v(" "),i("li",{staticClass:"indent"},[t._v("\n          六、如有下列情形，需酌收材料成本及维修工时直接不予维修，由售后报价给客户或通知客户报废。"),i("br"),t._v("※超过保修期或不在保修范围的严重损坏（主板、电池、TF卡等同时多部件损坏）"),i("br"),t._v("※擅自拆焊零部件或修改而导致不良情形※零件之自然损耗及遇不可抗拒之天灾"),i("br"),t._v("※非经授权渠道购得此产品者或仿制品，非本公司产品\n        ")]),t._v(" "),i("div",{staticClass:"diliver-box"},[t._v("\n          送修方式\n        ")]),t._v(" "),i("li",[t._v("\n          邮寄地址：深圳市宝安区松岗燕罗街道塘下涌工业大道158号恒毅模具工业园区A栋105博悦公司（无需寄回配件）\n        ")]),t._v(" "),i("li",[t._v("\n          收件人：火火兔售后部收\n        ")]),t._v(" "),i("li",[t._v("\n          预留电话：0769-86950838，售后服务400热线：4000-585-959\n        ")]),t._v(" "),i("li",[t._v("\n          工作时间：周一至周五：8:30-18:00（法定节假日休息）\n        ")]),t._v(" "),i("li",[t._v("\n          寄修注意事项（重要）：一般情况下由客户承担往返运费，需要在包装中内附说明包括回寄人姓名，地址，电话，机器故障及服务需求等信息。\n        ")])])])}]};var e=i("C7Lr")({data:function(){return{isCheck:!1,spanTxt:"同意《博悦生活售后服务条款》"}},methods:{onCheck:function(){this.isCheck=!this.isCheck},onJump:function(t){this.isCheck&&this.$router.push({name:t})}}},g,!1,function(t){i("OQyM")},"data-v-bed97af6",null);s.default=e.exports}});
//# sourceMappingURL=11.e6639ccabb9a1adc3172.js.map