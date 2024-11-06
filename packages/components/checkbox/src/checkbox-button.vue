<template>
    <label :class="labelKls">
        <input
            v-if="trueValue || falseValue"
            :true-value="trueValue ?? true"
            :false-value="falseValue ?? false"
            v-model="model"
            type="checkbox"
            :class="ns.be('button', 'original')"
            />
        <input
            v-else
            v-model="model"
            type="checkbox"
            :class="ns.be('button', 'original')"
            :value="value"
        />    
        <span :class="ns.be('button', 'inner')">
            <slot></slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { computed } from 'vue';
import { checkboxProps } from './checkbox';
import { useCheckbox } from './composables/use-checkbox';

defineOptions({
    name: 'EllCheckboxButton'
})
const ns = useNamespace('checkbox')

const props = defineProps(checkboxProps)

const { model, isChecked } = 
   useCheckbox(props)

const labelKls = computed(() => {
    return [
        ns.b('button'),
        ns.is('checked', isChecked.value)
    ]
})
</script>