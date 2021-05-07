<!--
 * @Author: linzq
 * @Date: 2021-05-07 16:19:48
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-07 20:48:57
 * @Description: 图标组件
-->
<template>
  <!-- 使用远程图片 -->
  <div v-if="isExter" :style="styleExternalIcon" class="svg-external-icon svg-icon" />
  <!-- 使用本地svg -->
  <svg v-else :style="getStyle" aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts">
import type { CSSProperties } from 'vue';
import { defineComponent, computed } from 'vue';
import { isExternal } from '/@/utils/validate';
// import ids from 'virtual:svg-icons-names';

export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
  },
  setup(props) {
    const isExter = isExternal(props.name);
    const styleExternalIcon = computed(() => {
      return {
        mask: `url(${props.name}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`,
      };
    });
    const getStyle = computed(
      (): CSSProperties => {
        const { size } = props;
        let s = `${size}`;
        s = `${s.replace('px', '')}px`;
        return {
          width: s,
          height: s,
        };
      }
    );
    const symbolId = computed(() => `#svg-${props.name}`);
    return { symbolId, isExter, styleExternalIcon, getStyle };
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
