<template>
  <el-space direction="vertical">
    <ell-text>span</ell-text>
    <ell-text tag="p">This is a paragraph.</ell-text>
    <ell-text tag="b">Bold</ell-text>
    <ell-text tag="i">Italic</ell-text>
    <ell-text>
      This is
      <ell-text tag="sub" size="small">subscript</ell-text>
    </ell-text>
    <ell-text>
      This is
      <ell-text tag="sup" size="small">superscript</ell-text>
    </ell-text>
    <ell-text tag="ins">Inserted</ell-text>
    <ell-text tag="dell">Delleted</ell-text>
    <ell-text tag="mark">Marked</ell-text>
  </el-space>
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
