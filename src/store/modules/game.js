/* eslint-disable*/
import * as types from '../mutation-types';

const state = {
  userId: '',
  id: '', // 聊天对话Id
};
// getters
const getters = {
  userId: state => state.userId,
};
// actions
const actions = {

};
// mutations
const mutations = {
  [types.LOGIN_SUCCESS](state, id) {
    state.userId = id;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
