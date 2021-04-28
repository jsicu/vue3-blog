/*
 * @Author: linzq
 * @Date: 2021-04-28 10:34:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-04-28 11:28:42
 * @Description:
 */
const { resolve } = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3030, // 配置启用的端口号
  },
  resolve: {
    // 设置别名
    alias: {
      '@/views': resolve(__dirname, 'src/views/'),
      '@/styles': resolve(__dirname, 'src/styles/'),
    },
  },
});
