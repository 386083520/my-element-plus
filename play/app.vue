<template>
  <ell-input
    v-model="input"
    style="width: 240px"
    placeholder="Please input password"
    show-password
  />
  <div>{{ input }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('123456')
</script>

<style>
</style>
