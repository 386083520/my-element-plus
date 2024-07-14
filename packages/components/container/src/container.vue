<template>
    <section :class="[ns.b(), ns.is('vertical', isVertical)]">
        <slot/>
    </section>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
import { Component, computed, useSlots, VNode } from "vue";
defineOptions({
    name: 'EllContainer'
})
const props = defineProps({
    direction: {
        type: String
    }
})
const ns = useNamespace('container')

const slots = useSlots()

const isVertical = computed(() => {
    if(props.direction === 'vertical') {
        return true
    }else if(props.direction === 'horizontal') {
        return false
    }
    if(slots && slots.default) {
        const vNodes:VNode[] = slots.default()
        return vNodes.some(vNode => {
            const tag = (vNode.type as Component).name
            return tag === 'EllHeader' || tag  === 'EllFooter'
        })
    }else {
        return false
    }
})
</script>
