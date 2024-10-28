<template>
<ell-checkbox v-model="checked1" disabled>Disabled</ell-checkbox>
<ell-checkbox v-model="checked2">Not disabled</ell-checkbox>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)

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
