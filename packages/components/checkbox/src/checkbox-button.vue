<template>
    <label :class="labelKls">
        <input
            v-if="trueValue || falseValue"
            :true-value="trueValue ?? true"
            :false-value="falseValue ?? false"
            v-model="model"
            type="checkbox"
            :disabled="isDisabled"
            :class="ns.be('button', 'original')"
            @change="handleChange"
            />
        <input
            v-else
            v-model="model"
            :disabled="isDisabled"
            type="checkbox"
            :class="ns.be('button', 'original')"
            :value="value"
            @change="handleChange"
        />    
        <span :class="ns.be('button', 'inner')">
            <slot>{{ label }}</slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { computed } from 'vue';
import { checkboxEmits, checkboxProps } from './checkbox';
import { useCheckbox } from './composables/use-checkbox';

defineOptions({
    name: 'EllCheckboxButton'
})
const ns = useNamespace('checkbox')

const props = defineProps(checkboxProps)

defineEmits(checkboxEmits)

const { model, isChecked, isDisabled, checkboxSize, handleChange } = 
   useCheckbox(props)

const labelKls = computed(() => {
    return [
        ns.b('button'),
        ns.is('checked', isChecked.value),
        ns.is('disabled', isDisabled.value),
        ns.bm('button', checkboxSize.value)
    ]
})
</script>