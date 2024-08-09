<template>
<ell-input-number v-model="num" @input="handleInput" @focus="handleFocus" @blur="handleBlur"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref('')
const handleInput = (value: number) => {
  console.log('input', value)
}
const handleBlur = (e) => {
  console.log('handleBlur', e)
}
const handleFocus = (e) => {
  console.log('handleFocus', e)
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
