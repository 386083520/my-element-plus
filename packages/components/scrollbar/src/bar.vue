<template>
    <thumb :size="sizeHeight"></thumb>
</template>
<script lang="ts" setup>
import Thumb from './thumb.vue'
import { scrollbarContextKey } from './constants';
import { inject, ref } from 'vue';
import { GAP } from "./util";

const sizeHeight = ref('')

const scrollbar = inject(scrollbarContextKey)
const update = () => {
    const wrap = scrollbar?.wrapElement
    if(!wrap) return
    const offsetHeight = wrap.offsetHeight - GAP
    const originalHeight = offsetHeight ** 2 / wrap.scrollHeight
    sizeHeight.value =  `${originalHeight}px`
}

defineExpose({
    update
})
</script>
