<!--
 * @Author: linzq
 * @Date: 2021-05-02 21:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 14:24:47
 * @Description: 
-->
<template>
  <div class="vuex-container page-container">
    <div class="page-title">Vuex Test Page</div>
    <p>store Root is: {{ text }}</p>
    <p>store doubleCount is: {{ count }}</p>
    <el-button type="primary" @click="double">double</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'Vuex',

  setup() {
    const store = useStore();
    const reactiveData = reactive({
      text: computed(() => store.state.text),
      count: computed(() => store.state.appModule.count),
    });

    const double = () => {
      store.commit('numFactoryModule/DOUBLE_COUNT');
    };

    return {
      ...toRefs(reactiveData),
      double,
    };
  },
});
</script>