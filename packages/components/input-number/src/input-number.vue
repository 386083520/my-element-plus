<template>
    <div :class="[
        ns.b(),
        ns.m(size),
        ns.is('disabled', disabled),
        ns.is('controls-right', controlsAtRight),
        ns.is('without-controls', !controls)
    ]">
        <span
            v-if="controls"
            :class="[ns.e('decrease'), ns.is('disabled', minDisabled)]"
            @click="decrease"
        >
            <slot name="decrease-icon">
                <ell-icon>
                    <ArrowDown v-if="controlsAtRight"/>
                    <Minus v-else/>
                </ell-icon>
            </slot>
        </span>
        <span
            v-if="controls"
            :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
            @click="increase"
        >
            <slot name="increase-icon">
                <ell-icon>
                    <ArrowUp v-if="controlsAtRight"/>
                    <Plus v-else/>
                </ell-icon>
            </slot>
        </span>
        <ell-input
            type="number"
            :size="size"
            :disabled="disabled"
            :model-value="displayValue"
            @input="handleInput"
            @change="handleInputChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { Minus,Plus,ArrowDown,ArrowUp } from '@element-plus/icons-vue';
import { inputNumberEmits, inputNumberProps } from './input-number'
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { computed, reactive, watch } from 'vue';
import { isNumber, isString, isUndefined } from '@my-element-plus/utils';
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
    const { max, min, precision, stepStrictly, step, valueOnClear } = props
    let newVal = Number(value)
    if(isNil(value) || Number.isNaN(newVal)) {
        return null
    }
    if(value === '') {
        if(valueOnClear === null) {
            return null
        }
        newVal = isString(valueOnClear) ? {min, max}[valueOnClear] : valueOnClear
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

const setCurrentValue = (value: number | string | null | undefined) => {
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
    const newVal = value !== '' ?  Number(value): ''
    if((isNumber(newVal) && !Number.isNaN(newVal)) || value === '') {
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


const controlsAtRight = computed(() => {
    return props.controls && props.controlsPosition === 'right'
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
