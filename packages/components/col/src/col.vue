<template>
    <div :class="colKls" :style="style">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { inject,computed } from 'vue'
import type { CSSProperties } from 'vue'
import { rowContextKey } from '@my-element-plus/components/row'
import { colProps } from './col'
import { isNumber } from '@my-element-plus/utils/types'
defineOptions({
    name: 'EllCol',
})
const { gutter } = inject(rowContextKey, {gutter: computed(() => 0)})
const props = defineProps(colProps)

const style = computed(() => {
    const styles:CSSProperties = {}
    if(gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value/2}px` 
    }
    return styles
})
const colKls = computed(() => {
    const classes:string[] = []
    const span = props["span"]
    const offset = props["offset"]
    if(isNumber(span)) {
        classes.push(`ell-col-` + span)
    }
    if(isNumber(offset)) {
        classes.push(`ell-col-offset-` + offset)
    }
    return classes
})
</script>
