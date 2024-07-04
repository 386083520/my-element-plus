<template>
    <div>
        <div>
            <slot/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { scrollbarProps } from './scrollbar'
defineOptions({
    name: 'EllScrollbar'
})
</script>
