<template>
    <div :class="[containerKls]">
        <div :class="wrapperKls">
            <input
            v-bind="attrs"
            :disabled="disabled"
            :class="nsInput.e('inner')"
            :value="modelValue"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"/>
            <span :class="nsInput.e('suffix')">
                <span :class="nsInput.e('suffix-inner')">
                    <ell-icon
                        v-if="showClear"
                        :class="[nsInput.e('icon'), nsInput.e('clear')]"
                        @click="clear"
                        >
                        <circle-close/>
                    </ell-icon>
                </span>
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { inputProps } from './input'
import { useNamespace } from '@my-element-plus/hooks';
import { useFocusController } from '@my-element-plus/hooks';
import { CircleClose } from '@element-plus/icons-vue';
import { isNil } from 'lodash-unified';
import { UPDATE_MODEL_EVENT } from '@my-element-plus/constants';
const nsInput = useNamespace('input')
const emit = defineEmits([UPDATE_MODEL_EVENT])
defineOptions({
    name: 'EllInput'
})
const props = defineProps(inputProps)
const attrs = useAttrs()
const { isFocused, handleFocus, handleBlur } = useFocusController()
const containerKls = computed(() => [
    nsInput.b(),
    nsInput.is('disabled', props.disabled)
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
    !!nativeInputValue.value
)
const handleInput = (event: Event) => {
    let {value} = event.target as HTMLInputElement
    emit(UPDATE_MODEL_EVENT, value)
}

const clear = () => {
    emit(UPDATE_MODEL_EVENT, '')
}
</script>
