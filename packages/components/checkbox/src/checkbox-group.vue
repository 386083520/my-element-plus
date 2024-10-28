<template>
    <div :class="ns.b('group')">
        <slot/>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';

defineOptions({
    name: 'EllCheckboxGroup'
})
const ns = useNamespace('checkbox')
</script>