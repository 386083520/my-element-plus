<template>
    <div :class="[
        ns.b()
    ]">
        <span :class="[ns.e('decrease')]">
            <ell-icon>
                <Minus/>
            </ell-icon>
        </span>
        <span :class="[ns.e('increase')]">
            <ell-icon>
                <Plus/>
            </ell-icon>
        </span>
        <ell-input
            :model-value="modelValue"
            @input="handleInput"
        />
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { Minus,Plus } from '@element-plus/icons-vue';
import { inputNumberEmits, inputNumberProps } from './input-number'
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
const ns = useNamespace('input-number')
defineOptions({
    name: 'EllInputNumber'
})
const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)
const handleInput = (value:string) => {
    const newVal = value === '' ? null: Number(value)
    emit(UPDATE_MODEL_EVENT, newVal)
}
</script>
