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
const ns =useNamespace('text')
const textKls = computed(() => [
    ns.b()
])
</script>
