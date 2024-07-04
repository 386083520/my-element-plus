<template>
  <ell-text class="mx-1" size="large">Large</ell-text>
  <ell-text class="mx-1">Default</ell-text>
  <ell-text class="mx-1" size="small">Small</ell-text>
</template>
<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
const handleClick = (env) => {
  console.log(env)
}
</script>
<style>
.mx-1 {
  margin-left: 5px;
  margin-right: 5px;
}
.ell-link {
  margin-right: 8px;
}
</style>
