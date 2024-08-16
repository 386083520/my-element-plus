<template>
<ell-radio-group v-model="radio" size="large">
    <ell-radio-button value="New York">New York</ell-radio-button>
    <ell-radio-button value="New York1">New York1</ell-radio-button>
    <ell-radio-button value="New York2">New York2</ell-radio-button>
  </ell-radio-group>
  <ell-button>abc</ell-button>
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
