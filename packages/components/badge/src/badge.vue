<template>
    <div class="ell-badge">
        <slot/>
        <sup
        v-show="!hidden && (content || isDot)"
        :style="{backgroundColor: color}"
        :class="[type ? 'ell-badge__content--' + type : null, {
            'is-dot': isDot
        }]"
            class="ell-badge__content is-fixed" v-text="content">
        </sup>
    </div>
</template>
<script setup lang="ts">
import { badgeProps } from './badge'
import { computed }  from 'vue'
import { isNumber } from '@my-element-plus/utils/types'
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
