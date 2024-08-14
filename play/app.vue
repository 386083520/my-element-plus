<template>
<div>
  <ell-radio v-model="radio" border value="disabled" size="large">Option A</ell-radio>
  <ell-radio v-model="radio" border value="selected and disabled" size="large">
    Option B
  </ell-radio>
</div>
<div>
  <ell-radio v-model="radio" border value="disabled">Option A</ell-radio>
  <ell-radio v-model="radio" border value="selected and disabled">
    Option B
  </ell-radio>
</div>
<div>
  <ell-radio v-model="radio" border value="disabled" size="small">Option A</ell-radio>
  <ell-radio v-model="radio" border value="selected and disabled" size="small">
    Option B
  </ell-radio>
</div>
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
