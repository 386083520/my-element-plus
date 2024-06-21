<template>
    <a 
    :class="linkCls"
    href="https://www.baidu.com">
        <slot/>
    </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { linkProps } from './link'
import { useNamespace } from '@my-element-plus/hooks';
defineOptions({
    name: 'EllLink'
})
const ns = useNamespace('link')
const linkCls = computed(() => [
  ns.b()
])
</script>
