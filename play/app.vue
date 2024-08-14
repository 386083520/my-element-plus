<template>
<ell-radio v-model="radio" value="disabled">Option A</ell-radio>
  <ell-radio v-model="radio" value="selected and disabled">
    Option B
  </ell-radio>
  {{ radio }}
   <!-- <input type="radio" value="1" v-model="radio1"/>
   <input type="radio" value="2" v-model="radio1"/>
   {{ radio1 }} -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
const radio1 = ref('1')
const handleChange = (e) => {
  radio1.value = e.target.value
}
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
