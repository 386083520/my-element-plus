<template>
  <ell-checkbox-group  size="large">
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
  </ell-checkbox-group>
  <ell-checkbox-group>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
  </ell-checkbox-group>
  <ell-checkbox-group  size="small">
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
    <ell-checkbox v-model="checked2">Not disabled</ell-checkbox>
  </ell-checkbox-group>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked2 = ref(false)
</script>