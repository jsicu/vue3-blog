<!--
 * @Author: linzq
 * @Date: 2021-05-07 15:33:42
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 09:53:54
 * @Description: 需求卡片
-->
<template>
  <div class="card">
    <div
      :class="{'sign-start': !state.signResult, 'keyframes': state.signState, 'sign-end': state.signResult && state.signState } "
      @click="resize">
      <!--  -->
      <span class="sign-title">开发</span>
    </div>
    <span class="title">{{sketch}}</span>
    <div class="state">
      <svg-icon name="multiple" size="13" /> &nbsp;{{completed}}/{{count}}
    </div>
    <button @click="test"> anniu </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Card',
  setup: () => {
    const count = ref(0);
    const sketch = '功能简述';
    const completed = ref(0);
    let signState = ref(false);
    let signResult = ref(false);
    const state = reactive({ signState: false, signResult: false });
    function resize() {
      signState.value = true;
      state.signState = true;
      setTimeout(() => {
        signResult.value = true;
        state.signResult = true;
        console.log(state);
      }, 2010);
    }
    function test() {
      signState.value = true;
      state.signState = true;
      setTimeout(() => {
        signResult.value = true;
        state.signResult = true;
        console.log(state);
      }, 2010);
    }
    return { count, completed, sketch, resize, signState, signResult, state, test };
  },
});
</script>
<style lang='less' scoped>
.card {
  margin-top: 8px;
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;

  .sign-start {
    background-color: red;
    border-radius: 5px;
    height: 10px;
    width: 45px;
  }
  .keyframes {
    animation-name: sign-start;
    animation-duration: 2s;
  }
  .sign-title {
    font-size: 10px;
    font-weight: bold;
    margin-left: 5px;
    color: white;
  }
  .sign-end {
    background-color: red;
    border-radius: 5px;
    height: 22px;
    width: 60px;
    line-height: 20px;
  }

  .title {
    display: inline-block;
    color: #172b4d;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-size: 14px;
    margin: 5px 0;
  }
  .state {
    font-size: 13px;
    color: #5e6c84;
    margin: 4px;
  }
}

@keyframes sign-start {
  0% {
    height: 10px;
    width: 45px;
  }
  50% {
    height: 10px;
    width: 60px;
  }
  100% {
    height: 22px;
    width: 60px;
    line-height: 20px;
  }
}
</style>