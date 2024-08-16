<template>
    <label
        :class="[
            ns.b('button'),
            ns.is('checked', modelValue === value),
            ns.is('disabled', disabled)
        ]"
    >
        <input
            type="radio"
            :value="value"
            v-model="modelValue"
            :class="ns.be('button', 'original-radio')"
        />
        <span
            :class="ns.be('button', 'inner')"
        >
            <slot></slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { useRadio } from './use-radio';
import { radioButtonProps } from './radio-button';
const props = defineProps(radioButtonProps)
defineOptions({
    name: 'EllRadioButton'
})
const ns= useNamespace('radio')
const {modelValue,size, disabled} = useRadio(props)
</script>