/*
 * @Author: linzq
 * @Date: 2021-05-08 10:59:03
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 14:20:16
 * @Description:
 */
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import RootStateTypes, { AllStateTypes } from './types';

import appModule from './modules/app';

export const store = createStore<RootStateTypes>({
  state: {
    text: 'This is Vuex Root.state.text',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appModule,
  },
});

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store');

export function useStore<T = AllStateTypes>() {
  return baseUseStore<T>(key);
}
