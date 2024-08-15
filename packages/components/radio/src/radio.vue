<template>
    <label
        :class="[
            ns.b(),
            ns.is('bordered', border),
            ns.is('checked', modelValue === value),
            ns.is('disabled', disabled),
            ns.m(size)
        ]"
    >
        <span
            :class="[
                ns.e('input'),
                ns.is('checked', modelValue === value),
                ns.is('disabled', disabled)
            ]"
        >
            <input
                type="radio"
                :value="value"
                v-model="modelValue"
                :class="ns.e('original')"
                :disabled="disabled"
            />
            <span :class="ns.e('inner')"></span>
        </span>
        <span :class="ns.e('label')">
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio';
import { useNamespace } from '@my-element-plus/hooks';
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
defineOptions({
    name: 'EllRadio'
})
const ns = useNamespace('radio')
const {modelValue,size, disabled} = useRadio(props, emit)
</script>
