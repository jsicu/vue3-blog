/*
 * @Author: linzq
 * @Date: 2021-05-07 16:49:09
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 17:01:40
 * @Description:
 */
import { createApp } from 'vue';
import App from '../../App.vue';
const app = createApp(App);

import SvgIcon from '/@/components/Icon/index.vue'; // svg component

// register globally
app.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext: any) => requireContext.keys().map(requireContext);
requireAll(req);
