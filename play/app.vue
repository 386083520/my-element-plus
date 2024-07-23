<template>
  <ell-input placeholder="Please input" v-model="input"></ell-input>
  <div>{{ input }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
setTimeout(() => {
  input.value='abcd'
}, 2000);
</script>

<style>
</style>
