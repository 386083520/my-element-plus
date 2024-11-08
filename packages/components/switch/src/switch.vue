<template>
    <div  :class="switchKls" @click.prevent="switchValue">
        <input
        ref="input"
        type="checkbox"
        :class="ns.e('input')"
        @change="handleChange"
        :true-value="activeValue"
        :false-value="inactiveValue"
        />
        <span :class="labelLeftKls" v-if="inactiveText">
            {{ inactiveText }}
        </span>
        <span :class="ns.e('core')">
            <div :class="ns.e('action')">

            </div>
        </span>
        <span :class="labelRightKls" v-if="activeText">
            {{ activeText }}
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { switchEmits, switchProps } from './switch'
import { useNamespace } from '@my-element-plus/hooks';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
const input = ref<HTMLInputElement>()
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
watch(checked, (val) => {
    input.value!.checked = val
})
const handleChange = () => {
    const val = checked.value ? props.inactiveValue : props.activeValue
    emit(UPDATE_MODEL_EVENT, val)
}
const switchValue = () => {
    handleChange()
}
const labelLeftKls = computed(() => {
    ns.e('label'),
    ns.em('label', 'left')
})
const labelRightKls = computed(() => {
    ns.e('label'),
    ns.em('label', 'right')
})
onMounted(() => {
    input.value!.checked = checked.value
})
</script>
