<template>
  <el-card style="max-width: 480px" header="header">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
  </el-card>

  <ell-card header="header" style="max-width: 480px">
    body111
    <template #header>
      header111
    </template>
  </ell-card>
</template>
