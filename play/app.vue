<template>
  <ell-input-number v-model="num" :step="0.1" :precision="2">abc</ell-input-number>
  {{ num }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref('a')
</script>

<style>
</style>
