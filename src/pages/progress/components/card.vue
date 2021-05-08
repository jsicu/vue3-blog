<!--
 * @Author: linzq
 * @Date: 2021-05-07 15:33:42
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-08 16:59:48
 * @Description: 需求卡片
-->
<template>
  <div class="card">
    <!-- 标志动画 -->
    <div
      :class="[{'keyframes-start': signState === true, 'keyframes-end': signState === false, 'sign-start': !signResult, 'sign-end': signResult && signState }] "
      @click="resize">
      <transition name="fade">
        <span v-if="signState" class="sign-title">开发</span>
      </transition>
    </div>
    <span class="title">{{sketch}}</span>
    <div class="state">
      <svg-icon name="multiple" size="12" /> &nbsp;{{completed}}/{{count}}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, computed, toRefs } from 'vue';
import { useStore } from '/@/store';

export default defineComponent({
  name: 'Card',
  setup: () => {
    const store = useStore();

    const count = ref(0);
    const sketch = '功能简述';
    const completed = ref(0);
    const reactiveData = reactive({
      signState: computed(() => store.state.appModule.signState),
      signResult: computed(() => store.state.appModule.signResult),
    });
    function resize() {
      store.commit('appModule/handleSign');
    }
    return { count, completed, sketch, resize, ...toRefs(reactiveData) };
  },
});
</script>
<style lang='less' scoped>
.card {
  margin-top: 8px;
  background-color: #fff;
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;

  .sign-start {
    background-color: red;
    border-radius: 5px;
    height: 10px;
    width: 45px;
  }
  .keyframes-start {
    animation-name: sign-start;
    animation-duration: 2s;
  }
  .keyframes-end {
    animation-name: sign-end;
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
    font-size: 12px;
    color: #5e6c84;
    margin: 3px 4px;
  }
}

// 标志显示动画
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
    background-color: red;
    border-radius: 5px;
    height: 22px;
    width: 60px;
    line-height: 20px;
  }
}
@keyframes sign-end {
  0% {
    background-color: red;
    border-radius: 5px;
    height: 22px;
    width: 60px;
    line-height: 20px;
  }
  50% {
    height: 10px;
    width: 60px;
  }
  100% {
    background-color: red;
    border-radius: 5px;
    height: 10px;
    width: 45px;
  }
}

// 标志文字过渡动画
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>