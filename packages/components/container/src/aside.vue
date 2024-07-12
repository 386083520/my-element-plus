<template>
    <aside :class="ns.b()">
        <slot/>
    </aside>
</template>
<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
defineOptions({
    name: 'EllAside'
})
const ns = useNamespace('aside')
</script>