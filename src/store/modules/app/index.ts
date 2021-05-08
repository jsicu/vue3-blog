/*
 * @Author: linzq
 * @Date: 2021-05-08 10:59:13
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 16:38:10
 * @Description:
 */
import { Module } from 'vuex';
import appStateTypes from './types';
import RootStateTypes from '../../types';

// Create a new store Modules.
const appModule: Module<appStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    name: 'app-module',
    count: 1,
    signState: '',
    signResult: false,
  },
  mutations: {
    DOUBLE_COUNT(state: appStateTypes) {
      state.count *= 2;
    },
    handleSign(state: appStateTypes) {
      if (state.signResult) {
        state.signState = false;
        setTimeout(() => {
          state.signResult = false;
        }, 2000);
      } else {
        console.log(123);
        state.signState = true;
        setTimeout(() => {
          state.signResult = true;
        }, 2000);
      }
    },
  },
  actions: {},
};

export default appModule;
