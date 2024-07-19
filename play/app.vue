<template>
  <ell-space wrap prefix-cls="abc">
    <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </ell-space>
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
