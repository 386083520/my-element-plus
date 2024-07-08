<template>
    <div :class="[ns.e('bar')]" @mousedown="clickTrackHandler" ref="instance">
        <div :class="ns.e('thumb')" :style="thumbStyle" ref="thumb"></div>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks'
import { thumbProps } from './thumb';
import { computed, inject,ref } from 'vue';
import { renderThumbStyle } from './util';
import { scrollbarContextKey } from './constants';

const thumb = ref<HTMLDivElement>()
const instance = ref<HTMLDivElement>()
const props = defineProps(thumbProps)
const ns = useNamespace('scrollbar')
const scrollbar = inject(scrollbarContextKey)
const thumbStyle = computed(() => renderThumbStyle({
    size: props.size,
    move: props.move
}))
const clickTrackHandler = (e:MouseEvent) => {
    const offset = Math.abs(e.clientY - (e.target as HTMLElement).getBoundingClientRect().top)
    const thumbHalf = thumb.value.offsetHeight / 2
    const thumbPositionPercentage = (offset - thumbHalf) * 100 / instance.value.offsetHeight
    scrollbar.wrapElement.scrollTop = thumbPositionPercentage * scrollbar.wrapElement.scrollHeight/100
}

</script>
