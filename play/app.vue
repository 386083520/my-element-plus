<template>
  <ell-checkbox type="checkbox" v-model="checkList" value="a"></ell-checkbox>
<ell-checkbox-group v-model="checkList">
    <ell-checkbox label="Option 1" value="Value 1" />
    <ell-checkbox label="Option 2 & Value 2"  value="Value 2"/>
  </ell-checkbox-group>
{{ checkList }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['a'])
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
