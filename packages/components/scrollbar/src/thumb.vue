<template>
    <div :class="[ns.e('bar')]">
        <div :class="ns.e('thumb')" :style="thumbStyle"></div>
    </div>
</template>
<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks'
import { thumbProps } from './thumb';
import { computed } from 'vue';
import { renderThumbStyle } from './util';

const props = defineProps(thumbProps)
const ns = useNamespace('scrollbar')
const thumbStyle = computed(() => renderThumbStyle({
    size: props.size,
    move: props.move
}))

</script>
