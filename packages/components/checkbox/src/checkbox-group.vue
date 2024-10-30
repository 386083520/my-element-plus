<template>
    <div :class="ns.b('group')">
        <slot/>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { nextTick, provide, reactive, toRefs } from 'vue';
import { checkboxGroupContextKey } from './constants';
import { checkboxGroupEmits, checkboxGroupProps, CheckboxGroupValueType } from './checkbox-group';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';

defineOptions({
    name: 'EllCheckboxGroup'
})
const ns = useNamespace('checkbox')
const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

const changeEvent = async (value: CheckboxGroupValueType) => {
    emit(UPDATE_MODEL_EVENT, value)
    await nextTick()
    emit('change', value)
}

provide(checkboxGroupContextKey, {
        ...toRefs(props),
        changeEvent
    })
</script>
