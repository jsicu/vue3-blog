/*
 * @Author: linzq
 * @Date: 2021-04-28 10:34:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-03 23:23:26
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
