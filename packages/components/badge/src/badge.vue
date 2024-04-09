<template>
    <div class="ell-badge">
        <slot/>
        <sup class="ell-badge__content is-fixed">
            8
        </sup>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    name: "EllBadge"
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
</style>