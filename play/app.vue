<template>
  <ell-text class="mx-1">Default</ell-text>
  <ell-text class="mx-1" type="primary">Primary</ell-text>
  <ell-text class="mx-1" type="success">Success</ell-text>
  <ell-text class="mx-1" type="info">Info</ell-text>
  <ell-text class="mx-1" type="warning">Warning</ell-text>
  <ell-text class="mx-1" type="danger">Danger</ell-text>
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
