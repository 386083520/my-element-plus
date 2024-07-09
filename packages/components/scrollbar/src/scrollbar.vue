<template>
    <div :class="ns.b()" ref="scrollbarRef">
        <div :class="wrapKls" :style="wrapStyle" ref="wrapRef" @scroll="handleScroll">
            <div :class="resizeKls">
                <slot/>
            </div>
        </div>
        <bar ref="barRef"></bar>
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { scrollbarProps } from './scrollbar'
import { computed, CSSProperties, nextTick, onMounted, provide, reactive, ref } from 'vue';
import type { StyleValue } from 'vue'
import Bar from './bar.vue';
import type { BarInstance } from './bar';
import { scrollbarContextKey } from './constants';
defineOptions({
    name: 'EllScrollbar'
})
const props = defineProps(scrollbarProps)
const ns = useNamespace('scrollbar')
const barRef = ref<BarInstance>()
const wrapRef = ref<HTMLDivElement>()
const scrollbarRef = ref<HTMLDivElement>()
const wrapKls = computed(() => {
    return [
        ns.e('wrap'),
        ns.em('wrap', 'hidden-default')
    ]
})
const wrapStyle = computed<StyleValue>(() => {
    const style:CSSProperties = {}
    return [props.wrapStyle, style]
})
const resizeKls = computed(() => {
    return [
        ns.e('view')
    ]
})
const update =() => {
    barRef.value?.update()
}
const handleScroll = () => {
    barRef.value?.handleScroll(wrapRef.value)
}
onMounted(() => {
    nextTick(() => {
        update()
    })
})

provide(
    scrollbarContextKey,
    reactive({
        wrapElement: wrapRef,
        scrollbarElement: scrollbarRef
    })
)
</script>
