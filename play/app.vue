<template>

<ell-checkbox-group v-model="checkboxGroup1" size="large">
      <ell-checkbox-button label="Option1" value="Value1" disabled>aaa</ell-checkbox-button>
      <ell-checkbox-button label="Option2" value="Value2" disabled>bbb</ell-checkbox-button>
      <ell-checkbox-button label="Option3" value="Value3">ccc</ell-checkbox-button>
</ell-checkbox-group>
<ell-checkbox-group v-model="checkboxGroup1">
      <ell-checkbox-button label="Option1" value="Value1" disabled>aaa</ell-checkbox-button>
      <ell-checkbox-button label="Option2" value="Value2" disabled>bbb</ell-checkbox-button>
      <ell-checkbox-button label="Option3" value="Value3">ccc</ell-checkbox-button>
</ell-checkbox-group>
<ell-checkbox-group v-model="checkboxGroup1"  size="small">
      <ell-checkbox-button label="Option1" value="Value1" disabled>aaa</ell-checkbox-button>
      <ell-checkbox-button label="Option2" value="Value2" disabled>bbb</ell-checkbox-button>
      <ell-checkbox-button label="Option3" value="Value3">ccc</ell-checkbox-button>
</ell-checkbox-group>
{{ checkboxGroup1 }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkboxGroup1 = ref(['Value1'])
const checked4 = ref(false)
</script>
