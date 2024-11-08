<template>
    <div  :class="switchKls" @click.prevent="switchValue">
        <input
        type="checkbox"
        :class="ns.e('input')"
        @change="handleChange"
        :true-value="activeValue"
        :false-value="inactiveValue"
        />
        <span :class="ns.e('core')">
            <div :class="ns.e('action')">

            </div>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { switchEmits, switchProps } from './switch'
import { useNamespace } from '@my-element-plus/hooks';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
defineOptions({
    name: 'EllSwitch'
})
const emit = defineEmits(switchEmits)
const props = defineProps(switchProps)
const ns = useNamespace('switch')
const switchKls = computed(() => [
    ns.b(),
    ns.is('checked', checked.value)
])
const checked = computed(() => props.modelValue === props.activeValue)
const handleChange = () => {
    const val = checked.value ? props.inactiveValue : props.activeValue
    emit(UPDATE_MODEL_EVENT, val)
}
const switchValue = () => {
    handleChange()
}
</script>
