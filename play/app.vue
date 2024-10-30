<template>
<el-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
  >
    Check all
  </el-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
</script>

