<template>
    <a 
    :class="linkCls"
    :href="disabled || !href ? undefined: href"
    :target="disabled || !href ? undefined: target"
    >
        <slot/>
    </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { linkProps } from './link'
import { useNamespace } from '@my-element-plus/hooks';
defineOptions({
    name: 'EllLink'
})
const props = defineProps(linkProps)
const ns = useNamespace('link')
const linkCls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('underline', props.underline && !props.disabled),
  ns.is('disabled', props.disabled)
])
</script>
