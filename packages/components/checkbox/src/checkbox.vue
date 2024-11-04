<template>
    <label  :class="compKls">
        <span :class="spanKls">
            <input
                v-if="trueValue || falseValue"
                type="checkbox"
                :class="ns.e('original')"
                v-model="model"
                @change="handleChange"
                :indeterminate="indeterminate"
                :disabled="isDisabled"
                :true-value="trueValue ?? true"
                :false-value="falseValue ?? false"
                />
            <input
                v-else
                type="checkbox"
                :class="ns.e('original')"
                v-model="model"
                :indeterminate="indeterminate"
                :disabled="isDisabled"
                :value="value"
                @change="handleChange"
                />
            <span :class="ns.e('inner')"></span>
        </span>
        <span :class="ns.e('label')">
            <slot/>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </label>
</template>

<script lang="ts" setup>
import { checkboxProps } from './checkbox'
import { useNamespace } from '@my-element-plus/hooks';
import { checkboxEmits } from './checkbox';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { computed } from 'vue';
import { useCheckbox } from './composables/use-checkbox';
defineOptions({
    name: 'EllCheckbox'
})
const ns = useNamespace('checkbox')
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const {
    model,
    isChecked,
    isDisabled,
    handleChange
} = useCheckbox(props)

const compKls = computed(() => {
    return [
        ns.b(),
        ns.m(props.size)
    ]
})

const spanKls = computed(() => {
    return [
        ns.e('input'),
        ns.is('checked', isChecked.value),
        ns.is('disabled', isDisabled.value),
        ns.is('indeterminate', props.indeterminate)
    ]
})
</script>
