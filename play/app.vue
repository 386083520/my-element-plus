<template>
<ell-row :gutter="10">
    <ell-col :xs="8" :sm="6" :md="4" :lg="obj" :xl="obj">
      <div class="grid-content bg-purple" />
    </ell-col>
    <ell-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-light" />
    </ell-col>
    <ell-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple" />
    </ell-col>
    <ell-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-light" />
    </ell-col>
  </ell-row>
</template>

<script setup  lang="ts">
let obj = {
  "span": 4,
  "push": 4
}
</script>

<style>
  .elll-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .elll-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
