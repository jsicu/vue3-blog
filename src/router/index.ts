/*
 * @Author: linzq
 * @Date: 2021-05-02 21:13:24
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 13:59:04
 * @Description: 路由
 */
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import type { Router, RouteRecordRaw } from 'vue-router';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    // component: () => import('../App.vue'),
  },
  {
    path: '/home',
    component: () => import('/@/pages/home.vue'),
  },
  {
    path: '/user/:id',
    component: () => import('/@/pages/user.vue'),
  },
  // 进度看板,
  {
    path: '/Trello',
    component: () => import('/@/pages/progress/index.vue'),
  },
];

const router: Router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: (constantRoutes as unknown) as RouteRecordRaw[],
  strict: true,
});

router.beforeEach((to, from, next) => {
  console.log(to, from, 111);
  next();
});

export default router;
