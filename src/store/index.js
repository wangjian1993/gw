import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'; // 修改日志
Vue.use(Vuex)

import homeStore from './modules/homeStore'
import contentStore from './modules/contentStore'
import productStore from './modules/productStore'
import audioPlayStore from './modules/audioPlayStore'
import searchStore from './modules/searchStore'


const state = {
  requesting: false,
  error: {}
}

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
}
//const debug = process.env.NODE_ENV !== 'false'; // 开发环境中为true，否则为false
export default new Vuex.Store({
  state,
  getters,
  modules: {
    homeStore,
    contentStore,
    productStore,
    audioPlayStore,
    searchStore
  },
  //plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
})
