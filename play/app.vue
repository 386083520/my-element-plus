<template>
<!-- <ell-checkbox v-model="checked1">Disabled</ell-checkbox> -->
  {{ checked1 }}
  <input type="checkbox" v-model="checked1" true-value="1" false-value="0"/>
  <!-- <input type="checkbox" :checked="checked1" @change="handleChange"/> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref("1")

function handleChange(e) {
  console.log(e.target.checked)
  checked1.value = e.target.checked
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
