<template>
    <div :class="[ns.e('bar')]" @mousedown="clickTrackHandler" ref="instance" v-show="visible">
        <div
        @mousedown="clickThumbHandler"
        :class="ns.e('thumb')"
        :style="thumbStyle"
        ref="thumb"></div>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks'
import { thumbProps } from './thumb';
import { computed, inject,ref, toRef } from 'vue';
import { renderThumbStyle } from './util';
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
const thumbStyle = computed(() => renderThumbStyle({
    size: props.size,
    move: props.move
}))
const clickTrackHandler = (e:MouseEvent) => {
    console.log('abc')
    const offset = Math.abs(e.clientY - (e.target as HTMLElement).getBoundingClientRect().top)
    const thumbHalf = thumb.value.offsetHeight / 2
    const thumbPositionPercentage = (offset - thumbHalf) * 100 / instance.value.offsetHeight
    scrollbar.wrapElement.scrollTop = thumbPositionPercentage * scrollbar.wrapElement.scrollHeight/100
}
const clickThumbHandler = (e:MouseEvent) => {
    e.stopPropagation()
    startDrag()
    const el = e.currentTarget as HTMLDivElement
    thumbState.value.Y = el.offsetHeight - (e.clientY - el.getBoundingClientRect().top)
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
    const prevPage = thumbState.value.Y
    if(!prevPage) return
    const thumbClickPosition = thumb.value.offsetHeight - prevPage
    const offset = Math.abs(instance.value.getBoundingClientRect().top - e.clientY)
    const thumbPositionPercentage = (offset - thumbClickPosition)*100 / instance.value.offsetHeight
    scrollbar.wrapElement.scrollTop = (thumbPositionPercentage * scrollbar.wrapElement.scrollHeight)/100
}
const mouseUpDocumentHandler = () => {
    cursorDown = false
    thumbState.value.Y = 0
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
