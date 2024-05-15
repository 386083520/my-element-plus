<template>
    <button :class="buttonKls">
        <slot/>
    </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { buttonProps } from './button';
import { useNamespace } from '@my-element-plus/hooks';

    defineOptions({
        name: "EllButton"
    })
    const props = defineProps(buttonProps)
    const ns = useNamespace('button')
    const buttonKls = computed(() => [
        ns.b(),
        ns.m(props.type),
        ns.is('plain', props.plain)
    ])
</script>