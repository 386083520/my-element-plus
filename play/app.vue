<template>
  <ell-input-number v-model="num" :step="0.05" step-strictly>abc</ell-input-number>
  {{ num }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(6.6)
</script>

<style>
</style>
