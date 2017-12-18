<template>
  <div class="layout">
    <h2>{{roomId}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import _ from 'lodash';

export default {
  name: 'room',
  sockets: {

  },
  created() {
    this.roomId = this.$route.params.id;
  },
  computed: {
    ...mapGetters(['userId']),
  },
  data() {
    return {
      roomId: '',
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  height: 100vh;
  display: flex;
}
</style>
