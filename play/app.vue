<template>
  <ell-link :icon="Edit">Edit</ell-link>
    <ell-link>
      Check<ell-icon class="el-icon--right"><icon-view /></ell-icon>
    </ell-link>
</template>
<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>
<style>
.ell-link {
  margin-right: 8px;
}
</style>
