<template>
    <div :class="ns.b('group')">
        <slot/>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { provide, reactive, toRefs } from 'vue';
import { checkboxGroupContextKey } from './constants';
import { checkboxGroupProps } from './checkbox-group';

defineOptions({
    name: 'EllCheckboxGroup'
})
const ns = useNamespace('checkbox')
const props = defineProps(checkboxGroupProps)

provide(checkboxGroupContextKey, reactive({
        ...toRefs(props)
    }))
</script>
