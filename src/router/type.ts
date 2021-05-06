/*
 * @Author: linzq
 * @Date: 2021-05-06 23:02:12
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-06 23:12:58
 * @Description: 接口类型
 */
import type { RouteRecordRaw } from 'vue-router';
import { RoleEnum } from '/@/enums/roleEnum';

import { defineComponent } from 'vue';

export type Component<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface RouteMeta {
  // title
  title: string;
  // Whether to ignore permissions
  ignoreAuth?: boolean;
  // role info
  roles?: RoleEnum[];
  // Whether not to cache
  ignoreKeepAlive?: boolean;
  // Is it fixed on tab
  affix?: boolean;
  // icon on tab
  icon?: string;

  frameSrc?: string;

  // current page transition
  transitionName?: string;

  // Whether the route has been dynamically added
  hideBreadcrumb?: boolean;

  // Hide submenu
  hideChildrenInMenu?: boolean;

  // Carrying parameters
  carryParam?: boolean;

  // Used internally to mark single-level menus
  single?: boolean;

  // Currently active menu
  currentActiveMenu?: string;

  // Never show in tab
  hideTab?: boolean;

  // Never show in menu
  hideMenu?: boolean;

  isLink?: boolean;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  // props?: Recordable;
  fullPath?: string;
}
export type AppRouteModule = AppRouteRecordRaw;
