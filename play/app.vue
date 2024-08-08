<template>
<ell-input-number v-model="num" @change="handleChange" :value-on-clear="8"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref('')
const handleChange = (value: number, oldValue: number) => {
  console.log('change111', value, oldValue)
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
