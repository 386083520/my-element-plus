<template>
    <div class="ell-row">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { rowProps } from './row'
import { provide, computed } from 'vue'
import {rowContextKey } from './constants.ts'
defineOptions({
    name: 'EllRow'
})

const props = defineProps(rowProps)
const gutter = computed(() => props.gutter)
provide(rowContextKey, {
    gutter
})
</script>
