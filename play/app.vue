<template>
  <ell-link href="https://element-plus.org" target="_blank">default</ell-link>
    <ell-link type="primary">primary</ell-link>
    <ell-link type="success">success</ell-link>
    <ell-link type="warning">warning</ell-link>
    <ell-link type="danger">danger</ell-link>
    <ell-link type="info">info</ell-link>
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
