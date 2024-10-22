<template>
    <label  :class="ns.b()">
        <span :class="ns.e('input')">
            <input type="checkbox" :class="ns.e('original')"/>
            <span :class="ns.e('inner')"></span>
        </span>
        <span :class="ns.e('label')">
            <slot/>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { checkboxProps } from './checkbox'
import { useNamespace } from '@my-element-plus/hooks';
defineOptions({
    name: 'EllCheckbox'
})
const ns = useNamespace('checkbox')
</script>
