<template>
  <ell-link href="https://element-plus.org" target="_blank" disabled>default</ell-link>
    <ell-link type="primary" href="http://www.baidu.com">primary</ell-link>
    <ell-link type="success" disabled  href="http://www.baidu.com">success</ell-link>
    <ell-link type="warning" disabled>warning</ell-link>
    <ell-link type="danger" disabled>danger</ell-link>
    <ell-link type="info" disabled>info</ell-link>
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
.ell-link {
  margin-right: 8px;
}
</style>
