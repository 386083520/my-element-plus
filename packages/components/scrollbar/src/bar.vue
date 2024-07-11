<template>
    <thumb :size="sizeWidth" :move="moveX" :always="always" :ratio="ratioX"></thumb>
    <thumb :size="sizeHeight" :move="moveY" :always="always" :ratio="ratioY" vertical></thumb>
</template>
<script lang="ts" setup>
import Thumb from './thumb.vue'
import { scrollbarContextKey } from './constants';
import { inject, ref } from 'vue';
import { GAP } from "./util";
import { barProps } from './bar';

const props = defineProps(barProps)

const sizeHeight = ref('')
const moveY = ref(0)
const ratioY = ref(1)
const sizeWidth = ref('')
const moveX = ref(0)
const ratioX = ref(1)

const scrollbar = inject(scrollbarContextKey)

const handleScroll = (wrap: HTMLDivElement) => {
    console.log('scroll')
    if(wrap) {
        const offsetHeight =  wrap.offsetHeight - GAP
        const offsetWidth =  wrap.offsetWidth - GAP
        moveY.value = ((wrap.scrollTop * 100) / offsetHeight) * ratioY.value
        moveX.value = ((wrap.scrollLeft * 100) / offsetWidth) * ratioX.value
    }
}

const update = () => {
    const wrap = scrollbar?.wrapElement
    if(!wrap) return
    const offsetHeight = wrap.offsetHeight - GAP
    const offsetWidth = wrap.offsetWidth - GAP
    const originalHeight = offsetHeight ** 2 / wrap.scrollHeight
    const originalWidth = offsetWidth ** 2 / wrap.scrollWidth
    const height = Math.max(originalHeight, props.minSize)
    const width = Math.max(originalWidth, props.minSize)

    ratioY.value = (originalHeight/(offsetHeight - originalHeight))/(height/(offsetHeight - height))
    ratioX.value = (originalWidth/(offsetWidth - originalWidth))/(width/(offsetWidth - width))

    sizeHeight.value =  height + GAP < offsetHeight ? `${height}px` : ''
    sizeWidth.value =  width + GAP < offsetWidth ? `${width}px` : ''
}

defineExpose({
    update,
    handleScroll
})
</script>
