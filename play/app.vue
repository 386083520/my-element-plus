<template>
<ell-checkbox-group v-model="checkList" @change="handleChange">
    <ell-checkbox label="Option A" value="Value A" />
    <ell-checkbox label="Option B" value="Value B" />
    <ell-checkbox label="Option C" value="Value C" />
    <ell-checkbox label="disabled" value="Value disabled" disabled />
    <ell-checkbox
      label="selected and disabled"
      value="Value selected and disabled"
      disabled
    />
  </ell-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['Value selected and disabled', 'Value A'])

const handleChange = (value) => {
  console.log('change', value)
}
</script>

