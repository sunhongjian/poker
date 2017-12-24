<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'app',
  created() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.LOGIN_SUCCESS(userId);
    } else {
      this.$socket.emit('creatUser', (data) => {
        if (data) {
          localStorage.setItem('userId', data);
          this.LOGIN_SUCCESS(data);
        }
      });
    }
  },
  sockets: {
    connect_error() {
      console.log('网络连接异常');
    },
  },
  methods: {
    ...mapMutations(['LOGIN_SUCCESS']),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
