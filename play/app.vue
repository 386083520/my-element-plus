<template>
  <ell-button-group>
    <ell-button type="primary" :icon="ArrowLeft">Previous Page</ell-button>
    <ell-button type="primary" :icon="Edit" />
    <ell-button type="primary">
      Next Page<ell-icon class="el-icon--right"><ArrowRight /></ell-icon>
    </ell-button>
  </ell-button-group>
  <el-button-group class="ml-4">
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
  </el-button-group>

</template>
<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
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
