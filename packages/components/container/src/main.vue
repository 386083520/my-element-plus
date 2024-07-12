<template>
    <main :class="ns.b()">
        <slot/>
    </main>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
defineOptions({
    name: 'EllMain'
})
const ns = useNamespace('main')
</script>
