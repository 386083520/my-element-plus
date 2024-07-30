<template>
  <ell-input placeholder="Please input" v-model="input" disabled></ell-input>
  <div>{{ input }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style>
</style>
