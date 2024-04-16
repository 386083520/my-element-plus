<template>
    <div :class="span? 'ell-col-' + span: ''" :style="style">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
    import { inject,computed } from 'vue'
    import type { CSSProperties } from 'vue'
    import { rowContextKey } from '@my-element-plus/components/row'
import { colProps } from './col'
defineOptions({
    name: 'EllCol',
})
const { gutter } = inject(rowContextKey, {gutter: computed(() => 0)})
defineProps(colProps)

const style = computed(() => {
    const styles:CSSProperties = {}
    if(gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value/2}px` 
    }
    return styles
})
</script>
