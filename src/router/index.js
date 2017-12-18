import Vue from 'vue';
import Router from 'vue-router';
import index from '@/views/index';
import room from '@/views/room';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/room/:id',
      name: 'Room',
      component: room,
    },
  ],
});
