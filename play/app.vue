<template>
  <ell-input
    v-model="textarea1"
    style="width: 240px"
    autosize
    type="textarea"
    placeholder="Please input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea1 = ref('11')
</script>

<style>
</style>
