<template>
    <footer :class="ns.b()" :style="style">
        <slot/>
    </footer>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
import { computed, CSSProperties } from "vue";
defineOptions({
    name: 'EllFooter'
})
const props = defineProps({
    height: {
        type: String,
        default: null
    }
})
const ns = useNamespace('footer')
const style = computed(() => {
    return props.height
    ? (ns.cssVarBlock({
        height: props.height
    }) as CSSProperties)
    : {}
})
</script>
