<template>
    <div :class="[containerKls]">
        <div :class="wrapperKls">
            <input :class="nsInput.e('inner')" @focus="handleFocus"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { inputProps } from './input'
import { useNamespace } from '@my-element-plus/hooks';
import { useFocusController } from '@my-element-plus/hooks';
const nsInput = useNamespace('input')
defineOptions({
    name: 'EllInput'
})
const { isFocused, handleFocus } = useFocusController()
const containerKls = computed(() => [
    nsInput.b()
])
const wrapperKls = computed(() => [
    nsInput.e('wrapper'),
    nsInput.is('focus', isFocused.value)
])
</script>
