/*
 * @Author: linzq
 * @Date: 2021-05-08 10:59:13
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 14:19:02
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
  },
  mutations: {
    DOUBLE_COUNT(state: appStateTypes) {
      state.count *= 2;
    },
  },
  actions: {},
};

export default appModule;
