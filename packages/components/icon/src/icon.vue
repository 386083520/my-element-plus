<template>
    <i :class="ns.b()" :style="style">
        <slot/>
    </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { iconProps } from './icon'
import { addUnit,isUndefined } from '@my-element-plus/utils';
import { useNamespace } from '@my-element-plus/hooks';
defineOptions({
    name: 'EllIcon'
})
const ns = useNamespace('icon')
const props = defineProps(iconProps)
const style = computed(() => {
    const {color,size} = props
    if(!color&&!size) return {}
    return {
        fontSize: isUndefined(size)? undefined: addUnit(size),
        '--color': color
    }
})
</script>
