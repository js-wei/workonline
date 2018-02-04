// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//animate.css
import 'vue2-animate/dist/vue2-animate.min.css';

//MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

//font-icon
import 'vue-awesome-for-toolbar/icons'
import Icon from 'vue-awesome-for-toolbar/components/Icon.vue'
Vue.component('icon', Icon)

//过滤器
import Filters from './filters'
Object.keys(Filters).forEach(key => Vue.filter(key, Filters[key]))

//
import Metheds from './metheds'
Object.keys(Metheds).forEach(key => Vue.prototype[key] = Metheds[key])

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//高德地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '4ec8d0cfef06810838575a0a95e0602e',
  // 插件集合
  plugin: ['AMap.Autocomplete','AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor','AMap.CircleEditor', 'AMap.Geolocation'
  ],
  uiVersion: '1.0'
});

//Vuex
import store from './store'

//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) {  //配置发送请求的信息
  store.dispatch('SHOW_LOADING');
  return config;
}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) { //配置请求回来的信息
  store.dispatch('HIDE_LOADING');
  return response;
}, function (error) {
  return Promise.reject(error);
});

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.logined) {
      // next({
      //   path: '/login',
      //   query: { redirect: to.fullPath }
      // })
      next()
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
