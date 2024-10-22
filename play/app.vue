<template>
<el-radio-group v-model="radio" size="large">
    <el-radio-button value="New York" label="New York"></el-radio-button>
    <el-radio-button value="New York1" label="New York1"></el-radio-button>
    <el-radio-button value="New York2" label="New York2"></el-radio-button>
  </el-radio-group>
  {{ radio }}
  <ell-radio-group v-model="radio2" size="large">
    <ell-radio label="New York"></ell-radio>
    <ell-radio value="New York1" label="New York1"></ell-radio>
    <ell-radio value="New York2" label="New York2"></ell-radio>
  </ell-radio-group>
  {{ radio2 }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('New York')
const radio2 = ref('New York')
const handleChange = (val) => {
  console.log('change', val)
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
