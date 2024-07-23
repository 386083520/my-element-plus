<template>
  <ell-input placeholder="Please input"></ell-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { SpaceInstance } from 'element-plus'

const direction = ref<SpaceInstance['direction']>('horizontal')
const fillRatio = ref(30)
</script>

<style>
.abc__item {
  border: 5px solid #f00;
}
</style>
