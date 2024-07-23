<template>
    <div :class="[containerKls]">
        <div :class="wrapperKls">
            <input
            v-bind="attrs"
            :class="nsInput.e('inner')"
            :value="modelValue"
            @input="handleInput"
            @blur="handleBlur"
            @focus="handleFocus"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, useAttrs } from 'vue';
import { inputProps } from './input'
import { useNamespace } from '@my-element-plus/hooks';
import { useFocusController } from '@my-element-plus/hooks';
const nsInput = useNamespace('input')
const emit = defineEmits(['update:modelValue'])
defineOptions({
    name: 'EllInput'
})
const props = defineProps(inputProps)
const attrs = useAttrs()
const { isFocused, handleFocus, handleBlur } = useFocusController()
const containerKls = computed(() => [
    nsInput.b()
])
const wrapperKls = computed(() => [
    nsInput.e('wrapper'),
    nsInput.is('focus', isFocused.value)
])
const handleInput = (event: Event) => {
    let {value} = event.target as HTMLInputElement
    emit('update:modelValue', value)
}
</script>
