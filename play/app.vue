<template>
  <ell-text class="w-150px mb-2" truncated>
    Self element set width 100px
  </ell-text>
  <el-row class="w-150px mb-2">
    <ell-text truncated>Squeezed by parent element</ell-text>
  </el-row>
  <ell-text line-clamp="2">
    The -webkit-line-clamp CSS property<br />
    allows limiting of the contents of<br />
    a block to the specified number of lines.
  </ell-text>
</template>
<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
const handleClick = (env) => {
  console.log(env)
}
</script>
<style>
.w-150px {
  width: 150px;
}
.mb-2 {
  margin-bottom: 10px;
}
.ell-link {
  margin-right: 8px;
}
</style>
