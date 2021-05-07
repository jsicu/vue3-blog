<!--
 * @Author: linzq
 * @Date: 2021-05-04 00:32:44
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 15:57:22
 * @Description: 进度看板
-->
<template>
  <div class="bg-img">
    <p class="title">进度看板</p>
    <div class="parent">
      <Tabs />
      <Tabs />
      <Tabs />
    </div>
  </div>

</template>

<script setup>
import Tabs from './components/tabs.vue';
</script>

<style lang='less' scoped>
.bg-img {
  background: url('../../assets/sky.jpg') no-repeat;
  min-height: 100vh;
  .title {
    font-size: x-large;
    font-weight: 600;
    color: #ebecf0;
    padding: 12px;
  }
  .parent {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
</style>