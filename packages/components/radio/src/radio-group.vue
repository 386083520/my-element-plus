<template>
    <div :class="ns.b('group')">
        <slot/>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { radioGroupEmits, RadioGroupProps, radioGroupProps } from './radio-group';
import { provide, reactive, toRefs } from 'vue';
import { radioGroupKey } from './constants';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';

defineOptions({
    name: 'EllRadioGroup'
})
const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)
const ns = useNamespace('radio')

const changeEvent = (value: RadioGroupProps['modelValue']) => {
    emit(UPDATE_MODEL_EVENT, value)
}

provide(
    radioGroupKey,
    reactive({
        ...toRefs(props),
        changeEvent
    })
)
</script>