/*
 * @Author: linzq
 * @Date: 2021-04-28 10:34:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-04-30 16:37:16
 * @Description:
 */
const { resolve } = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
module.exports = defineConfig({
  // root: './src/pages/progress',
  plugins: [vue()],
  server: {
    port: 3030, // 配置启用的端口号
  },
  resolve: {
    // 设置别名
    alias: {
      '@pages': resolve(__dirname, 'src/pages/'),
      '@components': resolve(__dirname, 'src/components/'),
      '@assets': resolve(__dirname, 'src/assets/'),
    },
  },
});
