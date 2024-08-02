<template>
  <ell-input
    v-model="textarea"
    :rows="5"
    type="textarea"
    placeholder="Please input"
  />
  <span>{{ textarea }}</span>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('11')
setTimeout(() => {
  textarea.value = 'aaa'
}, 2000);
</script>

<style>
</style>
