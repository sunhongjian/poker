<template>
  <div class="layout">
    <div class="center-flex">
      <span class="pointer" @click="createRoom">创建房间</span>
    </div>
    <div class="center-flex">
      <span class="pointer">加入房间</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import _ from 'lodash';

export default {
  name: 'index',
  sockets: {

  },
  created() {
    console.log(this.userId);
  },
  computed: {
    ...mapGetters(['userId']),
  },
  data() {
    return {

    };
  },
  methods: {
    createRoom() {
      this.$socket.emit('createRoom', this.userId, (data) => {
        this.$router.push({ name: 'Room', params: { id: data } });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pointer {
  cursor: pointer;
}
.layout {
  height: 100vh;
  display: flex;
  .center-flex {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
