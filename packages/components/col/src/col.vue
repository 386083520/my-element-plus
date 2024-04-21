<template>
    <component :is="tag" :class="colKls" :style="style">
        <slot/>
    </component>
</template>

<script lang="ts" setup>
import { inject,computed } from 'vue'
import type { CSSProperties } from 'vue'
import { rowContextKey } from '@my-element-plus/components/row'
import { colProps } from './col'
import { isNumber,isObject } from '@my-element-plus/utils'
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
    const pos = ['span', 'offset', 'push', 'pull'] as const
    pos.forEach(prop => {
        const size = props[prop]
        if(isNumber(size)) {
            if(prop === 'span') classes.push(`ell-col-${size}`)
            else if(size > 0) classes.push(`ell-col-${prop}-${size}`)
        }
    })
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
    sizes.forEach(size => {
        if(isNumber(props[size])) {
            classes.push(`ell-col-${size}-${props[size]}`)
        }else if(isObject(props[size])) {
            Object.entries(props[size] as any).forEach(([prop, sizeProp]) => {
                classes.push( // ell-col-sm-offset-4 
                    prop!=='span'?`ell-col-${size}-${prop}-${sizeProp}`:`ell-col-${size}-${sizeProp}`
                )
            })
        }
    })
    return classes
})
</script>
