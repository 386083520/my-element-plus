<template>
  <ell-button disabled>Default</ell-button>
  <ell-button type="primary" disabled>Primary</ell-button>
  <ell-button type="success" disabled>Success</ell-button>
  <ell-button type="info" disabled>Info</ell-button>
  <ell-button type="warning" disabled>Warning</ell-button>
  <ell-button type="danger" disabled>Danger</ell-button>
</template>
<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
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
