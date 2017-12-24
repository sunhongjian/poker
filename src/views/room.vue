<template>
  <div class="layout">
    <h2>房间号{{roomId}}</h2>
    <h3>房间信息:</h3>
    <div>房主: {{roomInfoData.createUserId}}</div>
    <div>
      <li v-for="(item,index) in joinRoomTips" :key="index">
        {{item.msg}}
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import _ from 'lodash';
import fetch from '../utils/fetch';

export default {
  name: 'room',
  sockets: {
    hello(data) {
      this.joinRoomTips.push(data);
    },
  },
  created() {
    this.roomId = this.$route.params.id;
    this.getData();
  },
  computed: {
    ...mapGetters(['userId']),
  },
  data() {
    return {
      roomId: '',
      roomInfoData: {},
      joinRoomTips: [], // 进入房间提示信息
    };
  },
  methods: {
    async getData() {
      const roomInfoData = await fetch('GET', 'room', { id: this.roomId });
      this.roomInfoData = roomInfoData.data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  height: 100vh;
}
</style>
