<template>
    <div class="ell-badge">
        <slot/>
        <sup
        v-show="!hidden"
        :class="[type ? 'ell-badge__content--' + type : null, {
            'is-dot': isDot
        }]"
            class="ell-badge__content is-fixed" v-text="content">
        </sup>
    </div>
</template>
<script setup lang="ts">
import { badgeProps } from './badge.ts'  
import { computed }  from 'vue'
import { isNumber } from '@my-element-plus/utils/vue/props/types.ts'
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
    }
    return props.value
})
</script>
<style>
    .ell-badge {
        position: relative;
        display: inline-block;
    }
    .ell-badge__content {
        background-color: #F56C6C;
        padding: 0 6px;
        height: 18px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 12px;
        color: #fff;
        border: 1px solid #ffffff;
    }
    .ell-badge__content.is-fixed {
        position: absolute;
        top: 0;
        right: 10px;
        transform: translateY(-50%) translateX(100%);
    }
    .ell-badge__content.is-dot {
        width: 8px;
        height: 8px;
        padding: 0;
        right: 5px;
    }
    .ell-badge__content--primary {
        background-color: #409EFF;
    }
    .ell-badge__content--warning {
        background-color: #E6A23C;
    }
    .ell-badge__content--info {
        background-color: #909399;
    }
    .ell-badge__content--success {
        background-color: #67C23A;
    }
</style>