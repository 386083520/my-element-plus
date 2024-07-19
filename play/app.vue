<template>
  <div class="alignment-container">
    <ell-space>
      string
      <el-button> button </el-button>
      <el-card>
        <template #header> header </template>
        body
      </el-card>
    </ell-space>
  </div>
  <div class="alignment-container">
    <ell-space alignment="flex-start">
      string
      <el-button> button </el-button>
      <el-card>
        <template #header> header </template>
        body
      </el-card>
    </ell-space>
  </div>
  <div class="alignment-container">
    <ell-space alignment="flex-end">
      string
      <el-button> button </el-button>
      <el-card>
        <template #header> header </template>
        body
      </el-card>
    </ell-space>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--el-border-color);
}
</style>
