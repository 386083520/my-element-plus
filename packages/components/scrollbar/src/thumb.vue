<template>
    <div :class="[ns.e('bar'), ns.is(bar.key)]" @mousedown="clickTrackHandler" ref="instance" v-show="always || visible">
        <div
        @mousedown="clickThumbHandler"
        :class="[ns.e('thumb')]"
        :style="thumbStyle"
        ref="thumb"></div>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks'
import { thumbProps } from './thumb';
import { computed, inject,ref, toRef } from 'vue';
import { BAR_MAP, renderThumbStyle } from './util';
import { scrollbarContextKey } from './constants';
import { useEventListener } from '@vueuse/core';

const thumb = ref<HTMLDivElement>()
const instance = ref<HTMLDivElement>()
const thumbState = ref<Partial<Record<'X'|'Y', number>>>({})
let cursorDown = false
let cursorLeave = false
const visible = ref(false)
const props = defineProps(thumbProps)
const ns = useNamespace('scrollbar')
const scrollbar = inject(scrollbarContextKey)
let originalOnSelectStart = null
const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])
const thumbStyle = computed(() => renderThumbStyle({
    size: props.size,
    move: props.move,
    bar: bar.value
}))

const offsetRatio = computed(() => {
    return instance.value[bar.value.offset] ** 2 /
    scrollbar.wrapElement[bar.value.scrollSize]/
    props.ratio/
    thumb.value[bar.value.offset]
})

const clickTrackHandler = (e:MouseEvent) => {
    console.log('abc')
    const offset = Math.abs(e[bar.value.client] - (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction])
    const thumbHalf = thumb.value[bar.value.offset] / 2
    const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset]
    scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]/100
}
const clickThumbHandler = (e:MouseEvent) => {
    e.stopPropagation()
    startDrag()
    const el = e.currentTarget as HTMLDivElement
    thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
}
const startDrag = () => {
    cursorDown = true
    document.addEventListener('mousemove', mouseMoveDocumentHandler)
    document.addEventListener('mouseup', mouseUpDocumentHandler)
    originalOnSelectStart = document.onselectstart
    document.onselectstart = () => false
}
const restoreOnselectstart = () => {
    if(document.onselectstart !== originalOnSelectStart) {
        document.onselectstart = originalOnSelectStart
    }
}
const mouseMoveDocumentHandler = (e: MouseEvent) => {
    if(cursorDown === false) return
    const prevPage = thumbState.value[bar.value.axis]
    if(!prevPage) return
    const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
    const offset = Math.abs(instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client])
    const thumbPositionPercentage = (offset - thumbClickPosition)*100*offsetRatio.value / instance.value[bar.value.offset]
    scrollbar.wrapElement[bar.value.scroll] = (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize])/100
}
const mouseUpDocumentHandler = () => {
    cursorDown = false
    thumbState.value[bar.value.axis] = 0
    restoreOnselectstart()
    document.removeEventListener('mousemove', mouseMoveDocumentHandler)
    document.removeEventListener('mouseup', mouseUpDocumentHandler)
    if(cursorLeave) visible.value = false
}

const mouseMoveScrollbarHandler = () => {
    console.log('mousemove')
    visible.value = true
    cursorLeave = false
}

const mouseLeaveScrollbarHandler = () => {
    console.log('mouseleave')
    visible.value = cursorDown
    cursorLeave = true
}

useEventListener(
    toRef(scrollbar, 'scrollbarElement'),
    'mousemove',
    mouseMoveScrollbarHandler
)

useEventListener(
    toRef(scrollbar, 'scrollbarElement'),
    'mouseleave',
    mouseLeaveScrollbarHandler
)

</script>
