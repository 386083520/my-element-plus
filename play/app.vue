<template>
<ell-radio-group v-model="radio" size="large">
    <ell-radio-button>New York</ell-radio-button>
    <ell-radio-button>New York1</ell-radio-button>
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
