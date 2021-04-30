/*
 * @Author: linzq
 * @Date: 2021-04-28 10:34:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-04-30 16:47:09
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
// (async () => {
//   const app = createApp(App);

//   // Configure vuex store
//   setupStore(app);

//   // Initialize internal system configuration
//   initAppConfigStore();

//   // Register global components
//   registerGlobComp(app);

//   // Multilingual configuration
//   await setupI18n(app);

//   // Configure routing
//   setupRouter(app);

//   // router-guard
//   setupRouterGuard();

//   // Register global directive
//   setupGlobDirectives(app);

//   // Configure global error handling
//   setupErrorHandle(app);

//   // Mount when the route is ready
//   // https://next.router.vuejs.org/api/#isready
//   await router.isReady();

//   app.mount('#app', true);

//   if (import.meta.env.DEV) {
//     window.__APP__ = app;
//   }
// })();
