/*
 * @Author: linzq
 * @Date: 2021-05-06 23:31:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 20:42:10
 * @Description:
 */
import type { UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';

import { resolve } from 'path';
import { loadEnv } from 'vite';

import pkg from './package.json';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: new Date().getTime(),
};
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  // const viteEnv = wrapperEnv(env);

  // const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

  const isBuild = command === 'build';

  return {
    // base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
        // ['@vue/compiler-sfc', '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'],
      ],
    },
    server: {
      port: 3030,
      // port: VITE_PORT,
      // Load proxy configuration from .env
      // proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: 'es2015',
      // outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          keep_infinity: true,
          // Used to delete console in production environment
          drop_console: false,
          drop_debugger: true,
          // drop_console: VITE_DROP_CONSOLE,
        },
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 1500,
    },
    define: {
      // setting vue-i18-next
      // Suppress warning
      __VUE_I18N_LEGACY_API__: false,
      __VUE_I18N_FULL_INSTALL__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,

      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       modifyVars: generateModifyVars(),
    //       javascriptEnabled: true,
    //     },
    //   },
    // },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    // plugins: createVitePlugins(viteEnv, isBuild),
    plugins: [
      vue(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
        // Specify symbolId format
        symbolId: 'svg-[dir]-[name]',
      }),
    ],
    // 还没搞明白，注释
    optimizeDeps: {
      // include: ['element-plus', 'element-plus/lib/theme-chalk/index.css'],
      // exclude: ['element-plus'],
    },
  };
};
