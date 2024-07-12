<template>
    <header :class="ns.b()">
        <slot/>
    </header>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
defineOptions({
    name: 'EllHeader'
})
const ns = useNamespace('header')
</script>
