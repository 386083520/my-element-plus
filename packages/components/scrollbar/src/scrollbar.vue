<template>
    <div :class="ns.b()">
        <div :class="wrapKls">
            <div :class="resizeKls">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { scrollbarProps } from './scrollbar'
import { computed } from 'vue';
defineOptions({
    name: 'EllScrollbar'
})
const ns = useNamespace('scrollbar')
const wrapKls = computed(() => {
    return [
        ns.e('wrap')
    ]
})
const resizeKls = computed(() => {
    return [
        ns.e('view')
    ]
})
</script>
