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
        <span :class="labelLeftKls" v-if="!inlinePrompt && (inactiveText || inactiveIcon)">
            <ell-icon v-if="inactiveIcon">
                <component :is="inactiveIcon"/>
            </ell-icon>
            <span v-if="!inactiveIcon && inactiveText">
                {{ inactiveText }}
            </span>
        </span>
        <span :class="ns.e('core')" :style="coreStyle">
            <div v-if="inlinePrompt" :class="ns.e('inner')">
                <template v-if="activeIcon || inactiveIcon">
                    <ell-icon :class="ns.is('icon')">
                        <component :is="checked? activeIcon : inactiveIcon"/>
                    </ell-icon>
                </template>
                <template v-if="activeText || inactiveText">
                    <span :class="ns.is('text')">
                        {{ checked? activeText : inactiveText }}
                    </span>
                </template>
            </div>
            <div :class="ns.e('action')">

            </div>
        </span>
        <span :class="labelRightKls" v-if="!inlinePrompt && (activeText || activeIcon)">
            <ell-icon v-if="activeIcon">
                <component :is="activeIcon"/>
            </ell-icon>
            <span v-if="!activeIcon && activeText">
                {{ activeText }}
            </span>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed, CSSProperties, onMounted, ref, watch } from 'vue';
import { switchEmits, switchProps } from './switch'
import { useNamespace } from '@my-element-plus/hooks';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { addUnit } from '@my-element-plus/utils';
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
const labelLeftKls = computed(() => [
    ns.e('label'),
    ns.em('label', 'left'),
    ns.is('active', !checked.value)
])
const labelRightKls = computed(() => [
    ns.e('label'),
    ns.em('label', 'right'),
    ns.is('active', checked.value)
])
const coreStyle = computed<CSSProperties>(() => ({
    width: addUnit(props.width)
}))
onMounted(() => {
    input.value!.checked = checked.value
})
</script>
