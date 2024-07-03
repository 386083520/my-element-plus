<template>
  <ell-text>
    abc
  </ell-text>
</template>
<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
const handleClick = (env) => {
  console.log(env)
}
</script>
<style>
.ell-link {
  margin-right: 8px;
}
</style>
