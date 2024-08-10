<template>
    <div :class="[
        containerKls,
        {
            [nsInput.bm('group', 'prepend')] : $slots.prepend,
            [nsInput.bm('group', 'append')] : $slots.append
        }
        ]">
        <template v-if="type !== 'textarea'">
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
            :type="showPassword? (passwordVisible ? 'text': 'password'): type"
            v-bind="attrs"
            :maxlength="maxlength"
            :minlength="minlength"
            :disabled="disabled"
            :class="nsInput.e('inner')"
            @compositionstart="handleCompositionStart"
            @compositionupdate="handleCompositionUpdate"
            @compositionend="handleCompositionEnd"
            @input="handleInput"
            @blur="handleBlur"
            @change="handleChange"
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
                    <span v-if="isWordLimitVisible" :class="nsInput.e('count')">
                        {{ textLength }} / {{ maxlength }}
                    </span>
                </span>
            </span>
        </div>
        <div v-if="$slots.append" :class="nsInput.be('group', 'append')">
            <slot name="append"></slot>
        </div>
        </template>
        <template v-else>
            <textarea
            ref="textarea"
            @input="handleInput"
            v-bind="attrs"
            :maxlength="maxlength"
            :minlength="minlength"
            :class="[nsTextarea.e('inner')]"
            :style="textareaStyle"
            />
            <span v-if="isWordLimitVisible" :class="nsTextarea.e('count')" :style="countStyle">
                {{ textLength }} / {{ maxlength }}
            </span>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, StyleValue, toRef, useSlots, watch } from 'vue';
import { inputEmits, inputProps } from './input'
import { useAttrs, useNamespace } from '@my-element-plus/hooks';
import { useFocusController } from '@my-element-plus/hooks';
import { CircleClose, Hide as IconHide, View as IconView } from '@element-plus/icons-vue';
import { isNil } from 'lodash-unified';
import { isObject } from '@my-element-plus/utils';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
import { calcTextareaHeight } from './utils';
import { useResizeObserver } from '@vueuse/core';
import { EllIcon } from '@my-element-plus/components/icon'
const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')
const input = ref<HTMLInputElement>()
const textarea = ref<HTMLTextAreaElement>()
const emit = defineEmits(inputEmits)
const slots = useSlots()
const passwordVisible = ref(false)
const textareaCalcStyle = ref({})
const countStyle = ref<StyleValue>()
const isComposing = ref(false)
defineOptions({
    name: 'EllInput'
})
const props = defineProps(inputProps)
const attrs = useAttrs()
const _ref = computed(() => input.value || textarea.value)
const { isFocused, handleFocus, handleBlur } = useFocusController()

useResizeObserver(textarea, (entries) => {
    const entry = entries[0]
    const {width} = entry.contentRect
    console.log(width)
    countStyle.value = {
        right: `calc(100% - ${width + 22 - 10}px)`
    }
})

const inputExceed = computed(() =>
    !!isWordLimitVisible.value && textLength.value > Number(props.maxlength)
)

const containerKls = computed(() => [
    props.type === 'textarea'? nsTextarea.b() : nsInput.b(),
    nsInput.m(props.size),
    nsInput.is('disabled', props.disabled),
    nsInput.is('exceed', inputExceed.value),
    {
        [nsInput.b('group')]: slots.prepend || slots.append
    }
])
const textareaStyle = computed<StyleValue>(() => {
    return [
        textareaCalcStyle.value,
        {
            resize: props.resize
        }
    ]
})
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

const isWordLimitVisible = computed(() =>
    props.showWordLimit &&
    !!props.maxlength &&
    (props.type === 'text' || props.type === 'textarea') &&
    !props.showPassword &&
    !props.disabled
)
const textLength = computed(() => nativeInputValue.value.length)
const handleInput = (event: Event) => {
    let {value} = event.target as HTMLInputElement
    if(props.formatter) {
        value = props.parser ? props.parser(value) : value
    }
    if(isComposing.value) return
    emit(UPDATE_MODEL_EVENT, value)
    emit('input', value)
}

const handleChange = (event: Event) => {
    let {value} = event.target as HTMLInputElement
    emit('change', value)
}

const clear = () => {
    emit(UPDATE_MODEL_EVENT, '')
    emit('clear')
    emit('input',  '')
    emit('change',  '')
}

const handlePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value
}

const setNativeInputValue = () => {
    const inputRef = _ref.value
    const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value
    inputRef.value = formatterValue
}

const resizeTextarea = () => {
    const { autosize } = props
    if(autosize) {
        const minRows = isObject(autosize) ? autosize.minRows: undefined
        const maxRows = isObject(autosize) ? autosize.maxRows: undefined
        const textareaStyle = calcTextareaHeight(textarea.value, minRows, maxRows)
        textareaCalcStyle.value = {
            ...textareaStyle
        }
    }
}

const select = () => {
    _ref.value?.select()
}

const handleCompositionStart = (event: CompositionEvent) => {
    emit('compositionstart', event)
    isComposing.value = true
}

const handleCompositionUpdate = (event: CompositionEvent) => {
    emit('compositionupdate', event)
}

const handleCompositionEnd = (event: CompositionEvent) => {
    emit('compositionend', event)
    if(isComposing.value) {
        isComposing.value = false
        handleInput(event)
    }
}

watch(nativeInputValue, () => setNativeInputValue())

watch(
    () => props.modelValue,
    () => {
        nextTick(() => resizeTextarea())
    }
)

onMounted(() => {
    setNativeInputValue()
    nextTick(resizeTextarea)
})

defineExpose({
    input,
    textarea,
    ref: _ref,
    textareaStyle,
    autosize: toRef(props, 'autosize'),
    focus,
    blur,
    clear,
    select,
    resizeTextarea
})
</script>
