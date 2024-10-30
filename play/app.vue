<template>
<ell-checkbox
    v-model="checkAll"
    :indeterminate="isIndeterminate"
    @change="handleChange"
  >
    Check all
  </ell-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(false)
const handleChange = (e) => {
  console.log('change', e)
}
</script>

