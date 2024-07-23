<template>
    <div :class="[containerKls]">
        <div :class="wrapperKls">
            <input :class="nsInput.e('inner')"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { inputProps } from './input'
import { useNamespace } from '@my-element-plus/hooks';
const nsInput = useNamespace('input')
defineOptions({
    name: 'EllInput'
})
const containerKls = computed(() => [
    nsInput.b()
])
const wrapperKls = computed(() => [
    nsInput.e('wrapper'),
    nsInput.is('focus')
])
</script>
