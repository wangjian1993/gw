import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAMap from 'vue-amap'
import Vuerify from 'vuerify'
import routes from './router/routes'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import store from './store'
import 'babel-polyfill'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import {
  Message,
  Image,
  Dialog,
  Form,
  FormItem,
  Input,
  Button,
  Rate,
  MessageBox
} from 'element-ui'
Vue.use(Image)
Vue.use(VueAMap)
Vue.use(Dialog).use(Form).use(FormItem).use(Input).use(Button).use(Rate);
Vue.component(MessageBox.name, MessageBox);
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
VueAMap.initAMapApiLoader({
  key: 'b86d24b211e4d2513f280f8eb458c61f',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',
    'AMap.PolyEditor', 'AMap.CircleEditor'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})

Vue.use(Vuerify /*, add rules */ )
Vue.use(VueRouter)

const router = new VueRouter({
  //   mode: 'history',// dev
  mode: 'hash', // pro
  base: __dirname,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

Vue.use(VueLazyload, {
  proLoad: 1.3,
  loading: require('@/assets/img/loading.gif'),
  attempt: 3
})

new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
