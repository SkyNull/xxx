// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex' //from './vuex/index.js'默认找
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入vue swiper插件
import 'swiper/dist/css/swiper.css'
//引入vue swiper CSS插件
//main.js代表全局
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

import axios from 'axios'
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5ba6fc43f1d0f1653d091b9e';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
