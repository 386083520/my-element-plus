<template>
  <ell-scrollbar :height="800" :always="true" :minSize="300" :viewStyle="{height: '1500px'}" :noresize="true">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </ell-scrollbar>
</template>
<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
const handleClick = (env) => {
  console.log(env)
}
</script>
<style>
.scrollbar-class {
  width: 500px;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
