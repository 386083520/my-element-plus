<template>
<ell-radio-group v-model="radio" size="large">
    <ell-radio :value="3"  @change="handleChange">Option A</ell-radio>
    <ell-radio :value="6">Option B</ell-radio>
    <ell-radio :value="9">Option C</ell-radio>
  </ell-radio-group>
  {{ radio }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
const handleChange = (val) => {
  console.log('change', val)
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
