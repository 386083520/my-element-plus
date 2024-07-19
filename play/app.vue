<template>
  <div>
    <ell-space wrap>
    <div v-for="i in 20" :key="i">
      <el-button type="primary"> Text button </el-button>
    </div>
  </ell-space>

    <div style="margin-bottom: 15px">fill: <el-switch v-model="fill" /></div>
    <ell-space :fill="fill" wrap>
      <el-card v-for="i in 3" :key="i" class="box-card">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fill = ref(true)
</script>

<style scoped>
</style>
