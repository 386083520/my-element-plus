<template>
    <thumb :size="sizeHeight" :move="moveY"></thumb>
</template>
<script lang="ts" setup>
import Thumb from './thumb.vue'
import { scrollbarContextKey } from './constants';
import { inject, ref } from 'vue';
import { GAP } from "./util";

const sizeHeight = ref('')
const moveY = ref(0)

const scrollbar = inject(scrollbarContextKey)

const handleScroll = () => {
    console.log('scroll')
}

const update = () => {
    const wrap = scrollbar?.wrapElement
    if(!wrap) return
    const offsetHeight = wrap.offsetHeight - GAP
    const originalHeight = offsetHeight ** 2 / wrap.scrollHeight
    sizeHeight.value =  `${originalHeight}px`
}

defineExpose({
    update,
    handleScroll
})
</script>
