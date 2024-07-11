<template>
    <div :class="ns.b()" ref="scrollbarRef">
        <div :class="wrapKls" :style="wrapStyle" ref="wrapRef" @scroll="handleScroll">
            <component :is="tag" :class="resizeKls" :style="viewStyle" ref="resizeRef">
                <slot/>
            </component>
        </div>
        <template v-if="!native">
            <bar ref="barRef" :always="always" :minSize="minSize"></bar>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { scrollbarProps } from './scrollbar'
import { computed, CSSProperties, nextTick, onMounted, provide, reactive, ref, watch } from 'vue';
import type { StyleValue } from 'vue'
import Bar from './bar.vue';
import type { BarInstance } from './bar';
import { scrollbarContextKey } from './constants';
import { addUnit, isNumber, isObject } from '@my-element-plus/utils';
import { useEventListener, useResizeObserver } from '@vueuse/core';
const COMPONENT_NAME = 'EllScrollbar'
defineOptions({
    name: COMPONENT_NAME
})
const props = defineProps(scrollbarProps)
const ns = useNamespace('scrollbar')
const barRef = ref<BarInstance>()
const wrapRef = ref<HTMLDivElement>()
const scrollbarRef = ref<HTMLDivElement>()
const resizeRef = ref<HTMLDivElement>()

let stopResizeObserver: () => void
let stopResizeListener: () => void
const wrapKls = computed(() => {
    return [
        props.wrapClass,
        ns.e('wrap'),
        { [ns.em('wrap', 'hidden-default')]: !props.native }
    ]
})
const wrapStyle = computed<StyleValue>(() => {
    const style:CSSProperties = {}
    if(props.height) style.height = addUnit(props.height)
    if(props.maxHeight) style.maxHeight = addUnit(props.maxHeight)
    return [props.wrapStyle, style]
})
const resizeKls = computed(() => {
    return [
        ns.e('view'),
        props.viewClass
    ]
})
const update =() => {
    barRef.value?.update()
}
const handleScroll = () => {
    barRef.value?.handleScroll(wrapRef.value)
}
const setScrollTop = (value:number) => {
    if(!isNumber(value)) {
        console.warn(COMPONENT_NAME + 'value must be a number')
        return
    }
    wrapRef.value.scrollTop = value
}

function scrollTo(xCord:number, yCord:number):void
function scrollTo(options:ScrollToOptions):void
function scrollTo(arg1:unknown,arg2?:number) {
    if(isObject(arg1)) {
        wrapRef.value.scrollTo(arg1)
    }else if(isNumber(arg1) && isNumber(arg2)){
        wrapRef.value.scrollTo(arg1, arg2)
    }
}

onMounted(() => {
    if(!props.native) {
        nextTick(() => {
        update()
    })
    }
})

provide(
    scrollbarContextKey,
    reactive({
        wrapElement: wrapRef,
        scrollbarElement: scrollbarRef
    })
)

watch(() => props.noresize, (noresize) => {
    if (noresize) {
        stopResizeObserver?.()
        stopResizeListener?.()
    } else {
        ({stop:stopResizeObserver} = useResizeObserver(resizeRef, update))
        stopResizeListener = useEventListener('resize', update)
    }
}, { immediate: true })

watch(() => [props.height, props.maxHeight],
() => {
    if(!props.native) {
        nextTick(() => {
        update()
    })
    }
}
)

defineExpose({
    setScrollTop,
    scrollTo
})
</script>
