<template>
    <div :class="ns.b()">
        <slot/>
        <sup
        v-show="!hidden && (content || isDot)"
        :style="{backgroundColor: color}"
        :class="[ns.em('content', type), {
            'is-dot': isDot
        }]"
            class="ell-badge__content is-fixed" v-text="content">
        </sup>
    </div>
</template>
<script setup lang="ts">
import { badgeProps } from './badge'
import { computed }  from 'vue'
import { isNumber } from '@my-element-plus/utils'
import { useNamespace } from '@my-element-plus/hooks'
const ns = useNamespace('badge')
defineOptions({
    name: "EllBadge"
})
const props = defineProps(badgeProps)
const content = computed(() => {
    if(props.isDot) return ''
    if(isNumber(props.value) && isNumber(props.max)) {
        if(props.max < props.value) {
            return `${props.max}+`
        }
        return props.value === 0 && !props.showZero ? '' : `${props.value}`
    }
    return `${props.value}`
})
</script>
