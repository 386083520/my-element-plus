<template>
    <div :class="span? 'ell-col-' + span: ''">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { colProps } from './col'
defineOptions({
    name: 'EllCol'
})
defineProps(colProps)
</script>
