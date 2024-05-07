<template>
  <!-- <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row> -->
  <ell-icon color="#000000" :size="18">
    <Edit/>
  </ell-icon>
</template>
<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
</script>
<style>
.ep-bg-purple {
  background-color: aquamarine;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>