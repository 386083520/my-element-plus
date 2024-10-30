<template>
<el-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleChange"
  >
    Check all
  </el-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(false)
const handleChange = (val, e) => {
  console.log('change', val, e)
}
</script>

