<template>
    <aside :class="ns.b()" :style="style">
        <slot/>
    </aside>
</template>
<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
import { computed, CSSProperties } from "vue";
defineOptions({
    name: 'EllAside'
})
const props = defineProps({
    width: {
        type: String,
        default: null
    }
})
const ns = useNamespace('aside')
const style = computed(() => {
    return props.width
    ? (ns.cssVarBlock({
        width: props.width
    }) as CSSProperties)
    : {}
})
</script>