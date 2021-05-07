<!--
 * @Author: linzq
 * @Date: 2021-05-07 15:33:42
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 16:55:36
 * @Description: 需求卡片
-->
<template>
  <div class="card">
    <div>标志</div>
    <span class="title">开发评价功能</span>
    <div>功能点</div>
    <svg-icon :icon-class="'eye-open'" />
  </div>
</template>
<script setup>
</script>
<style lang='less' scoped>
.card {
  margin-top: 8px;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  .title {
    color: #172b4d;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
  }
}
</style>