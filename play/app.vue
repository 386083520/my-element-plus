<template>
  <ell-input
    v-model="input"
    style="width: 240px"
    placeholder="Please input password"
    :suffixIcon="Calendar"
  >
  <template #prepend>
        <el-select v-model="select" placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
  </ell-input>
  <div>{{ input }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input = ref('123456')
const select = ref('')
</script>

<style>
</style>
