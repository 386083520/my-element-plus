<template>
<ell-radio v-model="radio" value="disabled">Option A</ell-radio>
  <ell-radio v-model="radio" value="selected and disabled">
    Option B
  </ell-radio>
  {{ radio }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
