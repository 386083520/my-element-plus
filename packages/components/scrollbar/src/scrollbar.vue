<template>
    <div :class="ns.b()">
        <div :class="wrapKls">
            <div :class="resizeKls">
                <slot/>
            </div>
        </div>
        <bar ref="barRef"></bar>
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { scrollbarProps } from './scrollbar'
import { computed, nextTick, onMounted, ref } from 'vue';
import Bar from './bar.vue';
import type { BarInstance } from './bar';
defineOptions({
    name: 'EllScrollbar'
})
const ns = useNamespace('scrollbar')
const barRef = ref<BarInstance>()
const wrapKls = computed(() => {
    return [
        ns.e('wrap'),
        ns.em('wrap', 'hidden-default')
    ]
})
const resizeKls = computed(() => {
    return [
        ns.e('view')
    ]
})
const update =() => {
    barRef.value?.update()
}
onMounted(() => {
    nextTick(() => {
        update()
    })
})
</script>
