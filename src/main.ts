/*
 * @Author: linzq
 * @Date: 2021-04-28 10:34:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 14:02:29
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import './style/index.less'; // global css
import 'vite-plugin-svg-icons/register';
import { key, store } from './store';

import SvgIcon from './components/Icon/index.vue'; // global css

import router from './router';

const app = createApp(App);

app.use(store, key);
app.use(router);
app.component('svg-icon', SvgIcon);
app.use(ElementPlus, { size: 'small', zIndex: 2000 });

app.mount('#app');
