<template>
  <ell-row class="row-bg">
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple-light"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
</ell-row>
<ell-row class="row-bg" justify="center">
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple-light"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
</ell-row>
<ell-row class="row-bg" justify="end">
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple-light"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
</ell-row>
<ell-row class="row-bg" justify="space-between">
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple-light"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
</ell-row>
<ell-row class="row-bg" justify="space-around">
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple-light"></div></ell-col>
  <ell-col :span="6"><div class="grid-content bg-purple"></div></ell-col>
</ell-row>
</template>

<style>
  .ell-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ell-col {
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
