<template>
    <label
        :class="[
            ns.b(),
            ns.is('bordered', border),
            ns.is('checked', modelValue === actualValue),
            ns.is('disabled', disabled),
            ns.m(size)
        ]"
    >
        <span
            :class="[
                ns.e('input'),
                ns.is('checked', modelValue === actualValue),
                ns.is('disabled', disabled)
            ]"
        >
            <input
                type="radio"
                :value="actualValue"
                v-model="modelValue"
                :class="ns.e('original')"
                :disabled="disabled"
                @change="handleChange"
            />
            <span :class="ns.e('inner')"></span>
        </span>
        <span :class="ns.e('label')">
            <slot>
                {{ label }}
            </slot>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio';
import { useNamespace } from '@my-element-plus/hooks';
import { nextTick } from 'vue';
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
defineOptions({
    name: 'EllRadio'
})
const ns = useNamespace('radio')
const {modelValue,size, disabled, actualValue} = useRadio(props, emit)
function handleChange() {
    nextTick(() => emit('change', modelValue.value))
}
</script>
