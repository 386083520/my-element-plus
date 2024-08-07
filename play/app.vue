<template>
  <ell-input-number v-model="num" :step="2">abc</ell-input-number>
  {{ num }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(6)
</script>

<style>
</style>
