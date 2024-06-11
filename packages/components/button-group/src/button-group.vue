<template>
    <div :class="ns.b('group')">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { buttonGroupProps } from './button-group'
import { useNamespace } from '@my-element-plus/hooks';
defineOptions({
    name: 'EllButtonGroup'
})
const ns = useNamespace('button')
</script>
