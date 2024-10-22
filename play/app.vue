<template>
<ell-checkbox v-model="checked1">Disabled</ell-checkbox>
  {{ checked1 }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
