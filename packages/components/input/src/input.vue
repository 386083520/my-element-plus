<template>
    <div :class="[
        containerKls,
        {
            [nsInput.bm('group', 'prepend')] : $slots.prepend
        }
        ]">
        <div v-if="$slots.prepend" :class="nsInput.be('group', 'prepend')">
            <slot name="prepend"></slot>
        </div>
        <div :class="wrapperKls">
            <span :class="nsInput.e('prefix')">
                <span :class="nsInput.e('prefix-inner')">
                    <slot name="prefix"/>
                    <ell-icon v-if="prefixIcon" :class="nsInput.e('icon')">
                        <component :is="prefixIcon"/>
                    </ell-icon>
                </span>
            </span>
            <input
            ref="input"
            :type="showPassword? (passwordVisible ? 'text': 'password'): 'text'"
            v-bind="attrs"
            :disabled="disabled"
            :class="nsInput.e('inner')"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"/>
            <span :class="nsInput.e('suffix')">
                <span :class="nsInput.e('suffix-inner')">
                    <template v-if="true">
                        <slot name="suffix"/>
                        <ell-icon v-if="suffixIcon" :class="nsInput.e('icon')">
                            <component :is="suffixIcon"/>
                        </ell-icon>
                    </template>
                    <ell-icon
                        v-if="showClear"
                        :class="[nsInput.e('icon'), nsInput.e('clear')]"
                        @click="clear"
                        >
                        <circle-close/>
                    </ell-icon>
                    <ell-icon
                        v-if="showPwdvisible"
                        :class="[nsInput.e('icon'), nsInput.e('password')]"
                        @click="handlePasswordVisible"
                        >
                        <component :is="passwordIcon"/>
                    </ell-icon>
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, useAttrs, useSlots, watch } from 'vue';
import { inputProps } from './input'
import { useNamespace } from '@my-element-plus/hooks';
import { useFocusController } from '@my-element-plus/hooks';
import { CircleClose, Hide as IconHide, View as IconView } from '@element-plus/icons-vue';
import { isNil } from 'lodash-unified';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
const nsInput = useNamespace('input')
const input = ref<HTMLInputElement>()
const emit = defineEmits([UPDATE_MODEL_EVENT])
const slots = useSlots()
const passwordVisible = ref(false)
defineOptions({
    name: 'EllInput'
})
const props = defineProps(inputProps)
const attrs = useAttrs()
const { isFocused, handleFocus, handleBlur } = useFocusController()
const containerKls = computed(() => [
    nsInput.b(),
    nsInput.is('disabled', props.disabled),
    {
        [nsInput.b('group')]: slots.prepend
    }
])
const wrapperKls = computed(() => [
    nsInput.e('wrapper'),
    nsInput.is('focus', isFocused.value)
])
const nativeInputValue = computed(() =>
    isNil(props.modelValue) ? '' : String(props.modelValue)
)
const showClear = computed(() =>
    props.clearable &&
    !!nativeInputValue.value &&
    !props.disabled
)
const showPwdvisible = computed(() =>
    props.showPassword && 
    !!nativeInputValue.value &&
    !props.disabled
)

const passwordIcon = computed(() => 
    passwordVisible.value ? IconView: IconHide
)
const handleInput = (event: Event) => {
    let {value} = event.target as HTMLInputElement
    if(props.formatter) {
        value = props.parser ? props.parser(value) : value
    }
    emit(UPDATE_MODEL_EVENT, value)
}

const clear = () => {
    emit(UPDATE_MODEL_EVENT, '')
}

const handlePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value
}

const setNativeInputValue = () => {
    const inputRef = input.value
    const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value
    inputRef.value = formatterValue
}

watch(nativeInputValue, () => setNativeInputValue())

onMounted(() => {
    setNativeInputValue()
})
</script>
