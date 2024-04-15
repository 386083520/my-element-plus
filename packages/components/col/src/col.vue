<template>
    <div class="ell-col">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { colProps } from './col'
defineOptions({
    name: 'EllCol'
})
</script>
