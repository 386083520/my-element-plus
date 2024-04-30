<template>
  <div class="main">
    gdasfdsafa
    <ell-icon color="#409efc" size="30px" :style="{width:'80px',height: '80px'}" class="is-loading">
      <Loading />
  </ell-icon>
  <ell-card :bodyStyle="{'font-size': '14px'}">
    <template #header>
      <div>
        <span class="header-text">card header</span>
        <button class="test-btn">click me</button>
      </div>
    </template>
    rem is the best girl</ell-card>
  <ell-badge :showZero="true" :value="0" :max="-1">
    gsdafsad
  </ell-badge>
  </div>
</template>

<script setup  lang="ts">
import {Loading} from '@element-plus/icons-vue'
</script>

<style>
  .main {
    font-size: 25px;
  }
</style>
