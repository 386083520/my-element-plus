<template>
  <ell-input-number v-model="num">abc</ell-input-number>
  {{ num }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
</script>

<style>
</style>
