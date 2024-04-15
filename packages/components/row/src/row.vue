<template>
    <div class="ell-row">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import { rowProps } from './row'
defineOptions({
    name: 'EllRow'
})
</script>
