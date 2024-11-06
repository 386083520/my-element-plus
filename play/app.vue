<template>
  <el-checkbox-group v-model="checkboxGroup1" size="large">
      <el-checkbox label="Option1" value="Value1" border />
      <el-checkbox label="Option2" value="Value2" border />
</el-checkbox-group>
<el-checkbox-group v-model="checkboxGroup1">
      <el-checkbox label="Option1" value="Value1" />
      <el-checkbox label="Option2" value="Value2" border />
</el-checkbox-group>
<el-checkbox-group v-model="checkboxGroup1" size="small">
      <el-checkbox label="Option1" value="Value1" border />
      <el-checkbox label="Option2" value="Value2" border />
</el-checkbox-group>
{{ checkboxGroup1 }}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkboxGroup1 = ref([])
const checked4 = ref(false)
</script>
