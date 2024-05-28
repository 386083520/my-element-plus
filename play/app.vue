<template>
  <ell-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
    >
      {{ button.text }}
    </ell-button>
</template>
<script setup lang="ts">
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
</script>
<style>
.mb-4 {
  margin-bottom: 10px;
}
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
