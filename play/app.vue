<template>
<el-space direction="vertical">
    <el-space>
      <ell-input-number v-model="num" />
      <ell-input-number v-model="num">
        <template #decrease-icon>
          <el-icon>
            <ArrowDown />
          </el-icon>
        </template>
        <template #increase-icon>
          <el-icon>
            <ArrowUp />
          </el-icon>
        </template>
      </ell-input-number>
    </el-space>
    <el-space>
      <ell-input-number v-model="num" controls-position="right" />
      <ell-input-number v-model="num" controls-position="right">
        <template #decrease-icon>
          <el-icon>
            <Minus />
          </el-icon>
        </template>
        <template #increase-icon>
          <el-icon>
            <Plus />
          </el-icon>
        </template>
      </ell-input-number>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'

const num = ref(1)
</script>

<style>
.mx-4 {
  margin: 0 10px;
}
</style>
