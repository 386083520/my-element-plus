<template>
    <div>
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { checkboxProps } from './checkbox'
defineOptions({
    name: 'EllCheckbox'
})
</script>
