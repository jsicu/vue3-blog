/*
 * @Author: linzq
 * @Date: 2021-05-08 13:56:39
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 14:18:40
 * @Description: 类型文件
 */
import appStateTypes from './modules/app/types';

export default interface RootStareTypes {
  text: string;
}

export interface AllStateTypes extends RootStareTypes {
  appModule: appStateTypes;
}
