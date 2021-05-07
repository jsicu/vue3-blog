/*
 * @Author: linzq
 * @Date: 2021-04-28 10:34:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 15:05:58
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '/@/style/index.less'; // global css

import router from './router';

const app = createApp(App);
app.use(router);
app.use(ElementPlus, { size: 'small', zIndex: 2000 });

app.mount('#app');
