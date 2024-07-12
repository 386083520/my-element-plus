<template>
    <footer :class="ns.b()">
        <slot/>
    </footer>
</template>

<script lang="ts" setup>
import {  useNamespace} from "@my-element-plus/hooks";
defineOptions({
    name: 'EllFooter'
})
const ns = useNamespace('footer')
</script>
