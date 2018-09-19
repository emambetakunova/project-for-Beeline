import Vue from 'vue'
import Vuex from 'vuex'
import * as types from "./mutation-types";
import {app} from "../main";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  state: {
    messageType: 'rew',
    showThanks: false,
    showRating: true,
    showInterview: false,
    showMsg: false,
    showMsgOwn: false,
  },
  mutations: {
    [types.changeMessageType]: (state, payload) => {
      this.messageType = payload;
    },

    [types.SET_LANG](state, payload) {
      app.$i18n.locale = payload;
    }

  }, actions: {
    changeMessageType: (context, payload) => {
      context.commit('changeMessageType', payload);
    },
    setLang({commit}, payload) {
      commit(types.SET_LANG, payload);
    }
  }
})
