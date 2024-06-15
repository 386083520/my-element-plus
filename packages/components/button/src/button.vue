<template>
    <component
    :is="tag"
    :style="buttonStyle" 
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
import { computed, useSlots, Text } from 'vue';
import { buttonProps } from './button';
import { useButtonCustomStyle } from './button-custom';
import { useNamespace } from '@my-element-plus/hooks';

    defineOptions({
        name: "EllButton"
    })
    const props = defineProps(buttonProps)
    const slots = useSlots()
    const buttonStyle = useButtonCustomStyle(props)
    const ns = useNamespace('button')
    const buttonKls = computed(() => [
        ns.b(),
        ns.m(props.type),
        ns.m(props.size),
        ns.is('plain', props.plain),
        ns.is('round', props.round),
        ns.is('circle', props.circle),
        ns.is('disabled', props.disabled),
        ns.is('link', props.link),
        ns.is('text', props.text),
        ns.is('has-bg', props.bg)
    ])
    const shouldAddSpace = computed(() => {
        const defaultSlot = slots.default?.()
        if(defaultSlot?.length === 1 && props.autoInsertSpace) {
            const slot = defaultSlot[0]
            if(slot?.type === Text) {
                const text = slot.children as string
                return /^\p{Unified_Ideograph}{2}$/u.test(text.trim())
            }
        }
        return false
    })
</script>
