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
import { isNumber, isUndefined } from '@my-element-plus/utils';
import { isNil } from 'lodash-unified';
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
    const { max, min, precision, stepStrictly, step } = props
    let newVal = Number(value)
    if(Number.isNaN(newVal)) {
        return null
    }
    if(stepStrictly) {
        newVal = toPrecision(Math.round(newVal/step) * step)
    }
    if(!isUndefined(precision)) {
        newVal = toPrecision(newVal)
    }
    if(newVal > max || newVal < min) {
        newVal = newVal > max? max : min
        emit(UPDATE_MODEL_EVENT, newVal)
    }
    return newVal
}

const setCurrentValue = (value: number | null | undefined) => {
    let newValue = verifyValue(value)
    data.currentValue = newValue
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
const toPrecision = (num: number) => {
    let pre = numPrecision.value
    return Number.parseFloat(num.toFixed(pre))
}
const ensurePrecision = (val: number, coefficient: 1|-1 = 1) => {
    return toPrecision(val + props.step * coefficient)
}
const decrease = () => {
    if(minDisabled.value || props.disabled) return
    const value = Number(props.modelValue) || 0
    const newVal = ensurePrecision(value, -1)
    setCurrentValue(newVal)
}
const increase = () => {
    if(maxDisabled.value || props.disabled) return
    const value = Number(props.modelValue) || 0
    const newVal = ensurePrecision(value)
    setCurrentValue(newVal)
}

const getPrecision = (val:number) => {
    const valueString = val.toString()
    const dotPosition = valueString.indexOf('.')
    let precision = 0
    if(dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
    }
    return precision
}

const displayValue = computed(() => {
    if(data.userInput !== null) {
        return data.userInput
    }
    let currentValue:number|string|undefined|null = data.currentValue
    if(isNil(currentValue)) return ''
    if(!isUndefined(props.precision)) {
        currentValue = currentValue.toFixed(props.precision)
    }
    return currentValue
})
const minDisabled = computed(
    () => isNumber(props.modelValue) && props.modelValue <= props.min
)
const maxDisabled = computed(
    () => isNumber(props.modelValue) && props.modelValue >= props.max
)
const numPrecision = computed(() => {
    const stepPrecision = getPrecision(props.step)
    if(!isUndefined(props.precision)) {
        if(stepPrecision > props.precision) {
            console.warn(
                'precision 不能小于 step 的小数位数'
            )
        }
        return props.precision
    }
    return Math.max(getPrecision(props.modelValue), stepPrecision)
})


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
</script>
