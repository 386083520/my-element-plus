<template>
    <div :class="ns.b('group')">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue';
import { buttonGroupProps } from './button-group'
import { useNamespace } from '@my-element-plus/hooks';
import { buttonGroupContextKey } from '../../button/src/constants';
defineOptions({
    name: 'EllButtonGroup'
})
const ns = useNamespace('button')
const props = defineProps(buttonGroupProps)
provide(buttonGroupContextKey, {
    size: props.size,
    type: props.type
})
</script>
