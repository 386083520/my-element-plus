<template>
  <ell-checkbox v-model="checked2" size="large">Not disabled</ell-checkbox>
  <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
  <ell-checkbox v-model="checked2"  size="small">Not disabled</ell-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked2 = ref(false)
</script>