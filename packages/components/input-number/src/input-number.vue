<template>
    <div :class="[
        ns.b()
    ]">
        <span
            :class="[ns.e('decrease')]"
            @click="decrease"
        >
            <ell-icon>
                <Minus/>
            </ell-icon>
        </span>
        <span
            :class="[ns.e('increase')]"
            @click="increase"
        >
            <ell-icon>
                <Plus/>
            </ell-icon>
        </span>
        <ell-input
            :model-value="displayValue"
            @input="handleInput"
        />
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { Minus,Plus } from '@element-plus/icons-vue';
import { inputNumberEmits, inputNumberProps } from './input-number'
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { computed, reactive } from 'vue';
const ns = useNamespace('input-number')
defineOptions({
    name: 'EllInputNumber'
})
const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)
interface Data {
    currentValue: number | null | undefined
}
const data = reactive<Data>({
    currentValue: props.modelValue
})
const setCurrentValue = (value: number | null | undefined) => {
    data.currentValue = value
    emit(UPDATE_MODEL_EVENT, data.currentValue)
}
const handleInput = (value:string) => {
    const newVal = value === '' ? null: Number(value)
    emit(UPDATE_MODEL_EVENT, newVal)
}
const decrease = () => {
    const value = Number(props.modelValue) || 0
    setCurrentValue(value - 1)
}
const increase = () => {
    const value = Number(props.modelValue) || 0
    setCurrentValue(value + 1)
}

const displayValue = computed(() => {
    return data.currentValue
})
</script>
