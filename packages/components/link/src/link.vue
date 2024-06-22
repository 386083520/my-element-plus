<template>
    <a
    :class="linkCls"
    :href="disabled || !href ? undefined: href"
    :target="disabled || !href ? undefined: target"
    @click="handleClick"
    >
    <ell-icon v-if="icon"><component :is="icon"/></ell-icon>
    <span :class="ns.e('inner')">
        <slot/>
    </span>    
    </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { linkProps } from './link'
import { useNamespace } from '@my-element-plus/hooks';
import EllIcon from '@my-element-plus/components/icon';
defineOptions({
    name: 'EllLink'
})
const props = defineProps(linkProps)
const emit = defineEmits(['click'])
const ns = useNamespace('link')
const linkCls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('underline', props.underline && !props.disabled),
  ns.is('disabled', props.disabled)
])

function handleClick(event:MouseEvent) {
    if(!props.disabled) emit('click', event)
}
</script>
