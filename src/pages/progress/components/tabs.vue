<!--
 * @Author: linzq
 * @Date: 2021-05-07 11:25:04
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 11:44:23
 * @Description: 标签页
-->
<template>
  <div class="tabs">
    <p class="title">进度看板</p>
    <Card />
    <Card />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import Card from './card.vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Tabs',
  components: { Card },
  setup: () => {
    // const appStore = useStore();
    // onMounted(() => {});
  },
});
</script>
<style lang='less' scoped>
.tabs {
  .title {
    font-weight: bolder;
    height: 20px;
    min-height: 20px;
    padding: 5px 10px;
    resize: none;
    max-height: 256px;
    -webkit-user-select: none;
    user-select: none;
  }
  background-color: cyan;
  border-radius: 8px;
  padding: 8px;
  margin: 12px 6px;
}
</style>