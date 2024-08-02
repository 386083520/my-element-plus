<template>
  <ell-input
    v-model="textarea"
    :rows="5"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<style>
</style>
