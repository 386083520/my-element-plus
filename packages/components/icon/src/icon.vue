<template>
    <i class="ell-icon" :style="style">
        <slot/>
    </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { iconProps } from './icon'
defineOptions({
    name: 'EllIcon'
})
const props = defineProps(iconProps)
const style = computed(() => {
    const {color} = props
    if(!color) return {}
    return {
        '--color': color
    }
})
</script>
