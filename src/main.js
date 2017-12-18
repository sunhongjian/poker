// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable*/
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import config from  './config/env'
// socket
import io from 'socket.io-client';
import VueSocketio from 'vue-socket.io';
const socketInstance = io(config.socketUrl);
Vue.use(VueSocketio, socketInstance);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
