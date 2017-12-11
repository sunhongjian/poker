<template>
  <div class="layout">
    <div style="flex: 1">
    人数:<input type="text" v-model="playerCount">
    牌数:<input type="text" v-model="pokerCount">
    <button @click="init">重置</button>
    </div>
    <div class="poker-box">
      <div class="poker-item" v-for="(item,index) in pokerList" :key="index">
        <poker :name="item.name" :type="item.suit"></poker>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import _ from 'lodash';
import Game from '../js/init';
import Poker from './Poker';

export default {
  name: 'Game',
  components: {
    Poker,
  },
  created() {
    this.init();
  },
  data() {
    return {
      playerCount: 6,
      pokerCount: 4,
      pokerList: [],
    };
  },
  methods: {
    init() {
      const newGame = new Game(this.playerCount, this.pokerCount);
      let pokerList = newGame.init();
      pokerList = _.sortBy(pokerList, ['point']);
      pokerList.reverse();
      this.pokerList = pokerList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
}
.poker-box {
  display: flex;
  height: 80vh;
  flex-wrap: wrap;
  .poker-item {
  }
}
</style>
