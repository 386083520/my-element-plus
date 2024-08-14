<template>
    <label>
        <input
            type="radio"
            :value="value"
            :checked="modelValue === value"
            @change="handleChange"
            />
        <span>
            <slot></slot>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { radioEmits, radioProps } from './radio'
const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
defineOptions({
    name: 'EllRadio'
})
const handleChange = (e) => {
    emit(UPDATE_MODEL_EVENT, e.target.value)
}
</script>
