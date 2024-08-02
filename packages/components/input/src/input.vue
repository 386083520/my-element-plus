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
            :type="showPassword? (passwordVisible ? 'text': 'password'): 'text'"
            v-bind="attrs"
            :disabled="disabled"
            :class="nsInput.e('inner')"
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
            :class="[nsTextarea.e('inner')]"
            :style="textareaCalcStyle"
            />
        </template>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, useSlots, watch } from 'vue';
import { inputEmits, inputProps } from './input'
import { useAttrs, useNamespace } from '@my-element-plus/hooks';
import { useFocusController } from '@my-element-plus/hooks';
import { CircleClose, Hide as IconHide, View as IconView } from '@element-plus/icons-vue';
import { isNil } from 'lodash-unified';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')
const input = ref<HTMLInputElement>()
const textarea = ref<HTMLTextAreaElement>()
const emit = defineEmits(inputEmits)
const slots = useSlots()
const passwordVisible = ref(false)
const textareaCalcStyle = ref({})
defineOptions({
    name: 'EllInput'
})
const props = defineProps(inputProps)
const attrs = useAttrs()
const _ref = computed(() => input.value || textarea.value)
const { isFocused, handleFocus, handleBlur } = useFocusController()
const containerKls = computed(() => [
    props.type === 'textarea'? nsTextarea.b() : nsInput.b(),
    nsInput.m(props.size),
    nsInput.is('disabled', props.disabled),
    {
        [nsInput.b('group')]: slots.prepend || slots.append
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
        textareaCalcStyle.value = {
            overflowY: 'hidden',
            height: '700px'
        }
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
})
</script>
