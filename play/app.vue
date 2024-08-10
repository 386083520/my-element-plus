<template>
<ell-input-number v-model="num" :precision="2" @input="handleInput" @focus="handleFocus" @blur="handleBlur"/>
{{ num }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
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
