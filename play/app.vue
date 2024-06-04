<template>
  <ell-button>button</ell-button>
  <ell-button tag="div" role="button" tabindex="0">div</ell-button>
  <ell-button
    type="primary"
    tag="a"
    href="https://github.com/element-plus/element-plus"
    target="_blank"
    rel="noopener noreferrer"
  >
    a
  </ell-button>
</template>
<script setup lang="ts">
import { Eleme } from '@element-plus/icons-vue'
</script>
<style>
.ell-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.ell-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>
