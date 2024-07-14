<template>
    <header :class="ns.b()" :style="style">
        <slot/>
    </header>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
import { computed, CSSProperties } from "vue";
defineOptions({
    name: 'EllHeader'
})
const props = defineProps({
    height: {
        type: String,
        default: null
    }
})
const ns = useNamespace('header')

const style = computed(() => {
    return props.height
    ? (ns.cssVarBlock({
        height: props.height
    }) as CSSProperties)
    : {}
})
</script>
