<template>
  <!-- <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row> -->
  <ell-button>default</ell-button>
  <ell-button plain>default</ell-button>
  <ell-button type="primary" plain>Primary</ell-button>
    <ell-button type="success">Success</ell-button>
    <ell-button type="info">Info</ell-button>
    <ell-button type="warning">Warning</ell-button>
    <ell-button type="danger">Danger</ell-button>
</template>
<script setup lang="ts">
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