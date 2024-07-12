<template>
    <section :class="ns.b()">
        <slot/>
    </section>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
defineOptions({
    name: 'EllContainer'
})
const ns = useNamespace('container')
</script>
