<template>
    <span :class="textKls" 
    :style="{'-webkit-line-clamp': lineClamp}"
    >
        <slot/>
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { textProps } from './text'
import { useNamespace } from '@my-element-plus/hooks';
import { isUndefined } from '@my-element-plus/utils';

defineOptions({
    name: 'EllText'
})
const props = defineProps(textProps)
const ns =useNamespace('text')
const textKls = computed(() => [
    ns.b(),
    ns.m(props.type),
    ns.m(props.size),
    ns.is('truncated', props.truncated),
    ns.is('line-clamp', !isUndefined(props.lineClamp))
])
</script>
