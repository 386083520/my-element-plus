<template>
    <div :class="[
        ns.b(),
        {
            'disabled': disabled
        }
    ]">
        <span
            :class="[ns.e('decrease'), ns.is('disabled', minDisabled)]"
            @click="decrease"
        >
            <ell-icon>
                <Minus/>
            </ell-icon>
        </span>
        <span
            :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
            @click="increase"
        >
            <ell-icon>
                <Plus/>
            </ell-icon>
        </span>
        <ell-input
            type="number"
            :disabled="disabled"
            :model-value="displayValue"
            @input="handleInput"
            @change="handleInputChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { Minus,Plus } from '@element-plus/icons-vue';
import { inputNumberEmits, inputNumberProps } from './input-number'
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { computed, reactive, watch } from 'vue';
import { isNumber } from '@my-element-plus/utils';
const ns = useNamespace('input-number')
defineOptions({
    name: 'EllInputNumber'
})
const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)
interface Data {
    currentValue: number | null | undefined,
    userInput: null | number | string
}
const data = reactive<Data>({
    currentValue: props.modelValue,
    userInput: null
})

const verifyValue = (value) => {
    const { max, min } = props
    let newVal = Number(value)
    if(Number.isNaN(newVal)) {
        return null
    }
    if(newVal > max || newVal < min) {
        newVal = newVal > max? max : min
        emit(UPDATE_MODEL_EVENT, newVal)
    }
    return newVal
}

watch(
    () => props.modelValue,
    (value, oldValue) => {
        const newVal = verifyValue(value)
        data.currentValue = newVal
    },
    {
        immediate: true
    }
)

const setCurrentValue = (value: number | null | undefined) => {
    data.currentValue = value
    emit(UPDATE_MODEL_EVENT, data.currentValue)
}
const handleInput = (value:string) => {
    data.userInput = value
    const newVal = value === '' ? null: Number(value)
    emit(UPDATE_MODEL_EVENT, newVal)
}
const handleInputChange = (value:string) => {
    console.log('change', value)
    const newVal = value === '' ? null: Number(value)
    if(isNumber(newVal) && !Number.isNaN(newVal)) {
        setCurrentValue(newVal)
    }
    data.userInput = null
}
const decrease = () => {
    if(minDisabled.value || props.disabled) return 
    const value = Number(props.modelValue) || 0
    setCurrentValue(value - 1)
}
const increase = () => {
    if(maxDisabled.value || props.disabled) return 
    const value = Number(props.modelValue) || 0
    setCurrentValue(value + 1)
}

const displayValue = computed(() => {
    if(data.userInput !== null) {
        return data.userInput
    }
    return data.currentValue
})
const minDisabled = computed(
    () => isNumber(props.modelValue) && props.modelValue <= props.min
)
const maxDisabled = computed(
    () => isNumber(props.modelValue) && props.modelValue >= props.max
)
</script>
