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
                <ell-icon v-if="loading" :class="ns.is('loading')">
                    <loading/>
                </ell-icon>
                <slot name="active-action" v-else-if="checked">
                    <ell-icon v-if="activeActionIcon">
                        <component :is="activeActionIcon"/>
                    </ell-icon>
                </slot>
                <slot name="inactive-action" v-else-if="!checked">
                    <ell-icon v-if="inactiveActionIcon">
                        <component :is="inactiveActionIcon"/>
                    </ell-icon>
                </slot>
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
import EllIcon from '@my-element-plus/components/icon';
import { computed, CSSProperties, onMounted, ref, watch } from 'vue';
import { switchEmits, switchProps } from './switch'
import { useNamespace } from '@my-element-plus/hooks';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { addUnit, isPromise } from '@my-element-plus/utils';
import { Loading } from '@element-plus/icons-vue';
import { isBoolean } from 'lodash-unified';
const input = ref<HTMLInputElement>()
defineOptions({
    name: 'EllSwitch'
})
const emit = defineEmits(switchEmits)
const props = defineProps(switchProps)
const ns = useNamespace('switch')
const switchKls = computed(() => [
    ns.b(),
    ns.is('checked', checked.value),
    ns.is('disabled', switchDisabled.value),
    ns.m(props.size)
])
const switchDisabled = computed(() => props.disabled || props.loading)
const checked = computed(() => props.modelValue === props.activeValue)
watch(checked, (val) => {
    input.value!.checked = val
})
const handleChange = () => {
    const val = checked.value ? props.inactiveValue : props.activeValue
    emit(UPDATE_MODEL_EVENT, val)
    emit(CHANGE_EVENT, val)
}
const switchValue = () => {
    if(switchDisabled.value) return
    const { beforeChange } = props
    if(!beforeChange) {
        handleChange()
        return
    }
    const shouldChange = beforeChange()
    const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
    ].includes(true)
    if(!isPromiseOrBool) {
        console.warn('beforeChange must return type `Promise<boolean>` or `boolean`')
    }
    if(isPromise(shouldChange)) {
        shouldChange.then(result => {
            if(result) {
                handleChange()
            }
        }).catch(e => {
            console.warn(`some error occurred: ${e}`)
        })
    } else if(shouldChange) {
        handleChange()
    }
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
