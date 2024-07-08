<template>
    <thumb size="50px"></thumb>
</template>
<script lang="ts" setup>
import Thumb from './thumb.vue'
const update = () => {
    console.log('update')
}

defineExpose({
    update
})
</script>
