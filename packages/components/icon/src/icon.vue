<template>
    <i class="ell-icon" :style="style">
        <slot/>
    </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { iconProps } from './icon'
import { addUnit,isUndefined } from '@my-element-plus/utils';
defineOptions({
    name: 'EllIcon'
})
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
