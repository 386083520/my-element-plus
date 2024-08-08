<template>
<ell-input-number
    v-model="num"
    :min="1"
    :max="10"
    controls-position="right"
    size="large"
    @change="handleChange"
  />
  <ell-input-number
    v-model="num"
    class="mx-4"
    :min="1"
    :max="10"
    controls-position="right"
    @change="handleChange"
  />
  <ell-input-number
    v-model="num"
    :min="1"
    :max="10"
    size="small"
    controls-position="right"
    @change="handleChange"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
