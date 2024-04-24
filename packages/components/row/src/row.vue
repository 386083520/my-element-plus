<template>
    <div :class="rowKls" :style="style">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { rowProps } from './row'
import { provide, computed } from 'vue'
import {rowContextKey } from './constants'
import { useNamespace } from '@my-element-plus/hooks'
const ns = useNamespace('row')
defineOptions({
    name: 'EllRow'
})

const props = defineProps(rowProps)
const gutter = computed(() => props.gutter)
provide(rowContextKey, {
    gutter
})
const style = computed(() => {
    const styles:CSSProperties = {}
    if(!props.gutter) {
        return styles
    }
    styles.marginLeft  = styles.marginRight= `-${props.gutter/2}px`
    return styles
})
const rowKls = computed(() => [
    ns.b(),
    ns.is(`justify-${props.justify}`, !!props.justify),
    ns.is(`align-${props.align}`, !!props.align)
])
</script>
