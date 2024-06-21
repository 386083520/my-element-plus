<template>
    <a href="https://www.baidu.com">
        <slot/>
    </a>
</template>

<script lang="ts" setup>
import { linkProps } from './link'
defineOptions({
    name: 'EllLink'
})
</script>
