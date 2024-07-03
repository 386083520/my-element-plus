<template>
    <span :class="textKls">
        <slot/>
    </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { textProps } from './text'
import { useNamespace } from '@my-element-plus/hooks';

defineOptions({
    name: 'EllText'
})
const props = defineProps(textProps)
const ns =useNamespace('text')
const textKls = computed(() => [
    ns.b(),
    ns.m(props.type)
])
</script>
