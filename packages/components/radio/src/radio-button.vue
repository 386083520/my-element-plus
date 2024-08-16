<template>
    <label
        :class="[
            ns.b('button'),
            ns.is('checked', modelValue === actualValue),
            ns.is('disabled', disabled),
            ns.bm('button', size)
        ]"
    >
        <input
            type="radio"
            :value="actualValue"
            v-model="modelValue"
            :class="ns.be('button', 'original-radio')"
            :disabled="disabled"
        />
        <span
            :class="ns.be('button', 'inner')"
        >
            <slot>
                {{ label }}
            </slot>
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
const {modelValue,size, disabled, actualValue} = useRadio(props)
</script>