<template>
  <ell-input-number v-model="num" :min="5" :max="10">abc</ell-input-number>
  {{ num }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(6)
setTimeout(() => {
  num.value = 'a'
}, 2000);
</script>

<style>
</style>
