<template>
    <component
    :is="tag"
    :style="buttonStyle"
    v-bind="_props"
    :class="buttonKls">
        <template v-if="loading">
            <slot name="loading" v-if="$slots.loading"></slot>
            <ell-icon v-else :class="ns.is('loading')">
                <component :is="loadingIcon"/>
            </ell-icon>
        </template>
        <ell-icon v-else-if="icon">
            <component :is="icon"/>
        </ell-icon>
        <span v-if="$slots.default"
           :class="{[ns.em('text', 'expand')]: shouldAddSpace}"
        >
            <slot/>
        </span>
    </component>
</template>
<script setup lang="ts">
import EllIcon from '@my-element-plus/components/icon'
import { computed } from 'vue';
import { buttonProps } from './button';
import { useButtonCustomStyle } from './button-custom';
import { useNamespace } from '@my-element-plus/hooks';
import { useButton } from './use-button';



    defineOptions({
        name: "EllButton"
    })
    const props = defineProps(buttonProps)
    const { _props, shouldAddSpace,_type,_size } = useButton(props)
    const buttonStyle = useButtonCustomStyle(props)
    const ns = useNamespace('button')
    const buttonKls = computed(() => [
        ns.b(),
        ns.m(_type.value),
        ns.m(_size.value),
        ns.is('plain', props.plain),
        ns.is('round', props.round),
        ns.is('circle', props.circle),
        ns.is('disabled', props.disabled),
        ns.is('link', props.link),
        ns.is('text', props.text),
        ns.is('has-bg', props.bg),
        ns.is('loading', props.loading)
    ])
</script>
