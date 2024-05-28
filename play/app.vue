<template>
  <ell-button type="primary" :icon="Edit" />
    <ell-button type="primary" :icon="Share" />
    <ell-button type="primary" :icon="Delete" />
    <ell-button type="primary" :icon="Search">Search</ell-button>
    <ell-button type="primary">
      Upload<ell-icon class="el-icon--right"><Upload /></ell-icon>
    </ell-button>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
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
