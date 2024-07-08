<template>
    <div :class="[ns.e('bar')]" @mousedown="clickTrackHandler">
        <div :class="ns.e('thumb')" :style="thumbStyle"></div>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks'
import { thumbProps } from './thumb';
import { computed, inject } from 'vue';
import { renderThumbStyle } from './util';
import { scrollbarContextKey } from './constants';

const props = defineProps(thumbProps)
const ns = useNamespace('scrollbar')
const scrollbar = inject(scrollbarContextKey)
const thumbStyle = computed(() => renderThumbStyle({
    size: props.size,
    move: props.move
}))
const clickTrackHandler = (e:MouseEvent) => {
    scrollbar.wrapElement.scrollTop = 500
}

</script>
