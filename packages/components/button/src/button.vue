<template>
    <button class="ell-button" :class="type? 'ell-button--' + type: ''">
        <slot/>
    </button>
</template>
<script setup lang="ts">
import { buttonProps } from './button';

    defineOptions({
        name: "EllButton"
    })
    defineProps(buttonProps)
</script>