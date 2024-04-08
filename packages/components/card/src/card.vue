<template>
    <div class="ell-card" :class="shadow? 'is-' + shadow + '-shadow': ''">
        <div class="ell-card__header" v-if="$slots.header || header">
            <slot name="header">{{header}}</slot>
        </div>
        <div :class="['ell-card__body', bodyClass]" :style="bodyStyle">
            <slot/>
        </div>
        <div class="ell-card__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { cardProps } from './card.ts'
    defineOptions({
        name: 'EllCard'
    })
    defineProps(cardProps)
</script>
<style>
    .ell-card {
        border: 1px solid #e4e7ed;
        color: #303133;
        border-radius: 4px;
    }
    .ell-card__header {
        padding: 18px 20px;
        border-bottom: 1px solid #e4e7ed;
    }
    .ell-card__body {
        padding: 20px;
    }
    .ell-card__footer {
        padding: 18px 20px;
        border-top: 1px solid #e4e7ed;
    }
    .ell-card.is-always-shadow {
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    }
    .ell-card.is-hover-shadow:hover {
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    }
</style>
