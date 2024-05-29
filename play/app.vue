<template>
  <ell-button type="primary" :loading-icon="Delete" loading>Loading</ell-button>
</template>
<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
</script>
<style>
.mb-4 {
  margin-bottom: 10px;
}
.ep-bg-purple {
  background-color: aquamarine;
}
.ell-row {
  margin-bottom: 20px;
}
.ell-row:last-child {
  margin-bottom: 0;
}
.ell-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
