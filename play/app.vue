<template>
  <ell-input
    v-model="input"
    style="width: 240px"
    placeholder="Please input password"
    :suffixIcon="Calendar"
  >
  <template #append>
        <ell-button :icon="Search" />
      </template>
  </ell-input>
  <div>{{ input }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input = ref('123456')
</script>

<style>
</style>
