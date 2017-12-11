import Vue from 'vue';
import Vuex from 'vuex';
import poker from './modules/poker';
import game from './modules/game';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    poker,
    game,
  },
});
