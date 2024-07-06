<template>
    <div :class="[ns.e('bar')]">
        <div :class="ns.e('thumb')"></div>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks'
const ns = useNamespace('scrollbar')
</script>