<template>
  <!-- <ell-row :gutter="20">
    <ell-col :span="6"><div class="grid-content ep-bg-purple" /></ell-col>
    <ell-col :span="6"><div class="grid-content ep-bg-purple" /></ell-col>
    <ell-col :span="6"><div class="grid-content ep-bg-purple" /></ell-col>
    <ell-col :span="6"><div class="grid-content ep-bg-purple" /></ell-col>
  </ell-row> -->
  <div class="mb-4">
    <ell-button>Default</ell-button>
    <ell-button type="primary">Primary</ell-button>
    <ell-button type="success">Success</ell-button>
    <ell-button type="info">Info</ell-button>
    <ell-button type="warning">Warning</ell-button>
    <ell-button type="danger">Danger</ell-button>
  </div>

  <div class="mb-4">
    <ell-button plain>Plain</ell-button>
    <ell-button type="primary" plain>Primary</ell-button>
    <ell-button type="success" plain>Success</ell-button>
    <ell-button type="info" plain>Info</ell-button>
    <ell-button type="warning" plain>Warning</ell-button>
    <ell-button type="danger" plain>Danger</ell-button>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.ep-bg-purple {
  background-color: aquamarine;
}
.ell-row {
  margin-bottom: 20px;
}
.ell-row:last-child {
  margin-bottom: 0;
}
.ell-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>