<template>
    <div :class="[ns.b(), shadow? 'is-' + shadow + '-shadow': '']">
        <div :class="ns.e('header')" v-if="$slots.header || header">
            <slot name="header">{{header}}</slot>
        </div>
        <div :class="[ns.e('body'), bodyClass]" :style="bodyStyle">
            <slot/>
        </div>
        <div :class="ns.e('footer')" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { cardProps } from './card'
    import { useNamespace } from '@my-element-plus/hooks'
    const ns = useNamespace('card')
    defineOptions({
        name: 'EllCard'
    })
    defineProps(cardProps)
</script>

