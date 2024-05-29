<template>
    <button :class="buttonKls">
        <ell-icon v-if="loading" :class="ns.is('loading')">
            <component :is="Loading"/>
        </ell-icon>
        <ell-icon v-else-if="icon">
            <component :is="icon"/>
        </ell-icon>
        <span v-if="$slots.default">
            <slot/>
        </span>
    </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { buttonProps } from './button';
import { useNamespace } from '@my-element-plus/hooks';
import { Loading } from '@element-plus/icons-vue'

    defineOptions({
        name: "EllButton"
    })
    const props = defineProps(buttonProps)
    const ns = useNamespace('button')
    const buttonKls = computed(() => [
        ns.b(),
        ns.m(props.type),
        ns.is('plain', props.plain),
        ns.is('round', props.round),
        ns.is('circle', props.circle),
        ns.is('disabled', props.disabled),
        ns.is('link', props.link),
        ns.is('text', props.text),
        ns.is('has-bg', props.bg)
    ])
</script>
